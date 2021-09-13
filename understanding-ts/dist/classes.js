"use strict";
class Department {
    constructor(id, name) {
        // this.name = n;
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        // Usando private (è chiamato modifier), la proprietà employees 
        // è accessibile solamente dalla classe Department
        // protected invece permette di accedere alla proprietà
        // anche dalle classi che ereditano Department
        this.employees = [];
        // Non è possibile accedere a proprietà e metodi static
        // all'interno di proprietà e metodi non static
        // utilizzando la parola chiave this.
        // Questo perché il this si riferisce all'istanza creata 
        // basandosi sulla classe e, la proprietà static,
        // non è disponibile nelle istanze, perché il concetto, appunto,
        // di proprietà e metodi static è quello di distaccarsi
        // dalle istanze
        // console.log(this.fiscalYear);
        // la proprietà static può essere però
        // richiamata usando il nome della classe
        // console.log(`Anno fiscale (proprietà statica): ${Department.fiscalYear}`);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// La parola chiave static permette di accedere a metodi o proprietà
// Senza dover prima creare un istanza utilizzando la parola chiave new
// Vengono utilizzati soprattuto per questioni di utility
Department.fiscalYear = 2021;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department (${this.name}) - ID(${this.id})`);
    }
}
class ACDepartment extends Department {
    // private usato con il constructor, assicura che venga creata
    // solamente un'istanza del tipo ACDepartment
    // si potrà accedere infatti al constructor solamente dall'interno della classe
    // e definendo quindi la logica tramite un metodo
    // che instanzierà sempre la stessa classe
    constructor(id, reports = []) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    // get mostRecentReport è un getter
    // permette di accedere alla proprietà lastReport (pur essendo private)
    // usando la dot notation, che andrà a richiamare il metodo 
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("Nessun rapporto trovato!");
    }
    // set mostRecentreport è un setter
    // permette, come il getter, di accedere ad una proprietà pur essendo di tipo private
    // e di impostare un valore usando la dot notation
    set mostRecentReport(text) {
        if (text) {
            this.addReport(text);
            return;
        }
        throw new Error("Il rapporto inserito non è valido!");
    }
    static getInstance() {
        if (ACDepartment.istance) {
            return this.istance;
        }
        this.istance = new ACDepartment("01A");
        return this.istance;
    }
    describe() {
        console.log(`AC Department (${this.name}) - ID(${this.id})`);
    }
    // Sovrascrivo il metodo della classe Department
    // Aggiungendo un if per cambiarne leggermente la logica
    addEmployee(employee) {
        if (employee === 'Gioele') {
            console.log("Non è possibile aggiungere Gioele!");
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee("Test static method");
const fiscalYear = Department.fiscalYear;
console.log(employee1, fiscalYear);
// Avendo un private constructor, potrò continuare a creare
// più istanze, ma saranno sempre uguali avendo definito con quella logica
// il metodo getIstance()
// il metodo getIstance è inoltre static, e può essere chiamato
// senza usare la parola chiave new
const accounting = ACDepartment.getInstance();
const accounting2 = ACDepartment.getInstance();
console.log(accounting, accounting2);
// console.log(accounting.mostRecentReport);
accounting.addReport("Test message report");
// tramite dot notation sto richiamando il getter mostRecentReport
// come se fosse una proprietà
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "Test message report setter";
accounting.addEmployee("Gioele");
accounting.addEmployee("Manu");
// employees non è più accessibile in questo modo
// essendo private
// accounting.employees.push("Test");
accounting.describe();
accounting.printEmployeesInformation();
// Aggiungo un nuovo employee
// Usando il metodo che ha sovrascritto
// Quello della classe Department
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
