const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('.has-sub > a').forEach((a) => {
    a.addEventListener('click', (e) => {
      if (window.matchMedia('(max-width: 900px)').matches) {
        e.preventDefault();
        a.parentElement.classList.toggle('open');
      }
    });
  });
}

/* Hero slider */
(function initHeroSlider() {
  const root = document.querySelector('.hero-slider');
  if (!root) return;
  const slides = [...root.querySelectorAll('.hero-slide')];
  const dotsWrap = root.querySelector('.hero-dots');
  if (!slides.length || !dotsWrap) return;

  let index = 0;
  let timer;

  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', `Slide ${i + 1}`);
    if (i === 0) btn.classList.add('is-active');
    btn.addEventListener('click', () => go(i));
    dotsWrap.appendChild(btn);
  });

  const dots = [...dotsWrap.querySelectorAll('button')];

  function go(n) {
    slides[index].classList.remove('is-active');
    dots[index].classList.remove('is-active');
    index = (n + slides.length) % slides.length;
    slides[index].classList.add('is-active');
    dots[index].classList.add('is-active');
    restart();
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => go(index + 1), 5000);
  }

  root.querySelector('.hero-prev')?.addEventListener('click', () => go(index - 1));
  root.querySelector('.hero-next')?.addEventListener('click', () => go(index + 1));
  restart();
})();

/* Library tabs */
document.querySelectorAll('.lib-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const name = tab.dataset.tab;
    document.querySelectorAll('.lib-tab').forEach((t) => t.classList.toggle('is-active', t === tab));
    document.querySelectorAll('.lib-panel').forEach((p) => {
      p.classList.toggle('is-active', p.dataset.panel === name);
    });
  });
});

/* Industry donut chart */
(function drawIndustryChart() {
  const canvas = document.getElementById('industryChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = [
    { label: 'Nội thất', value: 39, color: '#8C5A3C' },
    { label: 'Dịch vụ', value: 29, color: '#0bb14b' },
    { label: 'Sơn', value: 12, color: '#2b5797' },
    { label: 'Nhựa', value: 7, color: '#e8b730' },
    { label: 'Cơ khí', value: 5, color: '#c0392b' },
    { label: 'Khác', value: 5, color: '#7f8c8d' },
    { label: 'Giấy', value: 3, color: '#f39c12' },
  ];

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const outer = Math.min(cx, cy) - 36;
  const inner = outer * 0.55;
  let start = -Math.PI / 2;

  data.forEach((d) => {
    const angle = (d.value / 100) * Math.PI * 2;
    const mid = start + angle / 2;
    ctx.beginPath();
    ctx.arc(cx, cy, outer, start, start + angle);
    ctx.arc(cx, cy, inner, start + angle, start, true);
    ctx.closePath();
    ctx.fillStyle = d.color;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.2)';
    ctx.lineWidth = 2;
    ctx.stroke();

    const lx = cx + Math.cos(mid) * (outer + 18);
    const ly = cy + Math.sin(mid) * (outer + 18);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 11px Montserrat, sans-serif';
    ctx.textAlign = lx >= cx ? 'left' : 'right';
    ctx.fillText(d.label, lx, ly);
    ctx.fillText(`${d.value}%`, lx, ly + 13);

    start += angle;
  });

  ctx.beginPath();
  ctx.arc(cx, cy, inner - 2, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(0,0,0,.12)';
  ctx.fill();
})();

/* Infrastructure slider (park pages) */
(function initInfraSliders() {
  document.querySelectorAll('[data-infra-slider]').forEach((root) => {
    const slides = [...root.querySelectorAll('.infra-slider-slide')];
    if (slides.length < 2) return;
    let index = 0;
    const go = (n) => {
      index = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('active', i === index));
    };
    const prev = root.querySelector('.infra-slider-prev');
    const next = root.querySelector('.infra-slider-next');
    if (prev) prev.addEventListener('click', () => go(index - 1));
    if (next) next.addEventListener('click', () => go(index + 1));
    setInterval(() => go(index + 1), 5000);
  });
})();

