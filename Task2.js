
//                     "if"

let mark = 85;
function get_rating(mark){
    try {
        if(mark == ''){
            throw new Error("Is empty");
        }else if(isNaN(mark)){
            throw new Error(`a "${mark}" is not a number`);
        }else if(!(mark >= 0 && mark <= 100)){
            throw new Error("This is outside range");
        }else{
            if(mark >= 89 && mark <= 100){
                console.log('Excellent');
            }else if (mark >= 80 && mark < 89) {
                console.log('Very Good');
            }else if (mark >= 70 && mark < 80) {
                console.log('Good');
            } else {
                console.log("Acceptable")
            } 
        }
    } catch (error) {
        console.log(error);
    }
}
get_rating(mark);

//                  "switch"

let day ="sunday";
function get_weekend(day){
    switch(day){
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
}
get_weekend(day);

//                   "for"

let arry = ["BMW", "Volvo", "Saab", "Ford"];
function get_arry(arr){
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
get_arry(arry);

//                   "while"

function print_arry(arr) {

    let i = 0;
    while ( i <arr.length) {
    console.log(`the car is : ${arr[i]}`);
    i++;
    }
}
print_arry(arry);

