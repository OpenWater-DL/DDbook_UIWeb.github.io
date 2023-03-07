

// チェックイン 

createY();
function createY(){
    let tgt = document.querySelector('#y');
    let YArr = createNumListOption(1900,2023);
    createSelectList(YArr,tgt,'mySelect')
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
    createSelectList(DArr,tgt,'mySelect')
}

createW();
function createW(){
    let tgt = document.querySelector('#wd');
    const WArr = ['月','火','水','木','金','土','日']
    createSelectList(WArr,tgt,'mySelect')
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

    createSelectList(peopleArr,tgt,'mySelect')

}


const checkList = [
    "ミステリーバス",
    "ホワイトアウト",
    "アルキタイヒルズ",
    "創作ダイニングやぼぬ亭",
    "ゼンブリセット",
    "サッカク砂漠",
    "七変化温泉",
    "パレイドりアの森",
    "トキシラズ宫殿",
    "服ノ袖トンネル",
    "二次元銀座商店街",
    "顔なし族の村",
    "カイケイの壁",
    "カクテルバーDANBO",
  ];

  const tgtPos = document.querySelector('#goto');
for(let i=0;i<checkList.length;i++){

    createCheckbox(tgtPos,checkList[i],'');

}


function nextPage(){
    window.open('2.html','_self')
}

function prePage(){
    window.open('index.html','_self')
}
