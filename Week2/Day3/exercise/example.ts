//For Scope

var X1 = 100;
console.log("X1 = ",X1);  //100
function F1()
{
    var Y = 200;
    console.log("Y = ",Y); // Y = 200;
    if(Y > 100)
    {
        console.log("Y = (Inside IF)",Y); // Y = 200;
        var Z = 300;
        console.log("Z (Inside IF Block)= ",Z);   // Z = 300
    }
    console.log("Y = (Outside IF)",Y); // Y = 200;
}
 
F1();

// For Closure

let X = 100;     // Scope of X is Global
console.log("X (Outside Function Before)= ",X);
function F2()
{
    let Y = 200;   // Scope of Y is Local
    console.log("Y Inside Function Before= ",Y);
   
    function Inner()
    {
        console.log("I am Inner Function ");
        console.log("Sum of X & Y is = ",X+Y);
    }
    Inner();
    return Inner;
}
let RF = F2();
 
RF();

