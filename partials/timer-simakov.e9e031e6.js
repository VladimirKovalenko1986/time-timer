const t={timeEl:document.getElementById("time"),stopBtnEL:document.getElementById("stopBtn"),startBtn:document.getElementById("continueBtn")};const e=new class{init(){this.timerId=setInterval((()=>this.countDownTimeToNY()),1e3)}countDownTimeToNY(){const e=Date.now(),s=this.newYearDate-e;n(this.getTimeComponets(s)),s<=0&&(stopInterval(),t.timeEl.textContent="Happy New Year!!!!")}stopInterval(){clearInterval(this.timerId),t.startBtn.disabled=!1,t.stopBtnEL.disabled=!0,console.log("Таймер зупинено!!!!")}continueInterval(){this.timerId=setInterval((()=>this.countDownTimeToNY()),1e3),t.startBtn.disabled=!0,t.stopBtnEL.disabled=!1}getTimeComponets(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t/36e5%24)),minutes:this.pad(Math.floor(t/6e4%60)),seconds:this.pad(Math.floor(t/1e3%60))}}pad(t){return String(t).padStart(2,"0")}constructor({onTick:t}){this.timerId=null,this.isActive=!1,this.newYearDate=new Date(`Jan 1, ${(new Date).getFullYear()+1}`),this.onTick=t,this.init()}}({onTick:n});function n({days:e,hours:n,minutes:s,seconds:i}){t.timeEl.textContent=`${e} d. ${n} h. ${s} m. ${i} s.`}t.stopBtnEL.addEventListener("click",e.stopInterval.bind(e)),t.startBtn.addEventListener("click",e.continueInterval.bind(e));
//# sourceMappingURL=timer-simakov.e9e031e6.js.map
