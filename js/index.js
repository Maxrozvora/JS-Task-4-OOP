
//  add eventListener to submit form
const createUserForm = document.querySelector('#userCreate');
createUserForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const surName = e.target.elements.surname.value;
    const specialization = e.target.elements.specialization.value;
    const job = e.target.elements.job.value;
    const type = e.target.elements.type.value;

    const data = {
        name,
        surName,
        specialization,
        job,
        type
    };

    createUser(data);

});

let user;

function createUser(data) {

    if(data.type === 'User') {
        user = new User(data.name, data.surName);
    }
     else if (data.type === 'Student') {
         user = new Student(data.name, data.surName, data.specialization);
    }
     else if (data.type === 'Developer') {
         user = new Developer(data.name, data.surName, data.specialization, data.job);
    } else {
         console.log('You chosen wrong user type'); // TODO console.log
    }

}

function createTask(data) {
    let task;
    if(data.type === 'simple') {
         task = user.createSimpleTask(data.title, data.status);
    }
    else if (data.type === 'home') {
        if (user.constructor.name === 'Student' || user.constructor.name === 'Developer') {
            task = user.createHomeTask(data.title, data.status, data.description);
        } else {
            alert('У вас немає прав на створення таску');
        }
    }
    else if (data.type === 'project') {
        if (user.constructor.name === 'Developer') {
            task = user.createProjectTask(data.title, data.status, data.description, data.date);
        } else {
            alert('У вас немає прав на створення таску');
        }
    }
    console.log(task); // TODO console.log
}
// event on simple task
const simpleForm = document.getElementById('simpleTask');
simpleForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        title: e.target.elements.title.value,
        status: e.target.elements.status.value,
        type:'simple'
    };

    createTask(data);
});

// event on home task
const homeForm = document.getElementById('homeTask');
homeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = {
        title: e.target.elements.title.value,
        status: e.target.elements.status.value,
        description: e.target.elements.description.value,
        type:'home'
    };
    createTask(data);
});

// event on home task
const projectTask = document.getElementById('projectTask');
projectTask.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = {
        title: e.target.elements.title.value,
        status: e.target.elements.status.value,
        date: e.target.elements.date.value,
        description: e.target.elements.description.value,
        type:'project'
    }
    createTask(data);
});