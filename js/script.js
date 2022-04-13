const btn = document.getElementById("btn");
const modal = document.getElementById("modal__wrapper");
const modalTar=document.querySelector('.modal')
btn.addEventListener('click', ()=>{
    modal.classList.add('show')
    modalTar.innerHTML=`<p>А вот это другое модальное<p>`
    modalTar.className='modal'
})

modal.addEventListener('click', (event)=>{
    if(!event.target.classList.contains('modal')&&!event.target.classList.contains('new__modal')&&!event.target.classList.contains('new__modal_true')){
        modal.classList.remove('show')
        modal.classList.remove('show__new')
        
    }
    
})

document.addEventListener('keydown', event=>{
    if(event.keyCode==27){
        modal.classList.remove('show')
    }
    
})

const newBtn = document.getElementById('new_btn')
const info = document.getElementById('info')
const number=10;

newBtn.addEventListener('click', ()=>{
    modal__wrapper.classList.add('show__new')
    
    if(info.value==number){
        modalTar.innerHTML=`<p>Вы угадали я загадал ${number}<p>`
        modalTar.className='new__modal_true'
    }
    else{
        modalTar.innerHTML=`<p>Вы не угадали<p>`
        modalTar.className='new__modal'
    }
    setTimeout(()=>{ modal.classList.remove("show__new")}, 1500)
})


// Слайдер 1 --------------- //

let images = ['img/1.webp','img/2.webp','img/3.webp','img/4.webp'];
let titles=['Первая','Вторая','Третья','Поехали']
const slider1 = document.querySelector('.slider1__content');
const titel1 = document.querySelector('.slider1__titel');


let i=1
setInterval(() => {
    slider1.style.backgroundImage=`url(${images[i]})`
    titel1.textContent=`${titles[i]}`
    i++
    if(i==4){
        i=0
    }
}, 3000);
