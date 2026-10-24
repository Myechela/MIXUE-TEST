/* ===================== ДАННЫЕ ===================== */
// [название, код, категория]
const ING = [
 ["Лимон","ЛИ"],["Апельсин","АП"],
 ["Патока","—"],["Фруктоза","G"],["Тростниковый сахар","Н"],["Тирамису (сироп)","MS"],["Мороженое","(xx)"],
 ["Клубника","КЛ"],["Мякоть винограда","МВ"],["Манго пюре","МП"],["Персик","ПЕ"],["Ананас","АН"],["Маракуйя","МРК"],["Манго кубики","МК"],["Черника","Ч"],
 ["Кокосовое желе","ЮК"],["Таро","Т"],["Тапиока","ТП"],["Орео","ОР"],["Пудинг из кокосового молока","ПКМ"],["Желе из зелёного чая","ЖЗЧ"],["Апельсин-грейпфрут","АГ"],["Бобо","ББ"],
 ["4 Сезона","4С"],["Жасминовый зелёный чай","ЗЧ"],["Кофе","КФ"],["Молочный чай","МЧ"],["Густое молоко","ГМ"],["Кокосовое молоко","КМ"],["Виноградный сок","ВС"],["Апельсиновый сок","АС"]
].map(x=>[x[0],x[1],"ing"]);

const OPT = [
 ["Большой пластиковый стакан","БПС"],["Средний пластиковый стакан","СРПС"],["Средний бумажный стакан","БС"],["U-образный стакан","UС"],
 ["Стандартная порция льда","СПЛ"],["Меньше льда","МЛ"],["Комнатная температура","КТ"],["Тёплый","ТП"],["Горячий","Г"],
 ["Стандартная порция сахара","СПС"],["70% сахара","0.7С"],["50% сахара","0.5С"],["30% сахара","0.3С"],["Без сахара","0С"],["Без дополнительного сахара","БДС"]
].map(x=>[x[0],x[1],"opt"]);

