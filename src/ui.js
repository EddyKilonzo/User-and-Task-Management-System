


const userForm = document.getElementById('userForm');
const userId = document.getElementById('userId');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const taskForm = document.getElementById('taskForm');
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

            li.innerHTML = `${user.id}. ${user.name}, ${user.email}, ${user.task}`;
            ul.appendChild(li);
        });
        
        userList.appendChild(ul);
        
    
});
// updateUserButton.addEventListener('click', (event) => { 
//     e.preventDefault();

//     const idToUpdate = parseInt(userId.value);
//     const updatedName = userName.value;
//     const updatedEmail = userEmail.value;

//     if (!idToUpdate || !updatedName || !updatedEmail) {
//         alert('Please enter a valid user ID, name, and email');
//     }

//     try {
//         window.userManager.updateUser(
//             idToUpdate,
//             updatedName,
//             updatedEmail
//         );
//     } catch (error) {
//         alert('Failed to update user');
//     }
// });



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
    
     
});


// updateTaskButton.addEventListener('click', (event) => {
//     event.preventDefault();

//     const idToUpdate = parseInt(taskId.value);
//     const updatedName = taskName.value; 

//     if (!idToUpdate || !updatedName) {
//         alert('Please enter a valid task ID and name');
//         return;
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





const assignTaskInput = document.getElementById('assignTask');
const assignUserInput = document.getElementById('assignUser');
const assignTaskButton = document.getElementById('assignTaskButton');
const assignmentList = document.getElementById('assignmentList');
const unassignTaskButton = document.getElementById('unassignTaskButton');
const getAssignments = document.getElementById('getAssignments');


function displayUnAssignments() {
    const getAssignments = document.getElementById('getAssignments');
    
    if (!window.taskManager || !window.userManager) {
        getAssignments.innerHTML = '<p>Task management system not initialized</p>';
        return;
    }

    const tasks = window.taskManager.getTasks();
    getAssignments.innerHTML = '<h2>Task Assignments</h2>';

    if (!tasks || tasks.length === 0) {
        getAssignments.innerHTML += '<p>No assignments found</p>';
        return;
    }

    const ul = document.createElement('ul');
    const users = window.userManager.getUsers();

    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.classList.add('assignmentList');

        const user = users.find(user => user.id === task.userId);
        
        li.innerHTML = `${task.task} - 'Unassigned'}`;      
        ul.appendChild(li);
    });

    getAssignments.appendChild(ul);
}
function displayAssignments() {
    const getAssignments = document.getElementById('getAssignments');
    
    if (!window.taskManager || !window.userManager) {
        getAssignments.innerHTML = '<p>Task management system not initialized</p>';
        return;
    }

    const tasks = window.taskManager.getTasks();
    getAssignments.innerHTML = '<h2>Task Assignments</h2>';

    if (!tasks || tasks.length === 0) {
        getAssignments.innerHTML += '<p>No assignments found</p>';
        return;
    }

    const ul = document.createElement('ul');
    const users = window.userManager.getUsers();

    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.classList.add('assignmentList');

        const user = users.find(user => user.id === task.userId);

        li.innerHTML = `Task: ${task.task} - Assigned to: ${task.userId} || }`;      
        ul.appendChild(li);
    });

    getAssignments.appendChild(ul);
}



assignTaskButton.addEventListener('click', (event) => {
    event.preventDefault();
    const taskId = parseInt(assignTaskInput.value);
    const userId = parseInt(assignUserInput.value);
    if (!taskId || !userId) {
        alert('Please enter valid task and user IDs');
        return;
    }
    
    try {
        window.taskManager.assignTask(taskId, userId);
        alert('Task assigned successfully');
    } catch (error) {
        alert('Failed to assign task: ' + error.message);
    }
    displayAssignments();
});

unassignTaskButton.addEventListener('click', (event) => { 
    event.preventDefault();
    const taskId = parseInt(assignTaskInput.value);
    const userId = parseInt(assignUserInput.value);
    if (!taskId || !userId) {
        alert('Please enter valid task and user IDs');
        return;
    }
    try {
        window.taskManager.unassignTask(taskId, userId);
        alert('Task unassigned successfully');
    } catch (error) {
        alert('Failed to unassign task: ' + error.message);
    }
    displayUnAssignments();
});