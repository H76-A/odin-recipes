
const numberbutton= document.querySelectorAll('.number button')
const operatorbutton= document.querySelectorAll('.operator button')
let output = document.querySelector('.output')

let num1= ''
let num2 = ''
let operator= ''
let equal = ' '
let result = 0

numberbutton.forEach(number=>{
    number.addEventListener('click',()=>{
        if(number.textContent == 'C')
            {
                num1= '';
                output.textContent= 0
                result = '0'
            }
        else{
            if(operator ==''){
                num1+= number.textContent;
                output.textContent=num1
                
            }
            else{
                output.textContent=''
                num2+=number.textContent;
                output.textContent= num2
            }
        }
        
    })
})

operatorbutton.forEach(button=> {button.addEventListener('click',()=>{
    operator= button.textContent;
    console.log(operator)
    output.textContent="0"
})
})


numberbutton.forEach(number=>{number.addEventListener('click',()=>{
    if(number.textContent== '='){
        switch(operator){
            case'+':
                result = parseFloat(num1) + parseFloat(num2);
                break;
            case '-':
                result = parseFloat(num1) - parseFloat(num2);
                break;
            case '*':
                result = parseFloat(num1) * parseFloat(num2);
                break;
            case '/':
                result = parseFloat(num1) / parseFloat(num2);
        }
        output.textContent= result
        num1= ''
        num2 = ''
        operator= ''

    }
})})