/* Affiliated companies list filters */
(function initCtlkList() {
  const root = document.querySelector('[data-ctlk-list]');
  if (!root) return;

  const qInput = root.querySelector('[data-ctlk-q]');
  const regionSelect = root.querySelector('[data-ctlk-region]');
  const fieldSelect = root.querySelector('[data-ctlk-field]');
  const info = root.querySelector('[data-ctlk-info]');
  const rows = [...root.querySelectorAll('[data-ctlk-tbody] tr')];
  const cards = [...root.querySelectorAll('[data-ctlk-cards] li')];

  function normalize(s) {
    return (s || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function apply() {
    const q = normalize(qInput?.value.trim());
    const region = regionSelect?.value || '';
    const field = fieldSelect?.value || '';
    let visible = 0;

    const match = (el) => {
      const name = el.dataset.name || '';
      const reg = el.dataset.region || '';
      const fld = el.dataset.field || '';
      if (q && !normalize(name).includes(q)) return false;
      if (region && reg !== region) return false;
      if (field && fld !== field) return false;
      return true;
    };

    rows.forEach((row) => {
      const ok = match(row);
      row.classList.toggle('is-hidden', !ok);
      if (ok) {
        visible += 1;
        const stt = row.querySelector('[data-stt]');
        if (stt) stt.textContent = String(visible);
      }
    });

    let cardVisible = 0;
    cards.forEach((card) => {
      const ok = match(card);
      card.classList.toggle('is-hidden', !ok);
      if (ok) {
        cardVisible += 1;
        const stt = card.querySelector('[data-stt]');
        if (stt) stt.textContent = String(cardVisible);
      }
    });

    if (info) {
      if (visible === 0) info.textContent = '0 dòng';
      else info.textContent = `1 - ${visible} của ${visible} dòng`;
    }
  }

  root.querySelector('[data-ctlk-search]')?.addEventListener('click', apply);
  qInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      apply();
    }
  });
  regionSelect?.addEventListener('change', apply);
  fieldSelect?.addEventListener('change', apply);
})();

/* Document list year filter */
(function initDocList() {
  const root = document.querySelector('[data-doc-list]');
  if (!root) return;
  const select = root.querySelector('[data-doc-year]');
  const items = [...root.querySelectorAll('.doc-item')];
  const apply = () => {
    const year = select?.value || '';
    let n = 0;
    items.forEach((item) => {
      const ok = !year || item.dataset.year === year;
      item.classList.toggle('is-hidden', !ok);
      if (ok) {
        n += 1;
        const stt = item.querySelector('.doc-stt');
        if (stt) stt.textContent = String(n);
      }
    });
  };
  select?.addEventListener('change', apply);
})();

/* Contact form captcha */
(function initContactCaptcha() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  const textEl = form.querySelector('[data-captcha-text]');
  const refreshBtn = form.querySelector('[data-captcha-refresh]');
  const input = form.querySelector('#captcha');
  let code = (textEl?.textContent || '').trim();

  const randomCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let out = '';
    for (let i = 0; i < 6; i += 1) out += chars[Math.floor(Math.random() * chars.length)];
    return out;
  };

  const refresh = () => {
    code = randomCode();
    if (textEl) textEl.textContent = code;
    if (input) input.value = '';
  };

  refreshBtn?.addEventListener('click', refresh);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if ((input?.value || '').trim().toUpperCase() !== code.toUpperCase()) {
      alert('Mã xác thực không đúng.');
      refresh();
      return;
    }
    alert('Cảm ơn bạn đã gửi phản ánh. Chúng tôi sẽ liên hệ lại sớm.');
    form.reset();
    refresh();
  });
})();

/* Login password toggle */
(function initLoginPassToggle() {
  document.querySelectorAll('[data-toggle-pass]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const wrap = btn.closest('.ntu-login-input-wrap');
      const input = wrap?.querySelector('input');
      if (!input) return;
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      btn.setAttribute('aria-label', show ? 'Ẩn mật khẩu' : 'Hiện mật khẩu');
      const icon = btn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-eye-slash', !show);
        icon.classList.toggle('fa-eye', show);
      }
    });
  });
})();

(function initDoanhNghiepLogin() {
  const form = document.querySelector('[data-login-form="doanh-nghiep"]');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Chức năng đăng nhập doanh nghiệp sẽ được kết nối hệ thống. Vui lòng liên hệ quản trị viên.');
  });
})();
