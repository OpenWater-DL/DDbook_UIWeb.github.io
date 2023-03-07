function nextPage() {
  window.open("end.html", "_self");
}

function prePage() {
  window.open("2.html", "_self");
}

function confirmCancel(){
    document.querySelector("#o-p-page3-confirm-dialog").style.display = 'none';

}


function checkAgree_y() {
  let scrollTop = document.getElementById("agree-text").scrollTop;
  let scrollHeight = document.getElementById("agree-text").scrollHeight;
  let textAreaHeight = document.getElementById("agree-text").clientHeight;
  console.log(scrollTop, scrollHeight);
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
    document.getElementById('agree-checkbox-info').style.display = 'block';

  } else {
    // if agree
    document.querySelector("#o-p-page3-confirm-dialog").style.display = 'block';

  }
}
