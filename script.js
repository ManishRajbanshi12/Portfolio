
/* ============ DATA ============ */
const STATS = [
  { label:'PROJECTS', value:'5+', trend:'+1 this year', icon:'folder' },
  { label:'TECHNOLOGIES', value:'20+', trend:'Full-stack + AI/ML', icon:'cpu' },
  { label:'RESEARCH', value:'IEEE', sub:'Published', trend:'ICCCA 2025', icon:'flask' },
  { label:'EXPERIENCE', value:'Web Developer', trend:'Internships', icon:'briefcase' },
];

const SKILLS = [
  { title:'PROGRAMMING', icon:'code', skills:[
    {name:'Python',level:92}
  ]},
  { title:'FRONTEND', icon:'layout', skills:[
    {name:'HTML',level:95},{name:'CSS',level:90},{name:'JS',level:87}
  ]},
  { title:'BACKEND', icon:'server', skills:[
    {name:'Django',level:85},{name:'Flask',level:85},{name:'Fast API',level:88}
  ]},
  { title:'DATABASE', icon:'database', skills:[
    {name:'MongoDB',level:85},{name:'MySQL',level:85},{name:'PostgreSQL',level:80}
  ]},
  { title:'AI/ML', icon:'brain', skills:[
    {name:'Machine Learning & Deep Learning',level:82},{name:'Scikit-learn',level:80},{name:'TensorFlow',level:75}
  ]},
  { title:'Visualization', icon:'brain', skills:[
    {name:'Matplotlib',level:82},{name:'Seaborn',level:80}
  ]},
  { title:'CLOUD', icon:'cpu', skills:[
    {name:'AWS',level:80},{name:'Azure',level:75},{name:'Google Cloud',level:70}
    
  ]},
];

const PROJECTS = [
  {
    id:'01', featured:true,
    title:'Live Attendance System Using Face Recognition (Final Year Project)',
    desc:'An AI-powered attendance system using face recognition to automate student attendance and reduce manual attendance processes.',
    tech:['Python','Machine Learning','Deep Learning'],
    github:'https://github.com/avinashkumar059/Live-Attendance-System-Using-Face-Recognition',
    demo:'https://your-demo-link.com'
  },
  {
    id:'02', featured:false,
    title:'School Management Information System',
    desc:'A complete school management platform with role-based dashboards for administrators, faculty, students, and principals.',
    tech:['React','Node.js','Express.js','MongoDB'],
    github:'https://github.com',
    demo:'https://your-demo-link.com'
  },
  {
    id:'03', featured:false,
    title:'Zomato Data Analysis',
    desc:'A data analytics project exploring restaurant data and extracting actionable business insights.',
    tech:['Python','Pandas','Matplotlib','Power BI'],
    github:'https://github.com',
    demo:'https://your-demo-link.com'
  },
];

const REPOS = [
  { name:'face-attendance', lang:'Python', stars:42, desc:'Real-time face recognition attendance system.' },
  { name:'school-mis', lang:'JavaScript', stars:28, desc:'Role-based school management platform.' },
  { name:'zomato-analysis', lang:'Jupyter', stars:19, desc:'EDA and insights on restaurant data.' },
  { name:'dev-dashboard', lang:'React', stars:15, desc:'Analytics-style developer dashboard UI.' },
];

