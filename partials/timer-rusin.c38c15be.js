const t={dayWeek:document.querySelector(".date-day"),dayMounth:document.querySelector(".date"),month:document.querySelector(".date-month"),year:document.querySelector(".date-year"),digitalClock:document.querySelector(".digital-clock"),arrowSeconds:document.querySelector(".clock-seconds__arrow"),arrowMinutes:document.querySelector(".clock-minutes__arrow"),arrowHours:document.querySelector(".clock-hours__arrow")},e=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],o=["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"];setInterval((()=>{const r=new Date,n=o[r.getDay()],a=r.getDate(),c=e[r.getMonth()],d=r.getFullYear(),u=r.getHours(),l=r.getMinutes(),s=r.getSeconds(),y=`\n  ${u.toString().padStart(2,"0")} : \n  ${l.toString().padStart(2,"0")} : \n  ${s.toString().padStart(2,"0")}`,S=6*s,g=6*l,m=30*u+.5*l;t.dayWeek.textContent=n,t.dayMounth.textContent=a,t.month.textContent=c,t.year.textContent=d,t.digitalClock.textContent=`Поточний час: ${y}`,t.arrowSeconds.style.transform=`rotate(${S}deg)`,t.arrowMinutes.style.transform=`rotate(${g}deg)`,t.arrowHours.style.transform=`rotate(${m}deg)`}),1e3);
//# sourceMappingURL=timer-rusin.c38c15be.js.map
