// ---------- Hero floating particles ----------
(function(){
  const holder = document.getElementById('heroParticles');
  if(!holder) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced) return;
  const count = 20;
  for(let i=0;i<count;i++){
    const s = document.createElement('span');
    const size = (2 + Math.random()*3).toFixed(1);
    s.style.setProperty('--size', size+'px');
    s.style.setProperty('--left', (Math.random()*100).toFixed(1)+'%');
    s.style.setProperty('--dur', (7 + Math.random()*7).toFixed(1)+'s');
    s.style.setProperty('--delay', (Math.random()*9).toFixed(1)+'s');
    s.style.setProperty('--drift', (Math.random()*60-30).toFixed(0)+'px');
    holder.appendChild(s);
  }
})();

// ---------- Cursor-follow glow on cards ----------
(function(){
  const cards = document.querySelectorAll('.serv-card, .testi-card');
  cards.forEach(card=>{
    card.addEventListener('pointermove', ev=>{
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (ev.clientX - r.left) + 'px');
      card.style.setProperty('--my', (ev.clientY - r.top) + 'px');
    });
  });
})();

// ---------- Header scroll state + float WA ----------
(function(){
  const header = document.getElementById('siteHeader');
  const floatWa = document.getElementById('floatWa');
  const progress = document.getElementById('scrollProgress');
  let ticking = false;
  function onScroll(){
    if(!ticking){
      ticking = true;
      requestAnimationFrame(()=>{
        const y = window.scrollY;
        header.classList.toggle('scrolled', y > 30);
        floatWa.classList.toggle('show', y > 500);
        if(progress){
          const max = document.documentElement.scrollHeight - window.innerHeight;
          progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
        }
        ticking = false;
      });
    }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll, {passive:true});
  onScroll();
})();

// ---------- Mobile menu ----------
(function(){
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  function close(){
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Abrir menu');
    document.body.classList.remove('nav-open');
  }
  function open(){
    nav.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded','true');
    toggle.setAttribute('aria-label','Fechar menu');
    document.body.classList.add('nav-open');
  }
  toggle.addEventListener('click', ()=>{
    nav.classList.contains('open') ? close() : open();
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', close));
  window.addEventListener('keydown', e=>{ if(e.key === 'Escape') close(); });
  window.addEventListener('resize', ()=>{ if(window.innerWidth > 920) close(); });
})();

// ---------- Reveal on scroll ----------
(function(){
  const els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){ els.forEach(e=>e.classList.add('on')); return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('on');
        e.target.addEventListener('transitionend', ()=>{ e.target.style.transitionDelay = '0s'; }, {once:true});
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.14, rootMargin:'0px 0px -40px 0px'});
  els.forEach(el=>io.observe(el));
})();

// ---------- Animated counters ----------
(function(){
  const nums = document.querySelectorAll('.num-item .val');
  if(!nums.length) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const dec = el.dataset.count.includes('.') ? 1 : 0;
      const t0 = performance.now(), dur = 1500;
      function tick(now){
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1-p, 3);
        el.textContent = (target*eased).toFixed(dec) + suffix;
        if(p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, {threshold:0.5});
  nums.forEach(n=>io.observe(n));
})();

// ---------- FAQ accordion ----------
(function(){
  document.querySelectorAll('.faq-item').forEach(item=>{
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    function setHeight(){ a.style.maxHeight = item.classList.contains('open') ? a.scrollHeight+'px' : '0px'; }
    setHeight();
    q.addEventListener('click', ()=>{
      const willOpen = !item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o=>{ o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight='0px'; });
      if(willOpen){ item.classList.add('open'); setHeight(); }
    });
    window.addEventListener('resize', ()=>{ if(item.classList.contains('open')) setHeight(); });
  });
})();

// ---------- Testimonial drag + nav ----------
(function(){
  const track = document.getElementById('testiTrack');
  const prev = document.getElementById('testiPrev');
  const next = document.getElementById('testiNext');
  let down=false, startX=0, startScroll=0, moved=false;
  track.addEventListener('pointerdown', e=>{ down=true; moved=false; startX=e.clientX; startScroll=track.scrollLeft; track.classList.add('dragging'); });
  track.addEventListener('pointermove', e=>{
    if(!down) return;
    if(Math.abs(e.clientX-startX) > 5) moved = true;
    track.scrollLeft = startScroll - (e.clientX - startX);
  });
  ['pointerup','pointerleave'].forEach(ev=>track.addEventListener(ev, ()=>{ down=false; track.classList.remove('dragging'); }));
  function cardWidth(){ const c = track.querySelector('.testi-card'); return c ? c.getBoundingClientRect().width + 24 : 400; }
  prev.addEventListener('click', ()=> track.scrollBy({left:-cardWidth(), behavior:'smooth'}));
  next.addEventListener('click', ()=> track.scrollBy({left:cardWidth(), behavior:'smooth'}));
})();
