"use strict"

const boxYes = document.querySelector(".comfirm");
const boxNo = document.querySelector(".decline");
const alertBox = document.querySelector(".alert");

const btnYes = boxYes.querySelector(".btn");
const btnNo = boxNo.querySelector(".btn");

let confirmed;


btnYes.onclick = e => {
    e.preventDefault();
    confirmed = true;
    alertBox.style.display = "none";
    console.log("souhlasim")
    console.log(confirmed)
}