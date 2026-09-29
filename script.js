const C=window.NC,$=(s,r=document)=>r.querySelector(s),msg=encodeURIComponent("Hallo N&C Living, ich interessiere mich für eure Deko und hätte eine Frage: ");
const wa=`https://wa.me/${C.whatsapp}?text=${msg}`;
document.querySelectorAll("[data-wa]").forEach(a=>a.href=wa);
document.querySelectorAll("[data-mail]").forEach(a=>a.href="mailto:"+C.email);
$("#shops").innerHTML=C.plattformen.filter(p=>p.url).map(p=>`<a class="shop rv" href="${p.url}" target="_blank" rel="noopener"><b>${p.name}</b>${p.text}</a>`).join("")||'<p class="lead">Die Shop-Links folgen in Kürze – schreibt uns gern direkt per WhatsApp.</p>';
const cats=["Alle",...new Set(C.produkte.map(p=>p.kategorie))];
$("#filter").innerHTML=cats.map((c,i)=>`<button class="${i?"":"act"}">${c}</button>`).join("");

// Hilfsfunktion: liefert die Bilder-Liste eines Produkts, egal ob "bilder" (mehrere) oder "bild" (eins, alte Schreibweise) benutzt wurde.
function imagesOf(p){return (p.bilder&&p.bilder.length)?p.bilder:(p.bild?[p.bild]:[]);}

let currentList=[];
function show(cat){
  currentList=C.produkte.filter(p=>cat=="Alle"||p.kategorie==cat);
  $("#grid").innerHTML=currentList.map((p,i)=>{
    const imgs=imagesOf(p),src=imgs[0]||"",multi=imgs.length>1;
    return `<button class="card" data-idx="${i}"><div class="im">${src?`<img loading="lazy" src="${src}" alt="${p.titel}">`:"Foto folgt"}${multi?`<span class="count">1&nbsp;/&nbsp;${imgs.length}</span>`:""}</div><div class="tx"><small>${p.kategorie}</small><h3>${p.titel}</h3><p>${p.text}</p>${p.link?`<a href="${p.link}" target="_blank" rel="noopener">Ansehen</a>`:""}</div></button>`
  }).join("")
}
show("Alle");
$("#filter").onclick=e=>{if(e.target.tagName!="BUTTON")return;document.querySelectorAll("#filter button").forEach(b=>b.classList.toggle("act",b==e.target));show(e.target.textContent)};

// Lightbox mit Vor/Zurück, wenn ein Produkt mehrere Bilder hat
const lb=$("#lb"),lbImg=$("img",lb),lbCount=$(".lb-count",lb);
let lbImages=[],lbIndex=0;
function renderLb(){lbImg.src=lbImages[lbIndex];const multi=lbImages.length>1;$(".lb-prev",lb).style.display=multi?"grid":"none";$(".lb-next",lb).style.display=multi?"grid":"none";lbCount.textContent=multi?`${lbIndex+1} / ${lbImages.length}`:""}
$("#grid").onclick=e=>{
  const c=e.target.closest(".card");if(!c||e.target.tagName=="A")return;
  const p=currentList[+c.dataset.idx];lbImages=imagesOf(p);if(!lbImages.length)return;
  lbIndex=0;renderLb();lb.classList.add("open")
};
lb.addEventListener("click",e=>{
  if(e.target.closest(".lb-prev")){lbIndex=(lbIndex-1+lbImages.length)%lbImages.length;renderLb();return}
  if(e.target.closest(".lb-next")){lbIndex=(lbIndex+1)%lbImages.length;renderLb();return}
  lb.classList.remove("open")
});
addEventListener("keydown",e=>{
  if(!lb.classList.contains("open"))return;
  if(e.key=="Escape")lb.classList.remove("open");
  if(e.key=="ArrowLeft"){lbIndex=(lbIndex-1+lbImages.length)%lbImages.length;renderLb()}
  if(e.key=="ArrowRight"){lbIndex=(lbIndex+1)%lbImages.length;renderLb()}
});

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
const watch=()=>document.querySelectorAll(".rv:not(.in),.step:not(.in)").forEach(el=>io.observe(el));watch();
const bar=$(".bar"),pr=$(".progress");
addEventListener("scroll",()=>{const y=scrollY,h=document.body.scrollHeight-innerHeight;pr.style.transform=`scaleX(${y/h})`;bar.classList.toggle("on",y>60)},{passive:true});
