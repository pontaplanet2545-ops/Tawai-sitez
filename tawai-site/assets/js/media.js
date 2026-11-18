/* หน้าสื่อเผยแพร่ — หนึ่งหน้า ใช้กับทุกหมวด
   ลิงก์ media.html?cat=forms จะเปิดหมวดคู่มือ / แบบฟอร์มต่างๆ ทันที */
(() => {
  const params = new URLSearchParams(location.search);
  const state = {
    cat: MEDIA_CATS.some((c) => c.id === params.get('cat')) ? params.get('cat') : 'all',
    type: MEDIA_TYPES.some((t) => t.id === params.get('type')) ? params.get('type') : 'all',
    q: ''
  };
  const $ = (s) => document.querySelector(s);
  const catLabel = (id) => (MEDIA_CATS.find((c) => c.id === id) || {}).label;
  const typeLabel = (id) => (MEDIA_TYPES.find((t) => t.id === id) || {}).label;
  const THUMB = {
    video: ['linear-gradient(140deg,#5B9BFF,#0E46AA)', 'play'],
    doc: ['linear-gradient(140deg,#3E5B80,#112972)', 'file'],
    image: ['linear-gradient(140deg,#FFB3A8,#F96E64)', 'image'],
    article: ['linear-gradient(140deg,#9CC3FF,#5B9BFF)', 'news']
  };
  const DETAIL = { video: 'video.html', image: 'gallery.html', article: 'article.html', doc: 'article.html' };

  function syncUrl() {
    const p = new URLSearchParams();
    if (state.cat !== 'all') p.set('cat', state.cat);
    if (state.type !== 'all') p.set('type', state.type);
    try { history.replaceState(null, '', location.pathname + (p.toString() ? '?' + p : '')); } catch (e) { /* เปิดจากไฟล์ในเครื่องบางเบราว์เซอร์ไม่ยอม — บนเซิร์ฟเวอร์จริงใช้ได้ */ }
  }

  function renderSide() {
    const base = MEDIA_ITEMS.filter((i) => state.type === 'all' || i.type === state.type);
    const row = (id, label, n) => `<li><button type="button" class="f-row${state.cat === id ? ' on' : ''}" data-cat="${id}" aria-pressed="${state.cat === id}"><span>${label}</span><em>${n}</em></button></li>`;
    const groups = [...new Set(MEDIA_CATS.map((c) => c.group))];
    $('#side').innerHTML = `<ul>${row('all', 'ทั้งหมด', base.length)}</ul>` + groups.map((g) =>
      `<p class="label">${g}</p><ul>${MEDIA_CATS.filter((c) => c.group === g).map((c) => row(c.id, c.label, base.filter((i) => i.cat === c.id).length)).join('')}</ul>`).join('');
    $('#side').querySelectorAll('.f-row').forEach((b) => b.addEventListener('click', () => { state.cat = b.dataset.cat; update(); }));
  }

  function renderTypes() {
    $('#types').innerHTML = MEDIA_TYPES.map((t) => `<button type="button" class="tab" aria-pressed="${state.type === t.id}" data-type="${t.id}">${t.label}</button>`).join('');
    $('#types').querySelectorAll('.tab').forEach((b) => b.addEventListener('click', () => { state.type = b.dataset.type; update(); }));
  }

  function renderGrid() {
    const q = state.q.trim().toLowerCase();
    const list = MEDIA_ITEMS.filter((i) => (state.cat === 'all' || i.cat === state.cat) && (state.type === 'all' || i.type === state.type) && (!q || i.title.toLowerCase().includes(q)));
    const cat = MEDIA_CATS.find((c) => c.id === state.cat);
    $('#page-title').textContent = cat ? cat.label : 'สื่อเผยแพร่';
    $('#page-desc').textContent = cat ? cat.desc : 'ความรู้ คู่มือ ข่าว และผลงานของเครือข่ายตาไว เลือกหมวดหรือประเภทสื่อเพื่อกรอง';
    $('#crumb-cat').textContent = cat ? ' / ' + cat.label : '';
    document.title = (cat ? cat.label + ' — ' : '') + 'สื่อเผยแพร่ | ตาไว';
    $('#count').innerHTML = `พบ <strong>${list.length}</strong> รายการ · ${cat ? cat.label : 'ทุกหมวด'} · ${state.type === 'all' ? 'ทุกประเภท' : typeLabel(state.type)}`;
    $('#mgrid').innerHTML = list.map((i) => {
      const [bg, ic] = THUMB[i.type];
      const know = (MEDIA_CATS.find((c) => c.id === i.cat) || {}).group === 'ความรู้';
      return `<a class="m-card" href="${DETAIL[i.type]}?id=${i.id}"><div class="m-thumb" style="background:${bg}"><span class="m-type">${typeLabel(i.type)}</span><svg viewBox="0 0 24 24">${ICONS[ic]}</svg></div><div class="m-body"><span class="tag${know ? '' : ' w'}">${catLabel(i.cat)}</span><b>${i.title}</b><span>${i.date}</span></div></a>`;
    }).join('');
    $('#empty').hidden = list.length > 0;
    if (window.gsap) gsap.fromTo('#mgrid .m-card', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .05, ease: 'power3.out' });
  }

  function update() { renderSide(); renderTypes(); renderGrid(); syncUrl(); }

  $('#q').addEventListener('input', (e) => { state.q = e.target.value; renderGrid(); });
  $('#reset').addEventListener('click', () => { state.cat = 'all'; state.type = 'all'; state.q = ''; $('#q').value = ''; update(); });
  update();
})();
