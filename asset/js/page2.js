createGender();
function createGender() {
  let tgt = document.querySelector("#o-p-gender");
  const WArr = ["♀", "👨", "その他"];
  createSelectList(WArr, tgt, "mySelect");
}

page2_phoneNumInput();
function page2_phoneNumInput() {
  let phoneNumInput_html = ``;

  for (let i = 0; i < 11; i++) {
    phoneNumInput_html += ` <input class="o-c-input-text" id="o-p-phone-num__cell" type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />`;
  }

  let newDiv = document.createElement("div");
  newDiv.id = "phone-num";

  newDiv.innerHTML = phoneNumInput_html;
  document.querySelector("#o-p-phone-num").appendChild(newDiv);
}

const domains = ["wifi", "gmail", "jappan", "amazon", "office", "playground"];
let mail_btn1_contentID = 0;
function changeDomain() {
  mail_btn1_contentID = click_changeContents(
    "o-p-mail__btn1",
    domains,
    mail_btn1_contentID
  );
}

const extensions = [".jpg", ".png", ".com", ".rpg", ".mp3", ".org", ".exe"];
let mail_btn2_contentID = 0;
function changeExtensionName() {
  mail_btn2_contentID = click_changeContents(
    "o-p-mail__btn2",
    extensions,
    mail_btn2_contentID
  );
}

function click_changeContents(elementId, contentsArr, useCount) {
  let extensionName = contentsArr[useCount];
  document.getElementById(elementId).innerText = extensionName;
  useCount += 1;
  if (useCount == contentsArr.length) {
    return (useCount = 0);
  } else {
    return useCount;
  }
}

let confiremSuccess = false;
confiremTest();
function confiremTest() {
  const confiremTestUl = document.querySelector("#o-p-confirm-test-ul");

  let lis = confiremTestUl.children;
  lis = Array.from(lis);

  selectedStyle();
  function selectedStyle() {
    lis.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("selected");
      });
    });
  }
}




function check_if_confirmTest_isRight() {

  let erroText1 = [];
let erroText2 = [];
let erroText3 = [];

  const confiremTestUl = document.querySelector("#o-p-confirm-test-ul");
  let lis = confiremTestUl.children;
  lis = Array.from(lis);


  //Check obj
  checkObj();
  console.log('所有的错误包含：')
  console.log(erroText1,erroText2,erroText3)
  function checkObj(){
    confiremSuccess = true;
    lis.forEach((item) => {
      let beSelected = item.classList.contains("selected");
      let thisErroType = item.dataset.errotype;  
      console.log(item.id , thisErroType, typeof thisErroType)
      if (thisErroType === "1") {
        //type1: 'は果物です'
        if (!beSelected) {
          erroText1.push(item.dataset.name);
          confiremSuccess = false;
  
        }
      } else if (thisErroType == "2") {
        //  type2:'は果物ではないです'
        if (beSelected) {
          erroText2.push(item.dataset.name);
          confiremSuccess = false;
        }
      } else if (thisErroType == "3") {
        // type3: "農林水産省によると"
        if (beSelected) {
          erroText3.push(item.dataset.name);
          confiremSuccess = false;
        }
      }    
  
    });

  }

  

  // Create info
  createAllInfo();
  function createAllInfo(){
    const posEl = document.getElementById('o-p-confirm-test-info')
    posEl.innerHTML = '';
      createInfo('1',erroText1)
      createInfo('2',erroText2)
      createInfo('3',erroText3)
  }
  
  function createInfo(type,objArr){
    const posEl = document.getElementById('o-p-confirm-test-info')
    
    if (objArr.length == 0){
      return
    }
    let erroType = type;

    if(erroType == '1'){
      let str = objArr.join('、')
      let el = document.createElement('p')
      el.innerText = str　+ 'は果物です';
      el.classList.add('o-c-sub-info')
      posEl.appendChild(el);

    console.log('create!')
    }else if(erroType == '2'){

      let str = objArr.join('、')
      let el = document.createElement('p')
      el.innerText = str+ 'は果物ではないです';
      el.classList.add('o-c-sub-info')
      posEl.appendChild(el);

    }else if(erroType == '3'){
      let str = objArr.join('、')
      let el = document.createElement('p')
      el.innerText = '農林水産省によると'+str+ 'は野菜です';
      el.classList.add('o-c-sub-info')
      posEl.appendChild(el);
    }else{
      console.log('???')
    }

  }



}

function nextPage() {
  check_if_confirmTest_isRight();
  const avocado = document.querySelector("#avocado");
  if (confiremSuccess) {
    window.open("3.html", "_self");
  } else {
    // document.querySelector("#info-avocado").classList.remove("u-hidden");
  }
}

function prePage() {
  window.open("1.html", "_self");
}
