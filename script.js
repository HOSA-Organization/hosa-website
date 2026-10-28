const lang=document.getElementById('lang');
function setLang(code){document.documentElement.lang=code;document.documentElement.dir=code==='en'?'ltr':'rtl';document.querySelectorAll('[data-en]').forEach(el=>{const value=el.dataset[code];if(value)el.textContent=value;});lang.value=code;try{localStorage.setItem('hosa-lang',code)}catch(e){}}
lang.addEventListener('change',e=>setLang(e.target.value));
try{const saved=localStorage.getItem('hosa-lang');if(saved&&['en','ps','fa'].includes(saved))setLang(saved)}catch(e){}
const btn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
btn.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;const subject=encodeURIComponent('HOSA website message from '+f.querySelector('#name').value);const body=encodeURIComponent('Name: '+f.querySelector('#name').value+'\nEmail: '+f.querySelector('#email').value+'\n\n'+f.querySelector('#message').value);alert('Before publishing, replace YOUR-OFFICIAL-EMAIL@example.org in script.js with HOSA’s real email address.');window.location.href='mailto:YOUR-OFFICIAL-EMAIL@example.org?subject='+subject+'&body='+body;});
