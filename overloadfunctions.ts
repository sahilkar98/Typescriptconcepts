function add (x:number,y:number):number;
function add (x:string,y:string):string;

function add(x:any,y:any):any{
    return x+y;
}

console.log(add(10,20));
console.log(add("hi ","hello"));