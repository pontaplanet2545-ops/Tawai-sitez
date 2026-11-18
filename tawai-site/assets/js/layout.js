/* =========================================================
   ตาไว — layout.js
   ไฟล์เดียวที่คุมเมนู (header) และ footer ของทุกหน้า
   ▸ แก้ "คำ" ในเมนู / เพิ่ม-ลบหน้า / เปลี่ยนลิงก์ → แก้ใน SITE ด้านล่างที่เดียว
   ▸ หน้าใหม่: ใส่ <div id="site-header"></div> กับ <div id="site-footer"></div>
     แล้วโหลดไฟล์นี้ และตั้ง <body data-page="ชื่อเมนู">
   ========================================================= */

const SITE = {
  brand: { name: 'ตาไว', sub: 'TaWai for Health', logo: 'assets/img/logo.png', owner: '[ชื่อหน่วยงานเจ้าของระบบ]' },
  cta: { label: 'รายงานผลิตภัณฑ์', href: 'report.html' },

  nav: [
    {
      id: 'check', label: 'ตรวจสอบ', layout: 'split',
      cols: [{ label: 'บริการ', items: [
        { t: 'ตรวจสอบเลข อย.', d: 'ค้นหาเลขทะเบียนก่อนซื้อ', href: 'fda-check.html', icon: 'shield' },
        { t: 'ระบบรายงาน', d: 'แจ้งผลิตภัณฑ์ที่น่าสงสัย', href: 'report.html', icon: 'flag' },
        { t: 'แอปตาไว', d: 'รายงานผ่านมือถือ', href: 'app.html', icon: 'phone' },
        { t: 'วิธีใช้งานระบบ', d: 'คู่มือทีละขั้น', href: 'media.html?cat=howto', icon: 'book' }
      ]}],
      side: { label: 'เคล็ดลับก่อนซื้อ', items: [
        { t: '[ชื่อบทความแนะนำ 1]', d: 'สื่อให้ความรู้', href: 'article.html', icon: 'search', tone: 'blue' },
        { t: '[ชื่อวิดีโอแนะนำ]', d: 'การสอน / การใช้งาน', href: 'video.html', icon: 'play', tone: 'coral' },
        { t: '[ชื่อคู่มือ]', d: 'คู่มือ / แบบฟอร์มต่างๆ', href: 'media.html?cat=forms', icon: 'file', tone: 'navy' }
      ]}
    },
    {
      id: 'media', label: 'สื่อเผยแพร่', layout: 'three',
      cols: [
        { label: 'ความรู้', tint: '', items: [
          { t: 'สื่อให้ความรู้', href: 'media.html?cat=edu', icon: 'bulb' },
          { t: 'การสอน / การใช้งาน', href: 'media.html?cat=howto', icon: 'play' },
          { t: 'คู่มือ / แบบฟอร์มต่างๆ', href: 'media.html?cat=forms', icon: 'file' }
        ]},
        { label: 'ผลงาน', tint: 't-teal', items: [
          { t: 'ข่าว / ประชาสัมพันธ์', href: 'media.html?cat=news', icon: 'news' },
          { t: 'ผลการดำเนินงาน', href: 'media.html?cat=perf', icon: 'chart' },
          { t: 'ผลงานวิจัย', href: 'media.html?cat=research', icon: 'flask' }
        ]},
        { label: 'คลังสื่อ', tint: 't-peach', items: [
          { t: 'วิดีโอ', href: 'video.html', icon: 'yt' },
          { t: 'รูปภาพ', href: 'gallery.html', icon: 'image' },
          { t: 'สื่อทั้งหมด', href: 'media.html', icon: 'grid' }
        ]}
      ]
    },
    {
      id: 'about', label: 'เกี่ยวกับตาไว', layout: 'split',
      cols: [{ label: 'องค์กร', items: [
        { t: 'รู้จักตาไว', d: 'ที่มาและเป้าหมาย', href: 'about.html', icon: 'info' },
        { t: 'ติดต่อเรา', d: 'ช่องทางติดต่อทีมงาน', href: 'contact.html', icon: 'mail' },
        { t: 'นโยบายความเป็นส่วนตัว', d: 'การใช้ข้อมูลผู้รายงาน', href: 'privacy.html', icon: 'lock' },
        { t: 'ข้อกำหนดการใช้งาน', d: 'เงื่อนไขเว็บและแอป', href: 'terms.html', icon: 'file' }
      ]}],
      side: { label: 'ติดตามตาไว', items: [
        { t: 'YouTube', d: 'คลิปความรู้และวิธีใช้งาน', href: '#', icon: 'yt', tone: 'coral', ext: true },
        { t: 'Facebook', d: 'ข่าวและกิจกรรมล่าสุด', href: '#', icon: 'fb', tone: 'blue', ext: true },
        { t: 'แอปตาไว', d: 'iOS และ Android', href: 'app.html', icon: 'phone', tone: 'navy' }
      ]}
    },
    { id: 'contact', label: 'ติดต่อเรา', href: 'contact.html' }
  ],

  footerExtra: { label: 'ติดตาม', items: [ { t: 'YouTube', href: '#' }, { t: 'Facebook', href: '#' } ] }
};

/* ---------- icons (stroke) ---------- */
const ICONS = {
  shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  flag: '<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
  phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
  book: '<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z"/><path d="M4 19V5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5 3.5-5 3.5z"/>',
  file: '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9V16h7v-2.1A6 6 0 0012 3z"/>',
  news: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 001.8 3h10.4a2 2 0 001.8-3l-5-9V3"/>',
  yt: '<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>',
  fb: '<path d="M15 3h-2a4 4 0 00-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 011-1h2z"/>'
};
const svg = (k) => `<svg viewBox="0 0 24 24">${ICONS[k] || ''}</svg>`;
const caret = '<svg class="caret" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
const ext = (i) => i.ext ? ' target="_blank" rel="noopener"' : '';

