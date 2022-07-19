const btn = document.querySelector(".btn")
const head = document.querySelector(".head")
const put =document.querySelector(".put")
const shap =document.querySelector(".shap")




const float=20.7
const int =21
const objct ={
             name:"saif",
             id: 007,
             lastname:"saeed",
             fullname:function (){
                 return  this.name+ " "+this.lastname
             }
             };
const array = [10,12,44,14,8];
const bool=false
 

var myData
fetch('https://learnwebcode.github.io/json-example/animals-1.json')
 .then(response => response.json())
   .then(myData => head.innerHTML=myData[0].name);