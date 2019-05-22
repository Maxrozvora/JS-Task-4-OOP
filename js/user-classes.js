class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    createSimpleTask(data) {
        return new SimpleTask(data.title, data.status);
    }
}

class Student extends User {
    constructor(name, surname, specialization) {
        super(name, surname);
        this.specialization = specialization;
    }

    createHomeTask(data) {
        return new HomeTask(data.title, data.status, data.description);
    }
}

class Developer extends Student {
    constructor(name, surname, specialization, jobTitle) {
        super(name, surname, specialization);
        this.jobTitle = jobTitle;
    }

    createProjectTask(data) {
        return new ProjectTask(data.title, data.status, data.description, data.date);
    }
}

class SimpleTask {
    constructor(title, status) {
        this.title = title;
        this.status = status;
    }
}

class HomeTask extends SimpleTask {
    constructor(title, status, description) {
        super(title, status);
        this.description = description;
    }
}

class ProjectTask extends HomeTask {
    constructor(title, status, description, deadline) {
        super(title, status, description);
        this.deadline = deadline;
    }

}
