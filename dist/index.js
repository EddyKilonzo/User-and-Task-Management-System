"use strict";
class User {
    constructor(name, id, email, task = []) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.task = task;
    }
}
class task {
    constructor(task, id, user) {
        this.task = task;
        this.id = id;
        this.user = user;
    }
}
class UserManager {
    constructor() {
        this.users = [];
        this.userId = 1;
    }
    createUser(name, userId, email) {
        const newUser = new User(name, userId++, email);
        this.users.push(newUser);
        console.log(`User ${name} created successfully`);
        return newUser;
    }
    updateUser(id, updateData) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users[userIndex].name = updateData.name;
            this.users[userIndex].email = updateData.email;
            console.log(`User ${id} updated successfully`);
        }
    }
    deleteUser(id) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            console.log(`User ${id} deleted successfully`);
        }
    }
    getUsers() {
        return this.users;
    }
}
class TaskManager {
    constructor() {
        this.tasks = [];
        this.taskId = 1;
    }
    createTask(taskId, taskName, user) {
        const newTask = new task(taskName, taskId, user);
        this.tasks.push(newTask);
        console.log(`Task ${taskName} created successfully`);
        return newTask;
    }
    updateTask(updateData) {
        const taskIndex = this.tasks.findIndex(task => task.id === updateData.id);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].task = updateData.task;
            console.log(`Task ${updateData.task} updated successfully`);
        }
        else {
            console.log(`Task with ID ${updateData.id} not found`);
        }
    }
    deleteTask(id) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            console.log(`Task ${id} deleted successfully`);
        }
    }
    getTasks() {
        return this.tasks;
    }
    assignTask(taskId, userId) {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1 && userId) {
            this.tasks[taskIndex].user = userId;
            console.log(`Task ${taskId} assigned successfully to user ${userId}`);
        }
    }
    unassignTask(taskId) {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].user = null;
            console.log(`Task ${taskId} unassigned successfully`);
        }
    }
}
const userManager = new UserManager();
// const user1 = userManager.createUser("Ben", 1, "ben@gmail.com");
// const user2 = userManager.createUser("Florence", 2, "florence@gmail.com");
const taskManager = new TaskManager();
// const task1 = taskManager.createTask("task 1", 1, user1);
// const task2 = taskManager.createTask("task 2", 2, user2);
// taskManager.assignTask(1, user1);
// taskManager.unassignTask(2, user2);
// taskManager.updateTask(1, { task: "task 1 updated" });
// taskManager.deleteTask(2);
// console.log(taskManager.getTasks());
// userManager.createUser("Ben", 1, "ben@gmail.com");
// userManager.updateUser(1, { name: "James", email: "james@gmail.com" });
// userManager.deleteUser(2);
// console.log(userManager.getUsers());
window.userManager = userManager;
window.taskManager = taskManager;
