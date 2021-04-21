const menuBar = document.querySelector('.menu-bar');
const nav = document.querySelector('header nav');

const ul1 = document.querySelector('.ul1');
const ul1li = document.querySelectorAll('.ul1 li');

const ul2 = document.querySelector('.ul2');
const ul2li = document.querySelectorAll('.ul2 li');

const ul3 = document.querySelector('.ul3');
const ul3li = document.querySelectorAll('.ul3 li');
const lis = document.querySelectorAll('header nav ul li');
menuBar.addEventListener('click', e => {
  e.stopPropagation();
  displayNav()
});
let clicked = false;
function displayNav(){
  if (clicked){
    nav.style.display = 'none';
    menuBar.style.border = 'none';
  }else{
    menuBar.style.border = '0.1rem solid white';
    menuBar.style.padding = '0.4rem';
    menuBar.style.paddingBottom = '0.1rem';
    nav.style.display = 'block';
  }
  clicked = !clicked;
  if (!clicked){
    for (let li of lis){
      li.style.display = 'none';
    }
  }
}

function use(ul, ulli, ctk, c1, c2){
  //rem(c1, c2);
  ul.addEventListener('click', disp);
  function disp(e){
    e.stopPropagation();
    for (let va of ulli){
      va.style.display = ctk ? 'none' : 'block';
    }
   // rem(c1, c2);
    ctk = !ctk;
  }
}

function rem(n1, n2){
  for(let [o, oo] of zip(n1, n2)){
    if (o.style.display === 'block')
      o.style.display = 'none';
    if (oo.style.display === 'block')
      oo.style.display = 'none';
  }
}
let ctk1=0;
use(ul1, ul1li, ctk1, ul2li, ul3li);

let ctk2=0;
use(ul2, ul2li, ctk2, ul1li, ul3li);

let ctk3=0;
use(ul3, ul3li, ctk3, ul1li, ul2li);

/*rem(ul1li, ul3li);
rem(ul2li, ul3li);
rem(ul2li, ul1li);*/
document.addEventListener('click', e => {
  for(let i of lis)
    i.style.display = 'none';
});

function zip(l1, l2){
  for (let i=0; i<l1.length; i++){
    l1[i] = [l1[i]];
    l1[i].push(l2[i]);
  }
  return li;
}

