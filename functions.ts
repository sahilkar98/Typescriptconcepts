function display(){
    console.log("Welocome to typescript");
}

display();


//anonymous function


var greeting =function(){
    console.log("welcome to anonymous function");
}
greeting();


function greet(name:string, opt?:string):string{
    return name+" is "+opt;
}


console.log(greet("he","good"));

console.log(greet("blank "));


var ro =(x:number,y:number):number=>{
    return x+y;
}

console.log(ro(11,19));

var Print = () => console.log("parameterless arrow function");

Print();