/* ---------- render header ---------- */
function renderHeader(current) {
  const items = SITE.nav.map((n) => {
    if (n.href) return `<div class="nav-item"><a class="nav-btn${n.id === current ? ' current' : ''}" href="${n.href}"${n.id === current ? ' aria-current="page"' : ''}>${n.label}</a></div>`;
    const cls = n.layout === 'three' ? 'panel three' : 'panel';
    const cols = n.cols.map((c) => `
      <div class="col"><p class="label">${c.label}</p><ul>${c.items.map((i) => n.layout === 'three'
        ? `<li><a class="link slim" href="${i.href}"${ext(i)}><span class="tile ${c.tint || ''}">${svg(i.icon)}</span><span class="link-text"><b>${i.t}</b></span></a></li>`
        : `<li><a class="link" href="${i.href}"${ext(i)}><span class="tile">${svg(i.icon)}</span><span class="link-text"><b>${i.t}</b><span>${i.d || ''}</span></span></a></li>`).join('')}</ul></div>`).join('');
    const side = n.side ? `
      <div class="col side"><p class="label">${n.side.label}</p><ul>${n.side.items.map((i) =>
        `<li><a class="story" href="${i.href}"${ext(i)}><span class="thumb t-${i.tone}">${svg(i.icon)}</span><span><b>${i.t}</b><span>${i.d}</span></span></a></li>`).join('')}</ul></div>` : '';
    return `<div class="nav-item"><button class="nav-btn${n.id === current ? ' current' : ''}" aria-expanded="false" aria-controls="p-${n.id}">${n.label} ${caret}</button><div class="${cls}" id="p-${n.id}">${cols}${side}</div></div>`;
  }).join('');

  return `<header class="header"><div class="bar">
    <a class="logo" href="index.html" aria-label="${SITE.brand.name} หน้าแรก"><img src="${SITE.brand.logo}" alt="${SITE.brand.sub} ${SITE.brand.name}" width="200" height="40"></a>
    <nav class="nav" id="nav" aria-label="เมนูหลัก">${items}</nav>
    <a class="cta" href="${SITE.cta.href}">${SITE.cta.label}</a>
    <button class="burger" id="burger" aria-label="เปิดเมนู" aria-expanded="false" aria-controls="nav"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
  </div></header><div class="scrim" id="scrim"></div>`;
}

/* ---------- render footer (สร้างจากเมนูเดียวกัน) ---------- */
function renderFooter() {
  const groups = SITE.nav.filter((n) => n.cols).map((n) => {
    const links = n.cols.flatMap((c) => c.items).filter((i, idx, arr) => arr.findIndex((x) => x.href === i.href) === idx);
    return `<div><h4>${n.label}</h4><ul>${links.map((i) => `<li><a href="${i.href}"${ext(i)}>${i.t}</a></li>`).join('')}</ul></div>`;
  }).join('');
  const extra = `<div><h4>${SITE.footerExtra.label}</h4><ul>${SITE.footerExtra.items.map((i) => `<li><a href="${i.href}" target="_blank" rel="noopener">${i.t}</a></li>`).join('')}</ul></div>`;
  return `<footer class="footer"><div class="wrap f-grid">
    <div class="f-brand"><a class="f-logo" href="index.html"><img src="${SITE.brand.logo}" alt="${SITE.brand.sub}" width="170" height="34"></a><p>${SITE.brand.sub}<br>${SITE.brand.owner}</p></div>${groups}${extra}
  </div><div class="wrap f-bottom"><span>© ${new Date().getFullYear() + 543} ${SITE.brand.sub}</span><span>tawaiforhealth.org</span></div></footer>`;
}

/* ---------- menu behaviour ---------- */
function bindMenu() {
  const btns = [...document.querySelectorAll('.nav-btn[aria-controls]')];
  const scrim = document.getElementById('scrim');
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const desktop = () => matchMedia('(min-width: 901px)').matches;
  let t;
  const panelOf = (b) => document.getElementById(b.getAttribute('aria-controls'));
  const closeAll = () => { btns.forEach((b) => { b.setAttribute('aria-expanded', 'false'); panelOf(b).classList.remove('open'); }); scrim.classList.remove('on'); };
  const open = (btn) => { clearTimeout(t); btns.forEach((b) => { const on = b === btn; b.setAttribute('aria-expanded', on); panelOf(b).classList.toggle('open', on); }); if (desktop()) scrim.classList.add('on'); };
  btns.forEach((btn) => {
    const item = btn.parentElement;
    btn.addEventListener('click', () => (btn.getAttribute('aria-expanded') === 'true' ? closeAll() : open(btn)));
    item.addEventListener('mouseenter', () => { if (desktop()) open(btn); });
    item.addEventListener('mouseleave', () => { if (desktop()) t = setTimeout(closeAll, 180); });
  });
  scrim.addEventListener('click', closeAll);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeAll(); nav.classList.remove('show'); burger.setAttribute('aria-expanded', 'false'); } });
  burger.addEventListener('click', () => { const on = !nav.classList.contains('show'); nav.classList.toggle('show', on); burger.setAttribute('aria-expanded', on); if (!on) closeAll(); });
  addEventListener('resize', () => { if (desktop()) { nav.classList.remove('show'); burger.setAttribute('aria-expanded', 'false'); } });
}

/* ---------- mount ---------- */
(function mount() {
  const current = document.body.dataset.page || '';
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.outerHTML = renderHeader(current);
  if (f) f.outerHTML = renderFooter();
  bindMenu();
})();
