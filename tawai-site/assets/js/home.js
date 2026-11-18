/* หน้าแรก — ตัวกรองสื่อล่าสุด, FAQ, ตัวเลขวิ่ง และ animation (GSAP + ScrollTrigger) */

/* ---------- Media filter tabs ---------- */
(() => {
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('#mgrid .m-card');
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.setAttribute('aria-pressed', x === t));
    const f = t.dataset.f;
    cards.forEach(c => c.classList.toggle('hide', f !== 'all' && c.dataset.cat !== f));
    if (window.gsap) gsap.fromTo('#mgrid .m-card:not(.hide)', {y: 24, opacity: 0}, {y: 0, opacity: 1, duration: .5, stagger: .06, ease: 'power3.out'});
  }));
})();

/* ---------- FAQ accordion ---------- */
document.querySelectorAll('.qa button').forEach(b => b.addEventListener('click', () => {
  const qa = b.parentElement, on = !qa.classList.contains('open');
  qa.classList.toggle('open', on);
  b.setAttribute('aria-expanded', on);
}));

/* ---------- Count-up (works with or without GSAP) ---------- */
const fmt = n => Math.round(n).toLocaleString('en-US');
function countUp(el) {
  if (el.dataset.done) return; el.dataset.done = 1;
  const end = +el.dataset.count, t0 = performance.now(), dur = 1600;
  const tick = now => { const p = Math.min(1, (now - t0) / dur); el.textContent = fmt(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) countUp(e.target); }), {threshold: .5});
document.querySelectorAll('[data-count]').forEach(el => io.observe(el));

/* ---------- GSAP scroll motion ---------- */
window.addEventListener('load', () => {
  if (!window.gsap || !window.ScrollTrigger) { document.querySelectorAll('[data-count]').forEach(countUp); return; }
  gsap.registerPlugin(ScrollTrigger);

  // hero intro: lines slide up, highlight underline draws
  const tl = gsap.timeline({defaults: {ease: 'power4.out'}});
  tl.from('.hero h1 .line > span', {yPercent: 110, duration: 1, stagger: .12})
    .from('.hero [data-pop]', {y: 24, opacity: 0, duration: .7, stagger: .08}, '-=.6')
    .from('.hero-art img', {y: 40, opacity: 0, duration: 1}, '-=.8');



  // headings: text wipe
  gsap.utils.toArray('[data-wipe]').forEach(el => {
    /* เผื่อขอบบน-ล่าง -0.4em ไม่ให้ตัดสระบน/วรรณยุกต์ และล้าง clip-path เมื่อจบ */
    gsap.fromTo(el, {clipPath: 'inset(-0.4em 100% -0.4em 0)'}, {clipPath: 'inset(-0.4em 0% -0.4em 0)', duration: 1.1, ease: 'power3.inOut', clearProps: 'clipPath', scrollTrigger: {trigger: el, start: 'top 85%'}});
  });

  // pop-ins outside hero
  gsap.utils.toArray('section:not(.hero) [data-pop]').forEach(el => {
    gsap.from(el, {y: 24, opacity: 0, duration: .8, ease: 'power3.out', scrollTrigger: {trigger: el, start: 'top 88%'}});
  });

  // cards rise in, staggered per group
  gsap.set('[data-rise]', {y: 50, opacity: 0});
  ScrollTrigger.batch('[data-rise]', {
    start: 'top 90%',
    onEnter: batch => gsap.to(batch, {y: 0, opacity: 1, duration: .9, stagger: .1, ease: 'power3.out', overwrite: true})
  });

  // steps progress bar scrubbed to scroll
  gsap.to('#bar', {scaleX: 1, ease: 'none', scrollTrigger: {trigger: '#steps', start: 'top 70%', end: 'bottom 60%', scrub: true}});
});
