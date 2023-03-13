

// チェックイン 

createY();
function createY(){
    let tgt = document.querySelector('#y');
    let YArr = createNumListOption(1900,2023);
    createSelectList(YArr,tgt,'y-select')
}

createM();
function createM(){
    let tgt = document.querySelector('#m');
    let MArr = createNumListOption(1,12);
    createSelectList(MArr,tgt,'m-select')
}

createD();
function createD(){
    let tgt = document.querySelector('#d');
    let DArr = createNumListOption(1,31);
    createSelectList(DArr,tgt,'d-select')
}

createW();
function createW(){
    let tgt = document.querySelector('#wd');
    const WArr = ['月','火','水','木','金','土','日']
    createSelectList(WArr,tgt,'wd-select')
}

function createNumListOption(from,to){
    let arr = [];
    for(let i = from;i<=to;i++){
    arr.push(i);
    }
    return arr;
}

//チェックアウト

changeCheckoutNum()
function changeCheckoutNum(){
    const slider = document.querySelector('#o-p-checkout__slider');
    const select = document.querySelector('#m-select');
    slider.addEventListener("input", setDate);
    select.addEventListener('input',setDate);

    function setDate(){
        let d = slider.value;
        let m = select.value;
        let newText = `${m}月${d}日`;
        document.querySelector('#o-p-checkout-slider__text').innerText = newText;
        console.log("🚀 ~ file: page1.js:47 ~ changeCheckoutNum ~ slider:", slider)

    }

}


//予約人数

createPeopleSel()
function createPeopleSel(){
    let tgt = document.querySelector('#people');
  const peopleArr=["大人1人　子供1人",
   "大人2人　子供3人",
   "大人2人　子供1人",
   "大人0人　子供2人",
   "大人2人　子供0人",
   "大人1人　子供2人",
   "大人2人　子供2人",
   "大人1人　子供0人",
   "大人1人　子供3人",
   "大人0人　子供1人",
   "大人0人　子供3人",
   "大人3人　子供1人"]

    createSelectList(peopleArr,tgt,'people-select')

}


const checkList = [
    "ミステリーバス",
    "ホワイトアウト渓谷",
    "アルキタイヒルズ",
    "アレソーレ飯店",
    "ゼンブリセット",
    "サッカク砂漠",
    "七変化温泉",
    "パレイドリアの森",
    "トキシラズ宫殿",
    "服ノ袖トンネル",
    "二次元銀座商店街",
    "顔無し族の村",
    "カイケイの壁",
    "カクテルバーDANBO",
    "創作劇場タイタニック"
  ];

  const tgtPos = document.querySelector('#o-p-goto');
for(let i=0;i<checkList.length;i++){

    createCheckbox(tgtPos,checkList[i],'');

}


function nextPage(){

    let checkedNum  = document.querySelectorAll('input:checked').length;
if(checkedNum == 3) {

    window.open('2.html','_self')
}else{
    const info = document.querySelector('#select-only3')
    info.classList.remove('u-hidden');
} 

}

function prePage(){
    window.open('index.html','_self')
}


function reset(){


const gotoDiv = document.querySelector('#o-p-goto')


for(item of gotoDiv.children ){
   item.querySelector('input').checked = false;

}

const peopleSel = document.querySelector('#people-select')
peopleSel.value='大人1人　子供1人'

const checkOutSlider = document.querySelector('#o-p-checkout__slider')
checkOutSlider.value=1;

document.querySelector('#o-p-checkout-slider__text').innerText = '1月1日';


let y = document.querySelector('#y-select');
let m = document.querySelector('#m-select');
let d = document.querySelector('#d-select');
let wd = document.querySelector('#wd-select');

y.value = '1900'
m.value = '1'
d.value = '1'
wd.value = '月'

}