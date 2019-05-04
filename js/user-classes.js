class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    createSimpleTask() {
        console.log('simple Task'); // TODO console.log
    }
}

class Student extends User {
    constructor(name, surname, specialization) {
        super(name, surname);
        this.specialization = specialization;
    }

    createHomeTask() {
        console.log('home Task'); // TODO console.log
    }
}

class Developer extends Student {
    constructor(name, surname, specialization, jobTitle) {
        super(name, surname, specialization);
        this.jobTitle = jobTitle;
    }

    createProjectTask() {
        console.log('project Task'); // TODO console.log
    }
}
