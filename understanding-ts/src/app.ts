class Department {
    // private readonly id: string;
    // private name: string;
    // Usando private (è chiamato modifier), la proprietà employees 
    // è accessibile solamente dalla classe Department
    private employees: string[] = [];

    constructor(private readonly id: string, private name: string) {
        // this.name = n;
    }

    // Aggiungendo questo speciale parametro (posso ancora lanciare describe() senza passare parametri)
    // describe() potrà essere lanciata solamente da istanze di tipo Department
    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }
}

class ACDepartment extends Department {
    reports: string[];

    constructor(id: string, reports: string[] = []) {
        super(id, "Accounting")
        this.reports = reports;
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

const accounting = new ACDepartment("01A");
console.log(accounting);

accounting.addReport("Test message report");
accounting.addEmployee("Gioele");
accounting.addEmployee("Manu");

// employees non è più accessibile in questo modo
// essendo private
// accounting.employees.push("Test");

accounting.describe();
accounting.printEmployeesInformation();
accounting.printReports();

const itDep = new ITDepartment("01IT", ["Yoshi"]);
console.log(itDep);
itDep.addEmployee("Mario");
itDep.addEmployee("Luigi");

itDep.describe();
itDep.printEmployeesInformation();

// describe ci darà un errore, riferendosi al this della classe Department
// e non essendo accountingCopy di tipo Department
// const accountingCopy = {describe: accounting.describe};
// accountingCopy.describe();

// Definendo quini un name, possiamo utilizzare la funzione describe() 
// anche senza che accountingCopy non sia un'istanza di Department
// const accountingCopy = {name: 'Test', describe: accounting.describe};
// accountingCopy.describe();