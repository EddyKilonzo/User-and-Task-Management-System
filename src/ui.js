
const userForm = document.getElementById('userForm');
const userId = document.getElementById('userId');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const taskForm = document.getElementById('taskForm');
const addUserButton = document.getElementById('addUserButton');
const viewUserButton = document.getElementById('viewUsersButton');
const deleteUserButton = document.getElementById('deleteUserButton');
const updateUserButton = document.getElementById('updateUserButton');


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

            li.innerHTML = `${user.id}. ${user.name}, ${user.email}, ${user.task}`;
            ul.appendChild(li);
        });
        
        userList.appendChild(ul);
        
    
});
updateUserButton.addEventListener('click', (event) => { 
    e.preventDefault();

    const idToUpdate = parseInt(userId.value);
    const updatedName = userName.value;
    const updatedEmail = userEmail.value;

    if (!idToUpdate || !updatedName || !updatedEmail) {
        alert('Please enter a valid user ID, name, and email');
    }

    try {
        window.userManager.updateUser(
            idToUpdate,
            updatedName,
            updatedEmail
        );
    } catch (error) {
        alert('Failed to update user');
    }
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
const updateTaskButton = document.getElementById('updateTaskButton');



addTaskButton.addEventListener('click', (event) => {
    event.preventDefault();

    window.taskManager.createTask(
        taskName.value,
        parseInt(taskId.value), 
        
    );
    alert(`Task ${taskName.value} added successfully`);
    taskForm.reset();
    displayAssignments(); // Add this line to update assignments view
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
    taskList.appendChild(ul);
    displayAssignments(); 
});


// updateTaskButton.addEventListener('click', (event) => {
//     event.preventDefault();

//     const taskForm = document.getElementById('taskForm'); // Add this line
//     if (!taskForm) {
//         alert('Task form not found');
        
//     }

//     const idToUpdate = parseInt(taskId.value);
//     const updatedName = taskName.value; 

//     if (!idToUpdate || !updatedName) {
//         alert('Please enter a valid task ID and name');
        
//     }

//     try {
//         window.taskManager.updateTask(
//             idToUpdate,
//             updatedName
//         );
//         alert('Task updated successfully');
//         taskForm.reset();
//         viewTaskButton.click();
//     } catch (error) {
//         alert('Failed to update task: ' + error.message);
//     }
// });
deleteTaskButton.addEventListener('click', (event) => {
    event.preventDefault();

    const idToDelete = parseInt(taskId.value);
    if (!idToDelete) {
        alert('Please enter a valid task ID');
    }

    try {
        window.taskManager.deleteTask(idToDelete);
        alert('Task deleted successfully');
        taskForm.reset();
        
        viewTaskButton.click();
    } catch (error) {
        alert('Failed to delete task');
    }
});





const assignTaskId = document.getElementById('assignTask');
const assignUserId = document.getElementById('assignUser');
const assignTaskButton =document.getElementById('assignTaskButton');
const assignmentlist = document.getElementById('assignmentList');


function displayAssignments() {
    const getAssignments = document.getElementById('getAssignments');
    

    const tasks = window.taskManager.getTasks();
    if (!tasks || tasks.length === 0) {
        getAssignments.innerHTML = '<p>No assignments found</p>';
        
    }

    getAssignments.innerHTML = '';
    
    getAssignments.innerHTML = '<h2>Task Assignments</h2>';

    const assignments = window.taskManager.getTasks().filter(task => task.userId);
    if (!assignments || assignments.length === 0) {
        getAssignments.innerHTML += '<p>No assignments found</p>';
        return;
    }

    const ul = document.createElement('ul');
    assignments.forEach((task) => {
        const li = document.createElement('li');
        li.classList.add('assignmentList');
        const user = window.userManager.getUsers().find(user => user.id === task.userId);
        const userName = user ? user.name : 'Unknown User';
        li.innerHTML = `Task: ${task.task} (ID: ${task.id}) is assigned to ${userName} (ID: ${task.userId})`;
        ul.appendChild(li);
    });

    getAssignments.appendChild(ul);
}


assignTaskButton.addEventListener('click', (event) => {
    event.preventDefault();
    const taskId = parseInt(assignTaskId.value);
    const userId = parseInt(assignUserId.value);
    window.taskManager.assignTask(taskId, userId);
    displayAssignments();
});
