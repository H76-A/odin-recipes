

const div = document.querySelector('div')
const h1 = document.createElement('h1')

h1.innerText= 'hello'

div.parentNode.insertBefore(h1,div)
h1.classList.add('h1-color')
let isBackround= false;
div.addEventListener("click",(e)=>{
    console.log(e.target)
    if(!isBackround){
        e.target.style.background='blue'
        isBackround = true;
    }
    else{
        e.target.style.background='red'
        isBackround = false
    }
    
})
// now for button section 

const btn = document.createElement('button');
btn.id='new-btn'
btn.innerText='Click'
console.log(btn)
div.parentNode.appendChild(btn)
btn.classList.add('btn')

btn.onclick=() =>{
 btn.classList.add('new-btn')
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

