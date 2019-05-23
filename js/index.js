// const taskList = []
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
    console.log(user); // TODO console.log
}

function createTask(data) {
    let task;
    if(data.type === 'simple') {
         task = user.createSimpleTask(data);
    }
    else if (data.type === 'home') {
        if (user.constructor.name === 'Student' || user.constructor.name === 'Developer') {
            task = user.createHomeTask(data);
        } else {
            alert('У вас немає прав на створення таску');
        }
    }
    else if (data.type === 'project') {
        if (user.constructor.name === 'Developer') {
            task = user.createProjectTask(data);
        } else {
            alert('У вас немає прав на створення таску');
        }
    }
    renderTask(task);
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

function renderTask(task) {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    let info = `type: simple; type: ${task.title}; status: ${task.status}`;
    if(task.constructor.name === 'HomeTask') {
        info = `type: home; type: ${task.title}; status: ${task.status}; description: ${task.description}`
    } else if (task.constructor.name === 'ProjectTask') {
        info = `type: project; type: ${task.title}; status: ${task.status}; description: ${task.description}; deadline: ${task.deadline}`
    }

    li.innerHTML = `${info}<button class="btn btn-danger btn-sm float-right">del</button>`;

     document.querySelector('.list-group').append(li)

}

document.querySelector('.list-group').addEventListener('click', function (e) {
    if(e.target && e.target.nodeName == "BUTTON") {
        // List item found!  Output the ID!
        const delBlock = e.target;
        delBlock.parentNode.remove()

    }
})