let menulang = document.getElementById("menulang");
let english = document.getElementById("english");
english.addEventListener('click', ENG);
let spanish = document.getElementById("spanish");
spanish.addEventListener('click', SPA)


function SPA() {
    let change = location.href = "../es/index.html";
}

function ENG() {
    let change_eng = location.href = "../index.html"
}