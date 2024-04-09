console.log("muna");
console.log("rahat");
var navToggle = document.querySelector(".navbar-toggler-icon");
var navClose = document.querySelector("#nav-close");
var advertiseClose = document.querySelector(".close-button");
var advertise=document.querySelector("#advertise");
var Home=document.querySelector("#home");
var contactCloseButton= document.querySelector(".contact-close-button");
var down= document.querySelectorAll(".down");
var cardBody= document.querySelectorAll(".card-body");
var upper= document.querySelectorAll(".upper");
var area = document.querySelector("#area");
var contact = document.querySelector("#contact");
var facilities= document.querySelector("#facilities");
var description= document.querySelector("#description");
var pricing = document.querySelector("#pricing");
var Card= document.querySelector(".Card");
var leftButton = document.querySelector("#left-button");
console.log("muna");
console.log("munaaaaaaaaaaa");
var homeSection = document.querySelector("home-section");

/* For scrolling*/
window.addEventListener("scroll",function(){


  var Navbar = document.querySelector("nav");
  
  if(pageYOffset > 0 || pageXOffset >0){
      Navbar.style.backgroundColor="black";
      Navbar.style.opacity="1";
  }
  else{
    Navbar.style.backgroundColor="black";
    Navbar.style.opacity= "0.6";
  }

})

navToggle.addEventListener("click",function(){

  document.querySelector(".nav-menu").classList.add("show-menu");
   

});
navClose.addEventListener("click",function(){
  document.querySelector(".nav-menu").classList.remove("show-menu");

});

/* For advertise modal*/
advertise.addEventListener("click",function(){

  document.querySelector(".modal-section").classList.remove("show-modal");
  document.querySelector(".overlay").classList.remove("hidden");
  document.querySelector(".show-logIn").style.display="none";
  document.querySelector(".show-signIn").style.display="none";
  document.querySelector(".contact-us").classList.add("show-contact");
})

advertiseClose.addEventListener("click",function(){

  document.querySelector(".modal-section").classList.add("show-modal");
  document.querySelector(".overlay").classList.add("hidden");
  
})
const overlay = document.querySelector(".overlay");
overlay.addEventListener("click",function(){
  document.querySelector(".modal-section").classList.add("show-modal");
  overlay.classList.add("hidden");

})
if(!advertise){
  document.querySelector(".modal-section").classList.add("show-modal");
  

}
/* for advertise signin*/
const signin = document.querySelector("#signIn");
signin.addEventListener("click", function(){
  document.querySelector(".show-signIn").style.display="block";
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".show-logIn").style.display="none";
    document.querySelector(".modal-section").classList.add("show-modal");
    document.querySelector(".contact-us").classList.add("show-contact");

})

overlay.addEventListener("click",function(){


  document.querySelector(".show-signIn").style.display="none";
  overlay.classList.add("hidden");


})
/* Contact*/
contact.addEventListener("click",function(){
    document.querySelector(".contact-us").classList.remove("show-contact");
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".show-logIn").style.display="none";
    document.querySelector(".show-signIn").style.display="none";
    document.querySelector(".modal-section").classList.add("show-modal");
   
})
contactCloseButton.addEventListener("click",function(){
  document.querySelector(".contact-us").classList.add("show-contact");
  document.querySelector(".overlay").classList.add("hidden");

})
overlay.addEventListener("click",function(){


  document.querySelector(".contact-us").classList.add("show-contact");
  overlay.classList.add("hidden");



})
/* Contact End*/

/* Sign in start*/

var signIn = document.querySelector("#sign-in");

signIn.addEventListener("click", function(){
    document.querySelector(".show-signIn").style.display="block";
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".show-logIn").style.display="none";
    document.querySelector(".modal-section").classList.add("show-modal");
    document.querySelector(".contact-us").classList.add("show-contact");
   
})

document.querySelector(".signIn-close-button").addEventListener("click",function(){
  document.querySelector(".show-signIn").style.display="none";
  document.querySelector(".overlay").classList.add("hidden");


})
overlay.addEventListener("click",function(){


  document.querySelector(".show-signIn").style.display="none";
  overlay.classList.add("hidden");



})
/* Sign in end*/


/*login start*/
var logIn= document.querySelector("#log-in");

logIn.addEventListener("click",function(){
  document.querySelector(".show-logIn").style.display="block";
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".show-signIn").style.display="none";
    document.querySelector(".modal-section").classList.add("show-modal");
    document.querySelector(".contact-us").classList.add("show-contact");
    console.log("hi");
})
document.querySelector(".logIn-close-button").addEventListener("click",function(){
 
   document.querySelector(".show-logIn").style.display="none";
   document.querySelector(".overlay").classList.add("hidden");


})
overlay.addEventListener("click",function(){


  document.querySelector(".show-logIn").style.display="none";
  overlay.classList.add("hidden");



})

console.log(down.length);

/* For area selection*/ 
area.addEventListener("click",function(){

document.querySelector(".area").classList.toggle("hidden");
 alert("If you click area button once and your area section is not removing then click the area section again")
  
})



function laO(src){
  window.location=src;
}
function laT(src){
  window.location=src;
}
function laH(src){
  window.location=src;
}
function laF(src){
  window.location=src;
}
function laI(src){
  window.location=src;
}
function laS(src){
  window.location=src;
}

function laA(src){
  window.location=src;
}
/*Area section End*/
