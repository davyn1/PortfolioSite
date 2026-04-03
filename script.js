/* ============================================================
   DAVY NGUYEN PORTFOLIO — script.js
   Typing animation, particle canvas, scroll effects
   ============================================================ */

'use strict';

// ── TYPING ANIMATION ──────────────────────────────────────────
const TYPED_STRINGS = [
  'Cybersecurity Enthusiast',
  'Software Engineer',
  'BIM Graduate @ UC Irvine',
];

let typedIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');
const TYPE_SPEED = 80;
const DEL_SPEED = 40;
const PAUSE_MS = 1800;

function typeLoop() {
  const current = TYPED_STRINGS[typedIndex];

  if (!isDeleting) {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeLoop, PAUSE_MS);
      return;
    }
    setTimeout(typeLoop, TYPE_SPEED);
  } else {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      typedIndex = (typedIndex + 1) % TYPED_STRINGS.length;
    }
    setTimeout(typeLoop, DEL_SPEED);
  }
}

setTimeout(typeLoop, 1200); // start after hero animation


// ── PARTICLE CANVAS BACKGROUND ────────────────────────────────
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H, particles;
const PARTICLE_COUNT = 80;
const CONNECT_DIST = 140;

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

class Particle {
  constructor() { this.reset(true); }

  reset(init = false) {
    this.x = Math.random() * W;
    this.y = init ? Math.random() * H : H + 10;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = -Math.random() * 0.3 - 0.1;
    this.r = Math.random() * 1.5 + 0.5;
    this.a = Math.random() * 0.5 + 0.1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y < -10) this.reset();
    if (this.x < 0 || this.x > W) this.vx *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 245, 255, ${this.a})`;
    ctx.fill();
  }
}

function initParticles() {
  particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
}

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONNECT_DIST) {
        const alpha = (1 - dist / CONNECT_DIST) * 0.12;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animateCanvas() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(animateCanvas);
}

window.addEventListener('resize', () => { resize(); initParticles(); });
resize();
initParticles();
animateCanvas();


// ── NAVBAR SCROLL EFFECT ──────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });


// ── INTERSECTION OBSERVER — SCROLL REVEAL ─────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger children inside the same parent
      const delay = getStaggerDelay(entry.target);
      entry.target.style.transitionDelay = `${delay}ms`;
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function getStaggerDelay(el) {
  const siblings = el.parentElement
    ? Array.from(el.parentElement.querySelectorAll('.reveal'))
    : [];
  const idx = siblings.indexOf(el);
  return idx >= 0 ? idx * 80 : 0;
}

revealEls.forEach(el => revealObs.observe(el));


// ── ACTIVE NAV LINK HIGHLIGHTING ─────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}`
          ? 'var(--neon-cyan)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObs.observe(s));


// ── HAMBURGER MENU ────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
let mobileMenuOpen = false;
let mobileMenu = null;

hamburger.addEventListener('click', () => {
  mobileMenuOpen = !mobileMenuOpen;

  if (mobileMenuOpen) {
    // Build menu
    mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.style.cssText = `
      position: fixed; top: 60px; left: 0; right: 0; bottom: 0;
      background: rgba(5,10,15,0.97);
      backdrop-filter: blur(16px);
      z-index: 999;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 32px;
      animation: fadeUp 0.3s ease;
    `;

    const links = [
      ['#about', '01', 'About'],
      ['#projects', '02', 'Projects'],
      ['#certs', '03', 'Certs'],
      ['#github', '04', 'GitHub'],
      ['#contact', '', 'Contact'],
    ];

    links.forEach(([href, num, label]) => {
      const a = document.createElement('a');
      a.href = href;
      a.innerHTML = num
        ? `<span style="color:var(--neon-cyan);font-size:0.8rem;margin-right:8px;">${num}.</span>${label}`
        : label;
      a.style.cssText = `
        font-family: var(--font-mono);
        font-size: 1.6rem;
        color: var(--text-primary);
        text-decoration: none;
        transition: color 0.2s;
      `;
      a.addEventListener('mouseenter', () => a.style.color = 'var(--neon-cyan)');
      a.addEventListener('mouseleave', () => a.style.color = 'var(--text-primary)');
      a.addEventListener('click', () => {
        mobileMenuOpen = false;
        document.body.removeChild(mobileMenu);
        mobileMenu = null;
      });
      mobileMenu.appendChild(a);
    });

    document.body.appendChild(mobileMenu);

    // Animate hamburger to X
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    if (mobileMenu) document.body.removeChild(mobileMenu);
    mobileMenu = null;

    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});


// ── SMOOTH SCROLL POLYFILL (for older Safari) ─────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ── PROFILE PHOTO SWAP ────────────────────────────────────────
// Replace the placeholder icon with actual photo if it exists
(function tryLoadPhoto() {
  const img = new Image();
  img.src = 'assets/profile.jpg';
  img.onload = () => {
    const placeholder = document.getElementById('profile-photo');
    if (placeholder) {
      const frame = placeholder.parentElement;
      img.alt = 'Davy Nguyen';
      img.style.cssText = `
        position:relative; z-index:2; width:100%; height:100%;
        border-radius:50%; object-fit:cover;
      `;
      frame.replaceChild(img, placeholder);
    }
  };
})();


// ── NEON CURSOR GLOW (desktop only) ──────────────────────────
if (window.matchMedia('(pointer:fine)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed; width:300px; height:300px; border-radius:50%;
    background: radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%);
    pointer-events:none; z-index:0; transform:translate(-50%,-50%);
    transition: opacity 0.3s;
  `;
  document.body.appendChild(glow);

  let glowX = 0, glowY = 0;
  let glowTX = 0, glowTY = 0;

  window.addEventListener('mousemove', e => {
    glowTX = e.clientX;
    glowTY = e.clientY;
  }, { passive: true });

  (function animGlow() {
    glowX += (glowTX - glowX) * 0.08;
    glowY += (glowTY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animGlow);
  })();
}


// ── CONSOLE EASTER EGG ────────────────────────────────────────
console.log(
  `%c
  ██████╗  █████╗ ██╗   ██╗██╗   ██╗
  ██╔══██╗██╔══██╗██║   ██║╚██╗ ██╔╝
  ██║  ██║███████║██║   ██║ ╚████╔╝ 
  ██║  ██║██╔══██║╚██╗ ██╔╝  ╚██╔╝  
  ██████╔╝██║  ██║ ╚████╔╝    ██║   
  ╚═════╝ ╚═╝  ╚═╝  ╚═══╝     ╚═╝   
  `,
  'color: #00F5FF; font-family: monospace;'
);
console.log('%c👾 Hey there, fellow Dev! Checking out my source code? I like your style.', 'color:#8BA3B0; font-family:monospace;');
console.log('%c📬 Reach me at: davyn1300@gmail.com', 'color:#39FF14; font-family:monospace;');
