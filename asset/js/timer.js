
//html

const dailogEl = document.createElement('div') ;
dailogEl.id = 'o-p-countdown-dailog';
dailogEl.classList.add('u-hidden');
const contentsHtml = `
<div  id="o-p-countdown-dailog__text">
<div  id="o-p-countdown-dailog__text--ing" >時間内に入力を完了してください</div>
<div  id="o-p-countdown-dailog__text--over" class="u-hidden">時間切れです</div>            

</div>

<div  id="o-p-countdown-dailog__time" class="countdown-timer">00:30:00</div>
<div  id="o-p-countdown-dailog__close">
<img src="asset/img/full-screen.png" alt="" srcset="">
</div>

<button  id="o-p-countdown-dailog__reset" onclick="resetTimer()"  class="u-hidden">入力を再開する</button>
`

dailogEl.innerHTML = contentsHtml;
document.body.appendChild(dailogEl);



//Countdown

let showCountdownDailog = false;
function Countdown(elem, seconds,dailogAppearTime) {
    var that = {};
  
    that.elem = elem;
    that.seconds = seconds;
    that.totalTime = seconds * 100;
    that.usedTime = 0;
    that.startTime = +new Date();
    that.timer = null;
  
    that.count = function() {
      that.usedTime = Math.floor((+new Date() - that.startTime) / 10);
  
      var tt = that.totalTime - that.usedTime;
      if (tt <= 0) { // if over 
        document.querySelector('#o-p-countdown-dailog__text--over').classList.remove('u-hidden');
        document.querySelector('#o-p-countdown-dailog__reset').classList.remove('u-hidden');
        document.querySelector('#o-p-countdown-dailog__text--ing').classList.add('u-hidden');

        that.elem.innerHTML = '00:00.00';
        clearInterval(that.timer);
      } else {
        var mi = Math.floor(tt / (60 * 100));
        var ss = Math.floor((tt - mi * 60 * 100) / 100);
        var ms = tt - Math.floor(tt / 100) * 100;
  
        that.elem.innerHTML = that.fillZero(mi) + ":" + that.fillZero(ss) + "." + that.fillZero(ms);
        if(tt <= dailogAppearTime*100 ){// 到达黄色弹窗出现的时间点后
            document.querySelector('#o-p-countdown-dailog').classList.remove('u-hidden');
        }

      }
    };
    
    that.init = function() {
        document.querySelector('#o-p-countdown-dailog__reset').classList.add('u-hidden');
        document.querySelector('#o-p-countdown-dailog__text--ing').classList.remove('u-hidden');
        document.querySelector('#o-p-countdown-dailog__text--over').classList.add('u-hidden');

      if(that.timer){
        clearInterval(that.timer);
        that.elem.innerHTML = '00:00.00';
        that.totalTime = seconds * 100;
        that.usedTime = 0;
        that.startTime = +new Date();
        that.timer = null;
      }
    };
  
    that.start = function() {
      if(!that.timer){
         that.timer = setInterval(that.count, 1);
      }
    };
  
    that.stop = function() {
      console.log('usedTime = ' + countdown.usedTime);
      if (that.timer) clearInterval(that.timer);
    };
  
    that.fillZero = function(num) {      
      return num < 10 ? '0' + num : num;
    };
  
    return that;
  }
  
  // 初次的时间规则
  let timerOffsetTime =  40;
  let dailogShowTime = 30; // timer count to this time,appear dailog
  var timer_in_mian = document.getElementById('time');
  var timer_in_dailog = document.getElementById('o-p-countdown-dailog__time');
  var countdown1 = new Countdown(timer_in_mian, timerOffsetTime,dailogShowTime);
  var countdown2 = new Countdown(timer_in_dailog, timerOffsetTime,dailogShowTime);

  countdown1.start()
  countdown2.start()
  

  function resetTimer(){
      // 按按钮之后的时间规则
    const dailog = document.querySelector('#o-p-countdown-dailog');
    dailog.classList.add('u-hidden'); 
      dailogShowTime = 15;
    countdown1 = new Countdown(timer_in_mian, 30,dailogShowTime);
    countdown2 = new Countdown(timer_in_dailog, 30,dailogShowTime); 
    countdown1.init();
    countdown1.start();
    countdown2.init();
    countdown2.start();
    
}
  
//   $('#start').on('click', function(){
//     countdown.start();
//   });
  
//   $('#stop').on('click', function(){
//     countdown.stop();
//   });
  
//   $('#reset').on('click', function(){
//     countdown.init();
//   });



//timer close btn

const closeBtn = document.querySelector("#o-p-countdown-dailog__close");
closeBtn.addEventListener('click',()=>{
    const dailog = document.querySelector('#o-p-countdown-dailog');
    dailog.classList.toggle('full-screen');

})
