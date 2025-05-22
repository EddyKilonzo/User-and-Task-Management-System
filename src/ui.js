
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
            li.innerHTML = `${user.id}. ${user.name} - ${user.email}`;
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
