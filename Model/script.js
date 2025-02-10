const openModelBtnEL = document.querySelector("#openModel");
const modelEl = document.querySelector(".model");
const modelContentEl = document.querySelector(".model__content");

openModelBtnEL.addEventListener("click",()=>{
    modelEl.classList.add("open");

})

modelContentEl.addEventListener("click",()=>{
    modelEl.classList.remove("open");
})