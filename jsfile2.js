// console.log(1|2)
// console.log(1&2)
// ----------------------
// const readPermission=4;
// const writePermission=2;
// const executePermission=1;

// let myPermission=0;
// myPermission=myPermission|writePermission;
// console.log(myPermission)

// let message=(myPermission & readPermission)?'yes':'no';

// console.log(message)

// =========================
// Swapping colors
// ===================
// let r="red";
// let b="blue";
// console.log(r +"---" +b)
// let c=r;
//  r=b;
//  b=c;

//  console.log(r +"---" +b)


//  ==================================
// Conditional statement If else
//  ==================================

// let hour=25;
// if(hour>=6 && hour <=12){
//     document.write("Hey, Good morning")
// }
// else if(hour>=12 && hour <=18){
//     document.write("Hey ,good afternoon")
// }
// else{
//     document.write("Good ,Evening")
// }

//  ==================================
// Conditional statement switch case
//  ==================================
// note=>If we are not given break then next statement also run
// let role="moderator";
// switch(role){
//     case "guest":
//         document.write("This is guest ...");
//         break;

//     case "moderator":
//         document.write("This is from moderator");
//         break;

//     default:
//         document.write("Unknown User");    
// }


// Above switch program using if else conditon
// let role="guest";
// if(role==="guest"){
//     document.write("This is from guest user ...")
// }
// else if(role==="moderator"){
//     document.write("This is from Moderator user ...")
// }
// else{
//     document.write("This is from unknown user")
// }

// ==============================
// Loops:=>for,while,do while,For in,for of
// ==============================

// for(i=0;i<5;i++){
//     document.write("This is statement" +i +"<br/>")
// }
// ===============================
// odd number with loop
// ===============================

// for(i=0;i<5;i++){
//     if(i%2!==0){
//         document.write("This is statement" +i +"<br/>")
//     }
    
// }

// ====================================
// for loop reverse order odd number
// ====================================

// for(let i=5;i>=1;i--){
//     if(i%2!==0){
//         document.write("number => "+i +"<br/>")
//     }
   
// }

// =========================
// while loop
// =========================

// let i=0;
// while(i<5){
//     document.write(i+"<br/>")
//     i++
// }

// =======================
// Reverse while loop
// =======================

// let i=5;
// while(i>=1){
//   document.write(i + "<br/>")  
//   i--;
// }

// =========================
// Reverse order while loop with even number
// let i=5;
// while(i>=1){
   
//     if(i%2===0){
//         document.write("Number is"+i+"<br/>")
       
//     }
        
//     i--;  
   
// }
// ==========================
// do while loop
// ==========================
// first example with right condition
// let i=0;
// do{
// document.write("Number is"+i+"<br/>")
// i++;
// }while(i<5)

// second example with wrong condition
//In do while condition false still loop runs once
// let i=9;
// do{
// document.write("Number is"+i+"<br/>")
// i++;
// }while(i<5)

// ==================================
// infinite loop
// ================================
// let i=1;
// while(i<5){
// document.write("The number is "+i+"<br/>")
//don't try otherwise your system will hang
// i++
// }
// -------------------
// infinite another example
// while(true){

// }

// infinite another example
// let x=0;
// do{
//     document.write("hey => " +x+"<br/>")
// x++;
// }while(x<5)

// =================================
// infinite  loop for loop example
// =================================
// for(let i=0;i>0;i++)


// =================================
// another infinite  loop for loop example
// =================================

// for(i=0;i<10)

// ===============================
// for in loop using object
// ================================
// note=>To iterate over the properties of an object
// const person={
//     name:"Mosh",
//     age:22
// };

// for(let key in person)
// {
// console.log(key)
// console.log(key +"===>" +person[key])
// }


// ===============================
// for in loop another example using array
// ================================

// let colors=["red","green","blue"];
// for(let index in colors){
//     document.write(index+" -> " +colors[index]+ "<br/>" )
// }

// ===============================
// note=>continue goes to nex iteration
// break=>break the loop
// let i=0;
// while(i<=10){
//     if(i%2===0){
//         i++;
//         continue;
//     }
//    document.write(i+"<br/>");
//     i++;
// }

// let i=0;
// while(i<10){
//     if(i%2!==0){
//         document.write(i+"<br/>")
       
//         break;
        
//     }
//     i++;
// }


// =================================
// Exercise ->Take 2 numbers and returns the maximum number

// function maxNumber(a,b){
//     if(a>b){
//         return a
//     }else{
//         return b
//     }
// }

// let nummax=maxNumber(60,40)
// document.write("Maximum numbedr is => "+nummax)
// ===========================
// Exercise another method ->Take 2 numbers and returns the maximum number conditional rendering

function maxNumber(a,b){
return (a>b?a:b)
}

let maxNum=maxNumber(90,100);
document.write(maxNum)