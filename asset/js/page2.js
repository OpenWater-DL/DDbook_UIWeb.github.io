
createGender();
function createGender(){
    let tgt = document.querySelector('#o-p-gender');
    const WArr = ['♀','👨','👻','その他']
    createSelectList(WArr,tgt,'mySelect')
}



page2_phoneNumInput();
function page2_phoneNumInput(){

  let phoneNumInput_html =``; 

  for(let i =0;i<11;i++){
phoneNumInput_html += ` <input class="o-c-input-text" id="o-p-phone-num__cell" type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />`

  }

  let newDiv = document.createElement("div");
  newDiv.id ='phone-num';
  
  newDiv.innerHTML = phoneNumInput_html;
document.querySelector('#o-p-phone-num').appendChild(newDiv)

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



  confiremTest();
function confiremTest(){

  const confiremTestUl = document.querySelector('#o-p-confirm-test-ul')
  let lis = confiremTestUl.children
  lis = Array.from(lis)
  lis.forEach( (item)=>{

    item.addEventListener('click',()=>{

      item.classList.toggle('selected');

    })

  });


}


function nextPage(){
    window.open('3.html','_self')
}

function prePage(){
    window.open('1.html','_self')
}

