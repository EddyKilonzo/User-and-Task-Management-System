
const userForm = document.getElementById('userForm');
const userId = document.getElementById('userId');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const addUserButton = document.getElementById('addUserButton');
const viewUserButton = document.getElementById('viewUsersButton');
const deleteUserButton = document.getElementById('deleteUserButton');


addUserButton.addEventListener('click', (event) => { 
    event.preventDefault();
    
    window.userManager.createUser(
        userName.value,
        parseInt(userId.value), 
        userEmail.value
    );
    alert(`User ${userName.value} added successfully`);
    userForm.reset();

})




viewUserButton.addEventListener('click', (event) => { 
    event.preventDefault();
    
    
        const users = window.userManager.getUsers();
        
        const userList = document.getElementById('userList');
        userList.innerHTML = '<h2>Users List</h2>'; 
        
        if (!users || users.length === 0) {
            userList.innerHTML = `<p>No users found</p>`;    
        }
        
        const ul = document.createElement('ul');

        users.forEach((user) => {
            const li = document.createElement('li');
            li.classList.add('getUser');

            li.innerHTML = `${user.id}. ${user.name} ---- ${user.email} ---- ${user.task}`;
            ul.appendChild(li);
        });
        
        userList.appendChild(ul);
        
    
});



deleteUserButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const idToDelete = parseInt(userId.value);
    if (!idToDelete) {
        alert('Please enter a valid user ID');
    }

    try {
        window.userManager.deleteUser(idToDelete);
        alert('User deleted successfully');
        userForm.reset();
        
        viewUserButton.click();
    } catch (error) {
        alert('Failed to delete user');
    }
});

const addTaskButton = document.getElementById('addTaskButton');
const taskId = document.getElementById('taskId');
const taskName = document.getElementById('taskName');
const viewTaskButton = document.getElementById('viewTasksButton');
const deleteTaskButton = document.getElementById('deleteTaskButton');



addTaskButton.addEventListener('click', (event) => {
    event.preventDefault();

    window.taskManager.createTask(
        taskName.value,
        parseInt(taskId.value), 
        
    );
    alert(`Task ${taskName.value} added successfully`);
    taskForm.reset();
});

viewTaskButton.addEventListener('click', (event) => {
    event.preventDefault();
    const tasks = window.taskManager.getTasks();

    const taskList =document.getElementById('taskList');
    if (!taskList) {
        alert('Task list element not found');
        
    }

    taskList.innerHTML = '<h2>Tasks List</h2>'; 

    if (!tasks || tasks.length === 0) {
        taskList.innerHTML = `<p>No tasks found</p>`;    
    }
    const ul = document.createElement('ul');

    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.classList.add('getTask');

        li.innerHTML = `${task.id}.--- ${task.task} ---- `;
        ul.appendChild(li);
    })
    taskList.appendChild(ul)
});

