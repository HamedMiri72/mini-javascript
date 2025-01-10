const noteContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");



createButton.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delet.png";
    noteContainer.appendChild(inputBox).appendChild(img);
})