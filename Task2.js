// conditions

//                     "if"

let x = 85;

try {
    if(x == ''){
        throw new Error("Is empty");
    }else if(isNaN(x)){
        throw new Error("Not a number");
    }else if(!(x >= 0 && x <= 100)){
        throw new Error("This is outside range");
    }else{
        if(x >= 89 && x <= 100){
            console.log('Excellent');
        }else if (x >= 80 && x < 89) {
            console.log('Very Good');
        }else if (x >= 70 && x < 80) {
            console.log('Good');
        } else {
            console.log("Acceptable")
        } 
    }
} catch (error) {
    console.log(error);
}

//                  "switch"

let y ="sunday";

switch(y){
    case "saturday":
        console.log(`This is weekend`);
    break;
    case "sunday":
        console.log(`This is weekend`);
    break;
    case "monday":
        console.log(`This is not weekend`);
    break;
    case "tuesday":
        console.log(`This is not weekend`);
    break;
    case "wednesday":
        console.log(`This is not weekend`);
    break; 
    case "thursday":
        console.log(`This is not weekend`);
    break; 
    case "friday":
        console.log(`This is not weekend`);
    break;  
}

//                   "for"

let arry = ["BMW", "Volvo", "Saab", "Ford"];
function getarray(arr){
    let text='';
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] != arr.at(-1)){
            text += arr[i] + ' , ';
        }else{
            text += arr[i] ;
        }
    }
    console.log(`[ ${text} ]`)
}
getarray(arry);

//                   "while"

function printarray(arr) {

    let i = 0;
    while ( i <arr.length) {
    console.log(`the car is : ${arr[i]}`);
    i++;
    }
}
printarray(arry);