const DRINKS = [
 ["Апельсиновый американо","/АП40/20/АС75,КФ60/"],
 ["Кокосовое латте","20/КМ120,ГМ70,КФ80/"],
 ["Латте","30/ГМ100,КФ140/"],
 ["Кофе с мороженым","20/ГМ50,КФ120/(90)/"],
 ["Жасминовый латте","40/ЗЧ140,ГМ65,КФ80/"],
 ["Виноградный Айс Американо","15,G20/ВС70,КФ80/"],
 ["Американо","/КФ120/"],
 ["Улун Чай «4 сезона»","50/4С180/"],
 ["Жасминовый зелёный чай","60/ЗЧ220/"],
 ["Улун Чай «4 сезона» (без сахара)","/4С160/"],
 ["Жасминовый зелёный чай (без сахара)","/ЗЧ200/"],
 ["Милкшейк с какао печеньем","(120)/10/ОР2/ГМ80/"],
 ["Супер Сандей с Орео и дыней","(180)/ОР2/"],
 ["Сандей с какао печеньем","(180)/ОР2/"],
 ["Супер Сандей Тирамису","(180)/MS20/ОР10/"],
 ["Большой Сандей с тапиокой и тростниковым сахаром","Н20/(180)/ТП2/"],
 ["Супер Сандей с клубникой","(180)/КЛ1.4/"],
 ["Супер Сандей с манго","(180)/МП1,МК1/"],
 ["Милкшейк с дыней","(140)/15/КЖ2/4С0.8/"],
 ["Клубничный молочный коктейль","(120)/10,G10/КЛ2/ГМ0.8/"],
 ["Чай «4 сезона» с мороженым","30/4С160/(90)/"],
 ["Жасминовый зелёный чай с мороженым","30/ЗЧ160/(90)/"],
 ["Мороженое с дыней","(110)"],
 ["MIXUE мороженое","(110)"],
 ["Зелёный чай с апельсином","/АП40/25,G30/АС55,ЗЧ100/"],
 ["Фруктовый чай с клубникой и апельсином","/АП40/30/КЛ2,АС3/ЗЧ100/"],
 ["Чай с кусочками малины","25/ЖЗЧ3,КЛ0.5/ЗЧ60"],
 ["Зелёный чай с манго и персиком","30/КЖ1,МК1,ПЕ0.5,МП3/ЗЧ40/"],
 ["Ананас с маракуйей","65/КЖ1,АН3,МРК1.5/ЗЧ100/"],
 ["Зелёный чай с маракуйей (вар. 1)","35,G15/КЖ2,ПЕ2,МРК3/ЗЧ80/"],
 ["Зелёный чай с маракуйей (вар. 2)","35,G10/КЖ1,ТП1,МРК2/"],
 ["Таро с виноградом","40/МВ1,Т1.5/ВС90/"],
 ["Чай «4 сезона» с персиком","40/ЖЗЧ2,ПЕ3/4С80/"],
 ["Чай с черникой","20,G20/Ч2.5/ЗЧ40/"],
 ["Освежающий лимонад","/ЛИ40/G65/"],
 ["Улун чай ананас Pro Max","30,G60/АН3/КЖ3/4С80/"],
 ["Зелёный чай с лимоном Pro Max","/ЛИ40/45,G85/ЗЧ240/"],
 ["Чёрный чай с лимоном Pro Max","/ЛИ40/40,G85/ЧЧ240/"],
 ["Смузи с манго и персиком","5/Т1,ПЕ2.5,МК2/ГМ50,КМ60/"],
 ["Кокосовое молоко с клубникой","30/КЖ1,КЛ2/ГМ50,КМ60/"],
 ["Кокосовое молоко с какао печеньем","20/ОР2,ТП2/ГМ60,КМ80/"],
 ["Молочный коктейль с манго","10/Т1,КЖ1,МП1.5,МК2/ГМ40,КМ60/"],
 ["Малиновый молочный напиток","20/ЖЗЧ2,ЯБП2/ГМ90/"],
 ["Молочный чай с таро (средний)","30/Т2/МЧ200/"],
 ["Жасминовый зелёный чай с молоком","40/ГМ100,ЗЧ200/"],
 ["Молочный чай с тапиокой (средний)","30/ТП2/МЧ200/"],
 ["Молочный чай с тапиокой (большой)","40/ТП4/МЧ240/"],
 ["Молочный чай с кокосовым желе (средний)","30/КЖ2/МЧ200/"],
 ["Молочный чай с кокосовым желе (большой)","40/КЖ6/МЧ240/"],
 ["Молочный чай с 2-мя вкусами (средний)","30/КЖ2,ПКМ2/МЧ200/"],
 ["Молочный чай с 2-мя вкусами (большой)","40/КЖ3,ПКМ3/МЧ240/"],
 ["Молочный чай с 3-мя вкусами","30/ТП2,КЖ2,ПКМ2/МЧ240/"],
 ["Молочный чай с кокосовым пудингом","30/ПКМ2/МЧ200/"],
 ["Молочный чай с тапиокой и тростниковым сахаром","Н40/ТП2/МЧ200/"],
 ["Молочный чай с какао печеньем","40/ОР3/МЧ220/"]
].map(x=>[x[0],x[1],"drink"]);

const ALL = [...ING,...OPT,...DRINKS];

/* ===================== ИКОНКИ (SVG) ===================== */
const ic = p => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const ICON = {
  cards: ic('<rect x="3" y="7" width="13" height="13" rx="2.5"/><path d="M8 4h10a3 3 0 0 1 3 3v10"/>'),
  quiz: ic('<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>'),
  write: ic('<path d="M4 20l1-4L16 5a2.1 2.1 0 0 1 3 3L8 19z"/><path d="M14 7l3 3"/>'),
  shuffle: ic('<path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/>'),
  reset: ic('<path d="M1 4v6h6"/><path d="M3.5 15a9 9 0 1 0 2.1-9.4L1 10"/>'),
  check: ic('<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>'),
  x: ic('<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>'),
  star: ic('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'),
  up: ic('<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>'),
  left: ic('<path d="M15 5l-7 7 7 7"/>'),
  right: ic('<path d="M9 5l7 7-7 7"/>')
};

/* ===================== УТИЛИТЫ ===================== */
const HOMO = {A:"А",B:"В",C:"С",E:"Е",H:"Н",K:"К",M:"М",O:"О",P:"Р",T:"Т",X:"Х",Y:"У"};
const norm = s => s.toUpperCase().replace(/Ё/g,"Е").replace(/[A-Z]/g,c=>HOMO[c]||c).replace(/[\s\/,()\-—]/g,"");
const keyOf = c => c[2]+"|"+c[0]+"|"+c[1];
const esc = s => s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));

// словарь для расшифровки кодов напитков
const DICT = {};
ING.forEach(([n,c])=>{ if(c!=="—" && c!=="(xx)") DICT[norm(c)] = n; });
DICT[norm("4С")] = "4 Сезона";
function breakdown(code){
  const out=[];
  code.split(/[\/,()\s]+/).forEach(t=>{
    const m = t.toUpperCase().replace(/[A-Z]/g,c=>HOMO[c]||c).match(/^(4С|[А-ЯA-Z]+)([\d.]*)$/);
    if(!m) return;
    const k = norm(m[1]);
    if(DICT[k]) out.push([t,DICT[k]+(m[2]?" — "+m[2]:"")]);
  });
  return out;
}

