var Employee = /** @class */ (function () {
    function Employee(eid, ename, deptNo) {
        this.eid = eid;
        this.ename = ename;
        this.deptNo = deptNo;
    }
    Employee.prototype.setData = function (eid, ename, deptNo) {
        this.eid = eid;
        this.ename = ename;
        this.deptNo = deptNo;
    };
    Employee.prototype.display = function () {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptNo);
    };
    return Employee;
}());
var ptr = new Employee(4556, "fgtrgr", 869786);
// ptr.eid=11;
// ptr.ename="ramos";
// ptr.deptNo=21;
//ptr.setData(43,"abc",44);
ptr.display();
