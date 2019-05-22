
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

// event on simple task
const simpleForm = document.getElementById('simpleTask');
simpleForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        title: e.target.elements.title.value,
        status: e.target.elements.status.value,
        type:'simple'
    }

    createTask(data)
})


function createTask(data) {
    let task;
    if(data.type === 'simple') {
         task = user.createSimpleTask();
    }
    else if (data.type === 'home') {
        user = new Student(data.name, data.surName, data.specialization);
        if (user.constructor.name === 'Student' || user.constructor.name === 'Developer') {
            task = user.createHomeTask();
        } else {
            alert('У вас немає прав на створення таску');
        }
    }
    else if (data.type === 'project') {
        if (user.constructor.name === 'Developer') {
            task = user.createProjectTask();
        } else {
            alert('У вас немає прав на створення таску');
        }
    }
}
const simple = document.getElementById('simpleTask')