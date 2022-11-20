const button=document.querySelector('.main-button')
let ratingBox=document.querySelector('.rating-box')
let form=document.querySelector('form')
let title=document.querySelector('.main-title')
let subtitle=document.querySelector('.subtext')
let scoreBox=document.querySelectorAll('.-scorebox')
const img= new Image(250,225)
img.src='http://www.clipartbest.com/cliparts/9Tp/6Kr/9Tp6Kr9jc.png'


button.addEventListener('click',function(e){
    e.preventDefault();
    let valor=document.querySelector('.-score:checked').value
    ratingBox.classList.add('active')
    title.innerHTML='Agradecemos pelo feedback'
    subtitle.innerHTML=`A nota foi ${valor} de Cinco`
    form.setAttribute('style','height:300px')
    scoreBox.forEach((e)=>{e.style.display='none'})
    let imagem=document.querySelector('.rating-box').appendChild(img)
    imagem.setAttribute('style','margin:0 auto')


    button.style.display='none'
})



