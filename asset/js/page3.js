function nextPage() {
  window.open("end.html", "_self");
}

function prePage() {
  window.open("2.html", "_self");
}

function confirmCancel() {
  document.querySelector("#o-p-page3-confirm-dialog").style.display = "none";
}

function checkAgree_y() {
  let scrollTop = document.getElementById("agree-text").scrollTop;
  let scrollHeight = document.getElementById("agree-text").scrollHeight;
  let textAreaHeight = document.getElementById("agree-text").clientHeight;
  // console.log(scrollTop, scrollHeight);
  if (scrollTop + textAreaHeight >= scrollHeight) {
    document
      .querySelector("#agree-checkbox-label")
      .classList.add("agree-scroll-ok");
    document.querySelector("#not-agree-check").disabled = false;
  } else {
    document
      .querySelector("#agree-checkbox-label")
      .classList.remove("agree-scroll-ok");
    document.querySelector("#not-agree-check").disabled = true;
  }
}

const extensions = [".jpg", ".png", ".com", ".rpg", ".mp3", ".org", ".exe"];
let mail_btn2_contentID = 0;
function changeExtensionName() {
  mail_btn2_contentID = click_changeContents(
    "mail-change-btn2",
    extensions,
    mail_btn2_contentID
  );
}

function moveArrow() {
  const btn = document.getElementById("o-p-page3-btn__arrow");

  btn.classList.add("move-to-right");
  btn.addEventListener("transitionend", function () {
    btn.classList.remove("move-to-right");
  });
}

function confirmDialog() {
  const confiremState = document.querySelector("#not-agree-check").checked;
  if (confiremState) {
    // if not agree
    document.getElementById("agree-checkbox-info").style.display = "block";
  } else {
    // if agree
    document.querySelector("#o-p-page3-confirm-dialog").style.display = "block";
  }
}

let set_position;

gsap.registerPlugin(ScrollToPlugin);

scrollControl();
function scrollControl() {
  const textArea = document.querySelector("#agree-text");

  //判断设备

/* Storing user's device details in a variable*/

let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);

let set_position=0;

if (isMobileDevice) {
  autoScroll_mb();
  console.log('is moblie')

} else {
  autoScroll_pc();

}


function autoScroll_pc(){
  //PC
  textArea.addEventListener("scroll", (event) => {
    let scrollTop = document.getElementById("agree-text").scrollTop;
    let scrollHeight = document.getElementById("agree-text").scrollHeight;
    let textAreaHeight = document.getElementById("agree-text").clientHeight;
    let maxPos = scrollHeight -  textAreaHeight + 10;

    if (set_position < textArea.scrollTop) {
      console.log(`down`); 
      gsap.to("#agree-text", {scrollTo:maxPos, 
      duration: 0.3 ,ease: "none"       
      });

      
    } else if(set_position > textArea.scrollTop) {
      console.log(`up`); 
      gsap.to("#agree-text", {scrollTo:'min', duration: .3,ease: "none"    });

    }
   

  set_position = textArea.scrollTop;

  });


}


function autoScroll_mb(){
  textArea.style.scrollBehavior = 'auto'

  textArea.addEventListener("scroll", (event) => {
    let scrollTop = document.getElementById("agree-text").scrollTop;
    let scrollHeight = document.getElementById("agree-text").scrollHeight;
    let textAreaHeight = document.getElementById("agree-text").clientHeight;

    let maxPos = scrollHeight -  textAreaHeight;


    if(set_position <= maxPos && set_position >= 0){
      //没有超出最大边界的情况下

      if (set_position < textArea.scrollTop) {
        console.log(`down`); 
        gsap.to("#agree-text", {scrollTo: maxPos, 
        duration: .3,ease: "none" });
  
        
      } else if(set_position > textArea.scrollTop  ) {
        console.log(`up`); 
        gsap.to("#agree-text", {scrollTo:0, duration: .3,ease: "none" });
  
      }


    }

    
   

  set_position = textArea.scrollTop;


    

  });


}


}