/* ===================== СОСТОЯНИЕ ===================== */
const store = {
  get(){ try{ return JSON.parse(localStorage.getItem("mixue_known")||"{}"); }catch(e){ return {}; } },
  set(v){ try{ localStorage.setItem("mixue_known",JSON.stringify(v)); }catch(e){} }
};
let known = store.get();
let S = { mode:"cards", deck:"all", rev:false, onlyNew:false, list:[], i:0, flipped:false, quiz:null, write:null };

const DECKS = [["all","Все"],["ing","Ингредиенты"],["opt","Стаканы · лёд · сахар"],["drink","Напитки"]];

function buildList(){
  let l = ALL.filter(c=> S.deck==="all" || c[2]===S.deck);
  if(S.onlyNew) l = l.filter(c=>!known[keyOf(c)]);
  S.list = l; S.i = 0; S.flipped=false; S.quiz=null; S.write=null;
}
function shuffleArr(a){ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
const front = c => S.rev ? c[1] : c[0];
const backT = c => S.rev ? c[0] : c[1];
const isCodeSide = (isFront)=> S.rev ? isFront : !isFront;

function updateStats(){
  const pool = ALL.filter(c=> S.deck==="all" || c[2]===S.deck);
  const k = pool.filter(c=>known[keyOf(c)]).length;
  document.getElementById("known").textContent = `Выучено: ${k} / ${pool.length}`;
  document.getElementById("pbar").style.width = (pool.length? k/pool.length*100:0)+"%";
  document.getElementById("pos").textContent = S.mode==="cards" && S.list.length ? `Карточка ${S.i+1} из ${S.list.length}` : "";
}

/* ===================== РЕНДЕР ===================== */
const view = document.getElementById("view");

function render(){
  updateStats();
  if(!S.list.length){ view.innerHTML = `<div class="qbox result"><div class="big">${ICON.star}</div>Нет карточек для этого набора. Отключи «Только невыученные» или сбрось прогресс.</div>`; return; }
  if(S.mode==="cards") renderCards();
  else if(S.mode==="quiz") renderQuiz();
  else renderWrite();
}

function faceHTML(c,isFront){
  const txt = isFront ? front(c) : backT(c);
  const code = isCodeSide(isFront);
  let extra="";
  if(!isFront && c[2]==="drink"){
    const b = breakdown(c[1]);
    if(b.length) extra = `<div class="break">${b.map(x=>`<div><b>${esc(x[0])}</b> = ${esc(x[1])}</div>`).join("")}</div>`;
  }
  const cat = {ing:"Ингредиент",opt:"Характеристика",drink:"Напиток"}[c[2]];
  return `<div class="tag">${cat} · ${isFront?(S.rev?"Код":"Название"):(S.rev?"Название":"Код")}</div>
    <div class="big ${code?"code":""}">${esc(txt)}</div>${isFront?"":extra}<div class="hint">${isFront?"нажми, чтобы перевернуть":""}</div>`;
}

function renderCards(){
  const c = S.list[S.i];
  const kn = known[keyOf(c)];
  view.innerHTML = `
    <div class="scene" id="scene"><div class="card ${S.flipped?"flip":""}" id="card">
      <div class="face">${faceHTML(c,true)}</div>
      <div class="face back">${faceHTML(c,false)}</div>
    </div></div>
    <div class="ctrl">
      <button class="btn" id="prev" aria-label="Назад">${ICON.left}</button>
      <button class="btn bad" id="learn">Учу (1)</button>
      <button class="btn ok" id="know">Знаю (2)</button>
      <button class="btn" id="next" aria-label="Вперёд">${ICON.right}</button>
    </div>
    <div class="stat" style="justify-content:center">${kn?ICON.check+"отмечена как выученная":""}</div>`;
  document.getElementById("scene").onclick = ()=>{ S.flipped=!S.flipped; document.getElementById("card").classList.toggle("flip",S.flipped); };
  document.getElementById("prev").onclick = ()=>go(-1);
  document.getElementById("next").onclick = ()=>go(1);
  document.getElementById("learn").onclick = ()=>mark(false);
  document.getElementById("know").onclick = ()=>mark(true);
}
function go(d){ S.i=(S.i+d+S.list.length)%S.list.length; S.flipped=false; render(); }
function mark(v){
  const c=S.list[S.i];
  if(v){ burst(document.getElementById("know")); vib(20); } else vib(10);
  if(v) known[keyOf(c)]=1; else delete known[keyOf(c)];
  store.set(known);
  if(S.onlyNew && v){ S.list.splice(S.i,1); if(S.i>=S.list.length) S.i=0; S.flipped=false; render(); return; }
  go(1);
}

/* ---- тест ---- */
function newQuiz(){
  const order = shuffleArr([...S.list]);
  S.quiz = {order, i:0, score:0, answered:false};
}
function renderQuiz(){
  if(!S.quiz) newQuiz();
  const Q=S.quiz;
  if(Q.i>=Q.order.length){
    view.innerHTML = `<div class="qbox result"><div class="big">${Q.score} / ${Q.order.length}</div><p>${Q.score===Q.order.length?ICON.star+"Идеально!":ICON.up+"Продолжай тренироваться"}</p><button class="btn primary" id="again">Ещё раз</button></div>`;
    document.getElementById("again").onclick=()=>{S.quiz=null;render();};
    return;
  }
  const c=Q.order[Q.i];
  const pool = ALL.filter(x=>x[2]===c[2] && x!==c);
  let wrong = shuffleArr(pool.filter(x=>norm(backT(x))!==norm(backT(c)))).slice(0,3);
  const opts = shuffleArr([c,...wrong]);
  const codeQ = isCodeSide(true), codeA = isCodeSide(false);
  view.innerHTML = `<div class="qbox">
    <div class="tag" style="position:static">Вопрос ${Q.i+1} из ${Q.order.length} · верно: ${Q.score}</div>
    <div class="q ${codeQ?"code":""}">${esc(front(c))}</div>
    <div class="opts">${opts.map((o,k)=>`<button class="opt ${codeA?"code":""}" data-k="${k}">${esc(backT(o))}</button>`).join("")}</div>
    <div class="fb" id="fb"></div>
    <div class="row" style="margin-top:10px"><button class="btn primary" id="nq" style="display:none">Дальше ${ICON.right}</button></div>
  </div>`;
  Q.answered=false;
  view.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
    if(Q.answered) return; Q.answered=true;
    const o=opts[+b.dataset.k], ok = o===c;
    b.classList.add(ok?"right":"wrong");
    feedback(b, ok, view.querySelector(".qbox"));
    if(!ok) view.querySelectorAll(".opt").forEach((bb,k)=>{ if(opts[k]===c) bb.classList.add("right"); });
    if(ok){ Q.score++; known[keyOf(c)]=1; store.set(known); }
    document.getElementById("fb").innerHTML = ok?ICON.check+"Верно!":ICON.x+"Правильный ответ: "+esc(backT(c));
    document.getElementById("fb").className = "fb "+(ok?"ok":"bad");
    const nq=document.getElementById("nq"); nq.style.display=""; nq.focus();
    nq.onclick=()=>{Q.i++;render();};
    updateStats();
  });
}

