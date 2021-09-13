"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        // Usando private (è chiamato modifier), la proprietà employees 
        // è accessibile solamente dalla classe Department
        this.employees = [];
        // this.name = n;
    }
    // Aggiungendo questo speciale parametro (posso ancora lanciare describe() senza passare parametri)
    // describe() potrà essere lanciata solamente da istanze di tipo Department
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class ACDepartment extends Department {
    constructor(id, reports = []) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReport(text) {
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
