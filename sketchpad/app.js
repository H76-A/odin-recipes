
const divContainer = document.createElement('div')
divContainer.class ='container'

document.body.appendChild(divContainer)
divContainer.classList.add('container')
for(i=1;i<=256;i++){
    const div = document.createElement('div')
    div.class=`item${i}`
    div.innerText=` ${i}`
    divContainer.appendChild(div)
    console.log(div)
}   