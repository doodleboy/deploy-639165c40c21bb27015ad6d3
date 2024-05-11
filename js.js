
// hiding input box
const other = document.querySelector('#other');
const joboffer = document.querySelector('#joboffer');
const school = document.querySelector('#school');
let textarea = document.querySelector('#textarea');
let boxhide = true;
const form = document.querySelector('#contact-form');

window.onload = function(){
    other.addEventListener('click', function (){
        if (boxhide){
            textarea.removeAttribute('hidden');
            text.removeAttribute('hidden');
            text.setAttribute('required', '');
            boxhide = false;
        }
    });
 }
 joboffer.addEventListener('click', hidetext);
 school.addEventListener('click', hidetext);

 function hidetext() {
  if(!boxhide){
      text.removeAttribute('required');
      text.setAttribute('hidden', '');
      textarea.setAttribute('hidden', '');
      boxhide = true;
  }
}

function emailValidate() {
    let regexCheck =
      /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ ]?\d[ABCEGHJ-NPRSTV-Z]\d$/;
    let postal = document.getElementById('postal').value;
    if (!regexCheck.test(postal)) {
      alert("Postal Code Invalid");
      return false;
    } else {
      return true;
    }
};
// dark mode
(function () {
  document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("lightmode");
      var icon = document.getElementById("icon")
      if(document.body.classList.contains("lightmode")){
        icon.src = "./images/moon.png";
        }
         else{
        icon.src = "./images/sun.png";
       }
  })
})();



