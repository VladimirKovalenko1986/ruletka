const e={startBtn:document.querySelector(".js-start"),conteiner:document.querySelector(".js-conteiner")};e.startBtn.addEventListener("click",(function(){let t=0;[...e.conteiner.children].forEach((e=>e.textContent=""));const n=[...e.conteiner.children].map(((e,t)=>new Promise(((e,t)=>{Math.random()>.7?e("🦀"):t("🐸")}))));Promise.allSettled(n).then((n=>{n.forEach(((n,r)=>{setTimeout((()=>{"fulfilled"===n.status&&(t+=1),e.conteiner.children[r].textContent=n.value||n.reason,e.conteiner.children.length-1===r&&setTimeout((()=>{t!==e.conteiner.children.length&&t?alert("Lost money!!!!"):alert("Winner!!!")}),500)}),1e3*r)}))}))}));
//# sourceMappingURL=index.c201467c.js.map