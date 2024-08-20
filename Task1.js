// difference let -- var -- const 

// "Hosting"
 x = 20;
 var x ;
 console.log(x);

//                    "In let"
let name = 'Ashraf';
console.log(`Before entering method : ${name}`);

function show(){
    name = 'Ahmed';
    console.log(`After entering method : ${name}`);
};
show();
console.log(`Ater Leaving method : ${name}`);

//----------------------------------------------------

let name1 = 'Ashraf';
console.log(`Before entering method : ${name1}`);

function show1(){
 let name1 = 'Ahmed';
    console.log(`After entering method : ${name1}`);
};
show1();
console.log(`Ater Leaving method : ${name1}`);

//-------------------------------------------------------

//                    "In vars"
 num = 10;
console.log(`Before entering method : ${num}`);

function show2(){
 var num = 5;
    console.log(`After entering method : ${num}`);
};
show2();
console.log(`Ater Leaving method : ${num}`);

//-------------------------------------------------

 var num1 = 10;
console.log(`Before entering method : ${num1}`);

function show2(){
  num1 = 5;
    console.log(`After entering method : ${num1}`);
};
show2();
console.log(`Ater Leaving method : ${num1}`);

//------------------------------------------------

var num2 = 10;
console.log(`Before entering method : ${num2}`);

function show3(){
 var num2 = 5;
    console.log(`After entering method : ${num2}`);
};
show3();
console.log(`Ater Leaving method : ${num2}`);

//------------------------------------------------------

let obj ={
    id : 1,
    user : "ashraf",
    email : "npm546@gmail.com"
};

let concat = obj.user + obj.id;  // concat

let arr = [10,20,30,'Ahmed',true,undefined];
console.log(typeof(arr))
console.log(arr.length)