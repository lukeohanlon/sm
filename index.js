
const slideCont = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");


if(nextButton){
  nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slideCont.scrollLeft += slideWidth;
  });
}

if(prevButton){
  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slideCont.scrollLeft -= slideWidth;
  });
}



const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

var form = document.getElementById('f');

function sendSuccess() {
  e.preventDefault()
  if (form.checkValidity()) {
    alert("Adding Succesful!");
  }
}
let modalContent = document.getElementById('modal-txt')

function popUp() {
  var popup = document.getElementById('myPopup')
  popup.classList.toggle('show')
  setTimeout(() => {
    popup.classList.toggle('show')
  },1500)
}

function circleChange() {
  let cont = document.getElementById('container1')
  let shower = document.getElementById('shower')
  let hider = document.getElementById('hider')
  let text1 = document.getElementById('text1')
  let form = document.getElementById('form')
  let box = document.getElementById('success-box')
  let icon = document.getElementById('icon')
    shower.style.opacity = '0'
    hider.style.opacity = '1'
    text1.style.opacity='1'
    cont.style.borderRadius='10px'
   
  // }
}
let texts = document.getElementsByClassName('modal-txt')
console.log(texts)
let modalChoice = ''
let modal = document.getElementById('modal')
let modalBox = document.getElementById('modal-box')
// let modalChoice = ""
// let x = 'quote-btn';
let showModal = (e) => {
  console.log(texts)
  // modalChoice.style.display = "none"
  var modalChoice = document.getElementById(e)
  
  console.log(modalChoice)
  modalChoice.style.display = "flex"
  modal.style.opacity = "1"
  modal.style.zIndex = "15"
  modalBox.style.transform = "translate(0)"
}
let closeModal = () => {
  [].forEach.call(texts, (text) => {
    text.style.display = "none"
  })
  
  modal.style.opacity = "0"
  modal.style.zIndex = "1"
  modalBox.style.transform = "translate(-100%)"
  // modalContent.style.display = 'none'
}
// let modalClose = document.getElementById("modal-icon").addEventListener("click", closeModal())

