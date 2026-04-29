let menulang = document.getElementById("menulang");
let english = document.getElementById("english");
english.addEventListener('click', ENG);
let spanish = document.getElementById("spanish");
spanish.addEventListener('click', SPA)


function SPA() {
    location.href = "../AlunaDesign/Es/index.html";
}

function ENG() {

    location.href = "../index.html"
}