
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

    console.log(data); // TODO console.log
    createUser(data);
    
});

function createUser(data) {
    let user;
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