/* ============ ICON FACTORY ============ */
const ICONS = {
  folder:'<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>',
  cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>',
  flask:'<path d="M10 2v6.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 8.5V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
  briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  layout:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  server:'<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
  database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  brain:'<path d="M12 5a3 3 0 0 0-3 3v0a3 3 0 0 0-3 3v0a3 3 0 0 0 1 2 3 3 0 0 0 2 5 3 3 0 0 0 6 0 3 3 0 0 0 2-5 3 3 0 0 0 1-2 3 3 0 0 0-3-3 3 3 0 0 0-3-3Z"/>',
  star:'<path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"/>',
  fork:'<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/><path d="M12 12v3"/>',
  arrowUpRight:'<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  external:'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  github:'<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  check:'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  send:'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
};
function svg(name, size=18){
  const body = ICONS[name] || '';
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="${size}" height="${size}">${body}</svg>`;
}

/* ============ RENDER: STATS ============ */
function renderStats(){
  const el = document.getElementById('statsSection');
  el.innerHTML = STATS.map((s,i)=>`
    <div class="card hoverable stat-card reveal" style="transition-delay:${i*60}ms">
      <div class="stat-head">
        <div class="stat-icon">${svg(s.icon,18)}</div>
        <svg class="sparkline" viewBox="0 0 56 24" fill="none">
          <defs>
            <linearGradient id="sg${i}" x1="0" y1="0" x2="56" y2="0" gradientUnits="userSpaceOnUse">
              <stop stop-color="#14b8a6" stop-opacity="0.3"/>
              <stop offset="1" stop-color="#5eead4"/>
            </linearGradient>
          </defs>
          <path d="M1 18 L9 12 L17 15 L25 7 L33 11 L41 4 L49 9 L55 6"
                stroke="url(#sg${i})" stroke-width="1.6" stroke-linecap="round"
                stroke-dasharray="200" stroke-dashoffset="200"
                style="animation: drawLine 1.2s ${i*0.2}s ease forwards"/>
        </svg>
      </div>
      <p class="stat-label">${s.label}</p>
      <p class="stat-value">${s.value}${s.sub?`<small>${s.sub}</small>`:''}</p>
      <p class="stat-trend">${s.trend}</p>
    </div>
  `).join('');
  requestAnimationFrame(()=>observeReveals(el));
}

/* ============ RENDER: SKILLS ============ */
function renderSkills(){
  const el = document.getElementById('skillsGrid');
  el.innerHTML = SKILLS.map((g,gi)=>`
    <div class="card hoverable skill-card reveal" style="transition-delay:${gi*50}ms">
      <div class="skill-head">
        <div class="skill-head-left">
          <div class="skill-icon">${svg(g.icon,16)}</div>
          <h3 class="skill-title">${g.title}</h3>
        </div>
        <span class="skill-count">${String(g.skills.length).padStart(2,'0')}</span>
      </div>
      <div class="skill-list">
        ${g.skills.map((s,si)=>`
          <div class="skill-row">
            <div class="skill-row-top">
              <span class="skill-name">${s.name}</span>
              <span class="skill-pct">${s.level}%</span>
            </div>
            <div class="skill-track"><div class="skill-fill" data-level="${s.level}" style="transition-delay:${(gi*50)+(si*80)}ms"></div></div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
  requestAnimationFrame(()=>observeReveals(el));
}

/* ============ RENDER: PROJECTS ============ */
function projectPreview(id){
  const paths = {
    '01':'M0 60 C20 50 30 30 50 35 C70 40 80 15 100 20 C120 25 130 45 150 35 C170 25 185 40 200 30',
    '02':'M0 55 L25 55 L25 35 L50 35 L50 45 L75 45 L75 20 L100 20 L100 40 L125 40 L125 30 L150 30 L150 50 L200 50',
    '03':'M0 65 C25 65 30 40 50 45 C70 50 75 25 100 30 C125 35 130 55 150 45 C170 35 185 50 200 40',
  };
  return `
    <div class="project-preview">
      <div class="preview-inner">
        <div class="preview-dots"><span></span><span></span><span></span></div>
        <svg class="preview-svg" viewBox="0 0 200 80">
          <path d="${paths[id]}" stroke="#5eead4" stroke-width="1.6" fill="none" stroke-linecap="round"
                stroke-dasharray="400" stroke-dashoffset="400"
                style="animation: drawLine 1.6s ease forwards"/>
        </svg>
        <div class="preview-foot">
          <span class="preview-label">preview · ${id}</span>
          <div class="preview-bars">
            ${[40,65,30,80,50].map((h,i)=>`<span style="height:${h*0.3}px;animation:barIn .8s ${i*0.08}s ease forwards"></span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderProjects(){
  const el = document.getElementById('projectsGrid');
  el.innerHTML = PROJECTS.map((p,i)=>`
    <div class="card hoverable project-card ${p.featured?'featured':''} reveal" style="transition-delay:${i*70}ms">
      ${projectPreview(p.id)}
      <div class="project-body">
        <div class="project-tag-row">
          <span class="project-num">Project ${p.id}</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tech">
          ${p.tech.map(t=>`<span class="chip chip-sm">${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          <a href="${p.github}" class="btn btn-ghost btn-sm">${svg('github',14)} GitHub</a>
          <a href="${p.demo}" class="btn btn-primary btn-sm">${svg('external',14)} Live Demo</a>
        </div>
      </div>
    </div>
  `).join('');
  requestAnimationFrame(()=>observeReveals(el));
}

/* ============ RENDER: CONTRIBUTION GRID ============ */
function renderContribGrid(){
  const el = document.getElementById('contribGrid');
  const total = 26 * 7;
  const cells = [];
  for(let i=0;i<total;i++){
    const v = Math.random();
    const level = v>0.75?4:v>0.55?3:v>0.35?2:v>0.18?1:0;
    cells.push(`<span class="contrib-cell ${level?'l'+level:''}"></span>`);
  }
  el.innerHTML = cells.join('');
}

/* ============ RENDER: REPOS ============ */
function renderRepos(){
  const el = document.getElementById('reposGrid');
  el.innerHTML = REPOS.map((r,i)=>`
    <div class="card hoverable repo-card reveal" style="transition-delay:${120+i*50}ms">
      <div class="repo-head">
        ${svg('github',16)}
        <span class="repo-stars">${svg('star',11)}${r.stars}</span>
      </div>
      <p class="repo-name">${r.name}</p>
      <p class="repo-desc">${r.desc}</p>
      <div class="repo-lang">
        <span class="lang-dot lang-${r.lang}"></span>${r.lang}
      </div>
    </div>
  `).join('');
  requestAnimationFrame(()=>observeReveals(el));
}

/* ============ WAVEFORM ============ */
function renderWaveform(){
  const el = document.getElementById('waveform');
  const bars = 48;
  el.innerHTML = Array.from({length:bars},(_,i)=>{
    const h = 20 + Math.abs(Math.sin(i*0.7))*60 + (i%3)*8;
    return `<span style="height:${h*0.4}px;animation-delay:${i*0.03}s;animation-duration:${1+Math.random()*0.6}s"></span>`;
  }).join('');
}

/* ============ REVEAL ON SCROLL ============ */
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      // animate skill bars + svg paths inside
      e.target.querySelectorAll('.skill-fill').forEach(f=>{
        f.style.width = f.dataset.level + '%';
      });
      revealObserver.unobserve(e.target);
    }
  });
},{ threshold:0.08, rootMargin:'-40px' });

