const cards =document.querySelectorAll('.card')
const colaps =document.querySelector('h3')  

cards.forEach((card)=>{
    card.addEventListener('click',function() {
        removeActive()
       card.classList.add('active')
    })
})
 


function removeActive(){
    cards.forEach(card => {
        card.classList.remove('active')
    })
}
