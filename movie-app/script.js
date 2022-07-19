const main=document.querySelector(".main")
const card=document.querySelector(".card")
const title=document.querySelector("h3")
const rate=document.querySelector("span")
const img=document.querySelector("img")
const check=document.querySelector("input")
const label=document.querySelector("label")
const ary=[]
const length=100;

const url="download.jpg"

  
 for (let index = 0; index < length; index++) {
    const ran =Math.floor(Math.random() * 11);
    const newCard=document.createElement("div")
    newCard.classList.add("card")
   
    newCard.innerHTML= "<img src="+url+"><h3>movie<span class ="+ rateColor(ran)+">"+ran+"</span></h3>"
    main.appendChild(newCard)
    rateColor(ran)
    ary[index] +=newCard
}

addEventListener("load",function () {
console.log("loaddd");
})


function rateColor(elmnt) {
    if(elmnt < 5)
    return "red"
    else(elmnt > 5)
    return"green"
}