/* ---- письмо ---- */
function newWrite(){ S.write={order:shuffleArr([...S.list]),i:0,score:0}; }
function renderWrite(){
  if(!S.write) newWrite();
  const W=S.write;
  if(W.i>=W.order.length){
    view.innerHTML = `<div class="qbox result"><div class="big">${W.score} / ${W.order.length}</div><p>Результат режима «Письмо»</p><button class="btn primary" id="again">Ещё раз</button></div>`;
    document.getElementById("again").onclick=()=>{S.write=null;render();};
    return;
  }
  const c=W.order[W.i];
  const codeQ=isCodeSide(true), codeA=isCodeSide(false);
  view.innerHTML = `<div class="qbox">
    <div class="tag" style="position:static">Вопрос ${W.i+1} из ${W.order.length} · верно: ${W.score}</div>
    <div class="q ${codeQ?"code":""}">${esc(front(c))}</div>
    <input class="ans" id="ans" autocomplete="off" autocapitalize="off" placeholder="${codeA?"Введи код (регистр, / и , не важны)":"Введи название"}">
    <div class="fb" id="fb"></div>
    <div class="row" style="margin-top:10px">
      <button class="btn primary" id="chk">Проверить</button>
      <button class="btn" id="skip">Не знаю</button>
    </div></div>`;
  const inp=document.getElementById("ans"); inp.focus();
  let done=false;
  const finish=(ok)=>{
    if(done){ W.i++; render(); return; }
    done=true;
    if(ok){ W.score++; known[keyOf(c)]=1; store.set(known); }
    const fb=document.getElementById("fb");
    fb.className="fb "+(ok?"ok":"bad");
    fb.innerHTML = ok?ICON.check+"Верно!":ICON.x+"Правильный ответ: "+esc(backT(c));
    feedback(document.getElementById("ans"), ok, view.querySelector(".qbox"));
    document.getElementById("chk").innerHTML="Дальше "+ICON.right;
    document.getElementById("skip").style.display="none";
    updateStats();
  };
  const check=()=>{
    if(done){ finish(); return; }
    const a=norm(inp.value), b=norm(backT(c));
    finish(a.length>0 && a===b);
  };
  document.getElementById("chk").onclick=check;
  document.getElementById("skip").onclick=()=>finish(false);
  inp.onkeydown=e=>{ if(e.key==="Enter") check(); };
}

