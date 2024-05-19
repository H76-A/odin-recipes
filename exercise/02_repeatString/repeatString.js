const repeatString = function(text,value) {
    if(value<0){
        return 'error'
    }
    else{

    
    for(i=0;i<=value;i++){

        out+=text;
    }
return out;

}};
console.log(repeatString('hello',5))

// Do not edit below this line
module.exports = repeatString;
