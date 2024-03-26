const choices =['rock','Rock','ROCK','paper','scisor']
function getComputerChoice(choices) {
    // Check if choices is an array (to avoid errors)
    if (!Array.isArray(choices)) {
      throw new Error('getComputerChoice: choices must be an array');
    }
  
    // Get a random index within the choices array length
    const randomIndex = Math.floor(Math.random() * choices.length);
  
    // Return the computer's choice based on the random index
    return choices[randomIndex];
  }
 
document.addEventListener('DOMContentLoaded', () => {

    
const form = document.getElementById('inputForm');
// const inputvalue=document.getElementById('choise')
// const choise= inputvalue.value;
// console.log(choise+'hello')
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const inputChoise=document.getElementById('choise');
    const choise = inputChoise.value;
    form.reset();

   if(choise == getComputerChoice(choices)){
    alert('You Win')
   }
   else {
    alert('You loss')
   }
})

});
// document.addEventListener('DOMContentLoaded', () => {
//     const myElement = document.getElementById('choise');
//     if (myElement) {
//       const valuee = myElement.value;
//       console.log(valuee+'value')
//     } else {
//       console.error('Element not found');
//     }
//   });