function observeReveals(root=document){
  root.querySelectorAll('.reveal:not(.visible)').forEach(el=>revealObserver.observe(el));
}

/* ============ SIDEBAR ACTIVE TRACKING ============ */
function trackActiveSection(){
  const ids = ['overview','about','skills','projects','experience','research','contact'];
  const sections = ids.map(id=>document.getElementById(id)).filter(Boolean);
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        document.querySelectorAll('.side-link').forEach(l=>{
          l.classList.toggle('active', l.dataset.target === e.target.id);
        });
      }
    });
  },{ rootMargin:'-40% 0px -55% 0px', threshold:0 });
  sections.forEach(s=>obs.observe(s));
}

/* ============ MOBILE MENU ============ */
function setupMobileMenu(){
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if(!toggle || !menu) return;
  toggle.addEventListener('click', ()=>menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>menu.classList.remove('open')));
}

/* ============ CONTACT FORM ============ */
function setupContactForm(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  const btn = document.getElementById('sendBtn');

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const original = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = svg('send',16) + ' Sending...';

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        btn.innerHTML = svg('check',16) + ' Message Sent';
        form.reset();
        setTimeout(()=>{ btn.innerHTML = original; btn.disabled = false; }, 3000);
      } else {
        throw new Error('Send failed');
      }
    } catch (err) {
      btn.innerHTML = '⚠ Failed — try again';
      setTimeout(()=>{ btn.innerHTML = original; btn.disabled = false; }, 3000);
    }
  });
}

/* ============ ANIMATION KEYFRAMES (injected) ============ */
const style = document.createElement('style');
style.textContent = `
  @keyframes drawLine { to { stroke-dashoffset: 0; } }
  @keyframes barIn { from { height:0; } }
`;
document.head.appendChild(style);

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', ()=>{
  renderStats();
  renderSkills();
  renderProjects();
  renderContribGrid();
  renderRepos();
  renderWaveform();
  setupMobileMenu();
  setupContactForm();
  trackActiveSection();

  // Reveal all static sections + injected ones
  setTimeout(()=>observeReveals(), 50);
  // Immediately mark hero visible
  const hero = document.getElementById('overview');
  if(hero) hero.classList.add('visible');
});