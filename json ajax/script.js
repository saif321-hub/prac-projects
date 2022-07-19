const btn=document.querySelector('#btn')
const div=document.querySelector('#info')
var i=1;
btn.addEventListener("click",function(){
    var ourRequet= new  XMLHttpRequest()
ourRequet.open('GET','https://learnwebcode.github.io/json-example/animals-'+i+'.json')
ourRequet.onload= function(){
    if(ourRequet.status >=200 && ourRequet.status <400){
        var ourData = JSON.parse(ourRequet.responseText);
        addHtml(ourData)
    }
    else{
        alert("error :)")
    }
    
}
//"hello"
ourRequet.onerror=function(){
    alert("somthing went wrong")
}
ourRequet.send()
i++
if(i>3)
btn.hidden= true
})
 
function addHtml (data)
{
 var htmlString=""
data.forEach(element => {
    htmlString +="<p>"+element.name+" is a "+element.species+" thats like to eat "+element.foods.likes+"</p>"
});
div.insertAdjacentHTML('beforeend',htmlString)
}