/* ===================== ЭФФЕКТЫ ===================== */
function vib(p){ try{ if(navigator.vibrate) navigator.vibrate(p); }catch(e){} }
function burst(el){
  if(!el) return;
  const r=el.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
  const cols=["#c2a878","#773344","#eee3cf"];
  for(let i=0;i<16;i++){
    const p=document.createElement("i"); p.className="spark";
    const a=Math.random()*Math.PI*2, d=40+Math.random()*70;
    p.style.cssText=`left:${cx}px;top:${cy}px;background:${cols[i%3]};--dx:${Math.cos(a)*d}px;--dy:${Math.sin(a)*d-20}px`;
    document.body.appendChild(p); setTimeout(()=>p.remove(),750);
  }
}
function feedback(el,ok,box){
  const cls = ok?"fx-ok":"fx-bad";
  [el,box].forEach(x=>{ if(!x) return; x.classList.remove("fx-ok","fx-bad"); void x.offsetWidth; x.classList.add(cls); });
  if(ok){ burst(el); vib(30); } else vib([40,60,40]);
}
document.addEventListener("pointerdown",e=>{
  const b=e.target.closest(".btn,.chip,.tabs button,.opt"); if(!b) return;
  const r=b.getBoundingClientRect(), s=Math.max(r.width,r.height)*1.2;
  const sp=document.createElement("span"); sp.className="ripple";
  sp.style.cssText=`width:${s}px;height:${s}px;left:${e.clientX-r.left-s/2}px;top:${e.clientY-r.top-s/2}px`;
  b.appendChild(sp); setTimeout(()=>sp.remove(),650);
});

/* ===================== УПРАВЛЕНИЕ ===================== */
function drawDecks(){
  const el=document.getElementById("decks");
  el.innerHTML = DECKS.map(([k,n])=>`<button class="chip ${S.deck===k?"on":""}" data-k="${k}">${n}</button>`).join("");
  el.querySelectorAll("button").forEach(b=>b.onclick=()=>{S.deck=b.dataset.k;buildList();drawDecks();render();});
}
document.querySelectorAll("#modes button").forEach(b=>b.onclick=()=>{
  S.mode=b.dataset.m;
  document.querySelectorAll("#modes button").forEach(x=>x.classList.toggle("on",x===b));
  S.quiz=null;S.write=null;S.flipped=false;render();
});
document.getElementById("dir").onclick=e=>{
  S.rev=!S.rev; e.target.textContent="Направление: "+(S.rev?"Код → Название":"Название → Код");
  S.quiz=null;S.write=null;S.flipped=false;render();
};
document.getElementById("onlyNew").onclick=e=>{
  S.onlyNew=!S.onlyNew; e.target.textContent="Только невыученные: "+(S.onlyNew?"вкл":"выкл");
  e.target.classList.toggle("on",S.onlyNew); buildList(); render();
};
document.getElementById("shuffle").onclick=()=>{ shuffleArr(S.list); S.i=0; S.flipped=false; S.quiz=null; S.write=null; render(); };
document.getElementById("reset").onclick=()=>{
  if(confirm("Сбросить весь прогресс?")){ known={}; store.set(known); buildList(); render(); }
};
document.addEventListener("keydown",e=>{
  if(S.mode!=="cards"||!S.list.length||e.target.tagName==="INPUT") return;
  if(e.code==="Space"){ e.preventDefault(); document.getElementById("scene").click(); }
  else if(e.key==="ArrowRight") go(1);
  else if(e.key==="ArrowLeft") go(-1);
  else if(e.key==="1") mark(false);
  else if(e.key==="2") mark(true);
});

document.querySelectorAll("[data-ic]").forEach(el=>el.insertAdjacentHTML("afterbegin",ICON[el.dataset.ic]));
buildList(); drawDecks(); render();
