function openNextPage(){
    window.open("./1.html",'_self')
}


let dialog_rotateDeg = 0

function openDialog(){
   
    document.querySelector("#o-p-toppage-dialog").classList.remove('u-hidden');

}


dialog();

function dialog(){

  const btnRoate = document.querySelector('#o-p-toppage-dialog__rotate');
  const parentDialog =   document.querySelector('#o-p-toppage-dialog')
  btnRoate.addEventListener('click',()=>{
    dialog_rotateDeg +=30;
    if (dialog_rotateDeg % 120 == 0 ) dialog_rotateDeg += 240;
    parentDialog.style.transform = ` translate(-50%,-50%)  rotate( ${dialog_rotateDeg}deg)`;
    
  })

  const btnClose = document.querySelector('#o-p-toppage-dialog__close')
  
  btnClose.addEventListener('click',()=>{
      dialog_rotateDeg = 0;
      parentDialog.style.transform = ` translate(-50%,-50%)  rotate( ${dialog_rotateDeg}deg)`;

      parentDialog.classList.add('u-hidden');
  })

  const btnOk = document.querySelector('#o-p-toppage-dialog__ok')
  btnOk.addEventListener('click', ()=>{

    parentDialog.querySelector('p').textContent = '一番下の「ページ」を押してください'

  })


  
}



preloadImg();
function preloadImg(){
  let unshowImgs = document.createElement('div')
  unshowImgs.style.display='none';

  for(let i=1;i<=5;i++){
    let imgEl = document.createElement('img')
    imgEl.src= './asset/img/main_img/sp'+i+'.png';
    imgEl.style.display='none';

  unshowImgs.appendChild(imgEl)

  }


  for(let i=1;i<=5;i++){
    let imgEl = document.createElement('img')
    imgEl.src= './asset/img/main_img/pc'+i+'.png';
    imgEl.style.display='none';

  unshowImgs.appendChild(imgEl)

  }

  document.body.appendChild(unshowImgs)
 

}
