!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var n={};function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,e,n){e&&o(t.prototype,e);n&&o(t,n);return t};var i={timeEl:document.getElementById("time"),stopBtnEL:document.getElementById("stopBtn"),startBtn:document.getElementById("continueBtn")},a=new(function(){"use strict";function o(n){var i=n.onTick;t(e)(this,o),this.timerId=null,this.isActive=!1,this.newYearDate=new Date("Jan 1, ".concat((new Date).getFullYear()+1)),this.onTick=i,this.init()}return t(n)(o,[{key:"init",value:function(){var t=this;this.timerId=setInterval((function(){return t.countDownTimeToNY()}),1e3)}},{key:"countDownTimeToNY",value:function(){var t=Date.now(),e=this.newYearDate-t,n=this.getTimeComponets(e);this.onTick(n),e<=0&&(stopInterval(),i.timeEl.textContent="Happy New Year!!!!")}},{key:"stopInterval",value:function(){clearInterval(this.timerId),i.startBtn.disabled=!1,i.stopBtnEL.disabled=!0,console.log("Таймер зупинено!!!!")}},{key:"continueInterval",value:function(){var t=this;this.timerId=setInterval((function(){return t.countDownTimeToNY()}),1e3),i.startBtn.disabled=!0,i.stopBtnEL.disabled=!1}},{key:"getTimeComponets",value:function(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t/36e5%24)),minutes:this.pad(Math.floor(t/6e4%60)),seconds:this.pad(Math.floor(t/1e3%60))}}},{key:"pad",value:function(t){return String(t).padStart(2,"0")}}]),o}())({onTick:function(t){var e=t.days,n=t.hours,o=t.minutes,a=t.seconds;i.timeEl.textContent="".concat(e," d. ").concat(n," h. ").concat(o," m. ").concat(a," s.")}});i.stopBtnEL.addEventListener("click",a.stopInterval.bind(a)),i.startBtn.addEventListener("click",a.continueInterval.bind(a))}();
//# sourceMappingURL=timer-simakov.db440dd5.js.map
