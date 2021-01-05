abstract class Department {
    static fiscalYear = 2020;
    protected employees: string[] = [];
    constructor(protected readonly id: string, public name: string){

    }
    static createEmployee(name: string){
        return { name: name };
    }
    abstract describe(this: Department): void;
    
    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees)
    }
 }

 class ITDepartment extends Department {
     admins: string[];
     constructor(id: string, admins: string[]) {
         super(id, 'IT');
         this.admins = admins;
     }

     describe(){
         console.log('IT Department ')
     }
 }


