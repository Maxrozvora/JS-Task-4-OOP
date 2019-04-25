class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    createSimpleTask() {

    }
}

class Student extends User {
    constructor(name, surname, specialization) {
        super(name, surname);
        this.specialization = specialization;
    }

    createHomeTask() {

    }
}

class Developer extends Student {
    constructor(name, surname, specialization, jobTitle) {
        super(name, surname, specialization);
        this.jobTitle = jobTitle;
    }

    createProjectTask() {
    }
}

const developer = new Developer('Вася', 'Пупкін');

developer.createProjectTask();