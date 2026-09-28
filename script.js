const C=window.NC,$=(s,r=document)=>r.querySelector(s),msg=encodeURIComponent("Hallo N&C Living, ich interessiere mich für eure Deko und hätte eine Frage: ");
const wa=`https://wa.me/${C.whatsapp}?text=${msg}`;
document.querySelectorAll("[data-wa]").forEach(a=>a.href=wa);
document.querySelectorAll("[data-mail]").forEach(a=>a.href="mailto:"+C.email);
$("#shops").innerHTML=C.plattformen.filter(p=>p.url).map(p=>`<a class="shop rv" href="${p.url}" target="_blank" rel="noopener"><b>${p.name}</b>${p.text}</a>`).join("")||'<p class="lead">Die Shop-Links folgen in Kürze – schreibt uns gern direkt per WhatsApp.</p>';
const cats=["Alle",...new Set(C.produkte.map(p=>p.kategorie))];
$("#filter").innerHTML=cats.map((c,i)=>`<button class="${i?"":"act"}">${c}</button>`).join("");
function show(cat){$("#grid").innerHTML=C.produkte.filter(p=>cat=="Alle"||p.kategorie==cat).map(p=>{const src=p.bild||"";return`<button class="card" data-src="${src}"><div class="im">${src?`<img loading="lazy" src="${src}" alt="${p.titel}">`:"Foto folgt"}</div><div class="tx"><small>${p.kategorie}</small><h3>${p.titel}</h3><p>${p.text}</p>${p.link?`<a href="${p.link}" target="_blank" rel="noopener">Ansehen</a>`:""}</div></button>`}).join("")}
show("Alle");
$("#filter").onclick=e=>{if(e.target.tagName!="BUTTON")return;document.querySelectorAll("#filter button").forEach(b=>b.classList.toggle("act",b==e.target));show(e.target.textContent)};
const lb=$("#lb");$("#grid").onclick=e=>{const c=e.target.closest(".card");if(!c||e.target.tagName=="A"||!c.dataset.src)return;$("img",lb).src=c.dataset.src;lb.classList.add("open")};
lb.onclick=()=>lb.classList.remove("open");addEventListener("keydown",e=>e.key=="Escape"&&lb.classList.remove("open"));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
const watch=()=>document.querySelectorAll(".rv:not(.in)").forEach(el=>io.observe(el));watch();
const bar=$(".bar"),pr=$(".progress"),ph=$(".photo img");
addEventListener("scroll",()=>{const y=scrollY,h=document.body.scrollHeight-innerHeight;pr.style.transform=`scaleX(${y/h})`;bar.classList.toggle("on",y>60);
},{passive:true});
