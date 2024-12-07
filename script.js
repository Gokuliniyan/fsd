//Data Types

//Primitive Data Types
var number = 10 //number
var name = "Gokul" //String
var percentage = 6.5 //Float(Number in Js)
var flag = true; //boolean


console.log(number,typeof number);
console.log(name,typeof name);
console.log(percentage,typeof percentage);
console.log(flag,typeof flag);


//Non Primitive Data Types
//array
//Collection of Data types
const arr = [10,"Gokul",percentage,false,{mentor:"sanjay"}];
console.log(arr);
//object JSON --> Javascript Object Notataion
//key and value
const obj ={
    mentor: "Sanjay",
    batchsize : 50,
    isstarted : true,
    arr: [1,2,"d"],
};
console.log(obj);

//copy by value and copy by reference
var num1 = 10;
var num2 = num1;
num2 = 15;
console.log("num1 ",num1);
console.log("num2 ",num2);

