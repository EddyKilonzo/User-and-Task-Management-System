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
    }
    createUser(name, id, email) {
        const newUser = new User(name, id, email);
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
    }
    createTask(taskName, id, user) {
        const newTask = new task(taskName, id, user);
        this.tasks.push(newTask);
        console.log(`Task ${taskName} created successfully`);
        return newTask;
    }
    updateTask(id, updateData) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].task = updateData.task;
            console.log(`Task ${id} updated successfully`);
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
    assignTask(taskId, assignedUser) {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].user = assignedUser;
            console.log(`Task ${taskId} assigned successfully to ${assignedUser.name}`);
        }
    }
    unassignTask(taskId, assignedUser) {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].user = null;
            console.log(`Task ${taskId} unassigned successfully from ${assignedUser.name}`);
            ``;
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
