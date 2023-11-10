class Employee{
    eid:number;
    ename:string;
    deptNo:number;

    constructor(eid:number,ename:string,deptNo:number){
        this.eid=eid;
        this.ename=ename;
        this.deptNo=deptNo;


    }

    setData(eid:number,ename:string,deptNo:number):void{
        this.eid=eid;
        this.ename=ename;
        this.deptNo=deptNo;


    }


    display():void{
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptNo);
    }

}

var ptr = new Employee(4556,"fgtrgr",869786);
// ptr.eid=11;
// ptr.ename="ramos";
// ptr.deptNo=21;
//ptr.setData(43,"abc",44);
ptr.display();