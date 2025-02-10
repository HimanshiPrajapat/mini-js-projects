const containerEl = document.querySelector(".container");

const carrers = ["YouTuber","Web Developer","FreeLancer","DataAnalyst","Instructor"];

let carrerIdx= 0;

let charIdx = 0;

updateText();

function updateText(){
    charIdx++;
containerEl.innerHTML = `<h1>I am ${carrers[carrerIdx].slice(0,1) === "I"? "an" : "a"} ${carrers[carrerIdx].slice(0,charIdx)}</h1>`;

if(charIdx === carrers[carrerIdx].length){
    carrerIdx++;
    charIdx = 0;
}
if(carrerIdx === carrers.length){
    carrerIdx = 0;
}
setTimeout(updateText,200);
}
