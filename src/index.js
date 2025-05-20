var User = /** @class */ (function () {
    function User(name, id, email, task) {
        if (task === void 0) { task = []; }
        this.name = name;
        this.id = id;
        this.email = email;
        this.task = task;
    }
    return User;
}());
var task = /** @class */ (function () {
    function task(task, id, user) {
        this.task = task;
        this.id = id;
        this.user = user;
    }
    return task;
}());
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    UserManager.prototype.createUser = function (name, id, email) {
        var newUser = new User(name, id, email);
        this.users.push(newUser);
        console.log("User ".concat(name, " created successfully"));
        return newUser;
    };
    UserManager.prototype.updateUser = function (id, updateData) {
        var _a, _b;
        var userIndex = this.users.findIndex(function (user) { return user.id === id; });
        if (userIndex !== -1) {
            this.users[userIndex].name = (_a = updateData.name) !== null && _a !== void 0 ? _a : this.users[userIndex].name;
            this.users[userIndex].email = (_b = updateData.email) !== null && _b !== void 0 ? _b : this.users[userIndex].email;
            console.log("User ".concat(id, " updated successfully"));
        }
    };
    UserManager.prototype.deleteUser = function (id) {
        var userIndex = this.users.findIndex(function (user) { return user.id === id; });
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            console.log("User ".concat(id, " deleted successfully"));
        }
    };
    UserManager.prototype.getUsers = function () {
        return this.users;
    };
    return UserManager;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.createTask = function (taskName, id, user) {
        var newTask = new task(taskName, id, user);
        this.tasks.push(newTask);
        console.log("Task ".concat(taskName, " created successfully"));
        return newTask;
    };
    TaskManager.prototype.updateTask = function (id, updateData) {
        var _a;
        var taskIndex = this.tasks.findIndex(function (task) { return task.id === id; });
        if (taskIndex !== -1) {
            this.tasks[taskIndex].task = (_a = updateData.task) !== null && _a !== void 0 ? _a : this.tasks[taskIndex].task;
            console.log("Task ".concat(id, " updated successfully"));
        }
    };
    TaskManager.prototype.deleteTask = function (id) {
        var taskIndex = this.tasks.findIndex(function (task) { return task.id === id; });
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            console.log("Task ".concat(id, " deleted successfully"));
        }
    };
    TaskManager.prototype.getTasks = function () {
        return this.tasks;
    };
    TaskManager.prototype.assignTask = function (taskId, assignedUser) {
        var taskIndex = this.tasks.findIndex(function (task) { return task.id === taskId; });
        if (taskIndex !== -1) {
            this.tasks[taskIndex].user = assignedUser;
            console.log("Task ".concat(taskId, " assigned successfully"));
        }
    };
    TaskManager.prototype.unassignTask = function (taskId) {
        var taskIndex = this.tasks.findIndex(function (task) { return task.id === taskId; });
        if (taskIndex !== -1) {
            this.tasks[taskIndex].user = null;
            console.log("Task ".concat(taskId, " unassigned successfully"));
        }
    };
    return TaskManager;
}());
var userManager = new UserManager();
var user1 = userManager.createUser("John Doe", 1, "john@gmail.com");
var user2 = userManager.createUser("Jane Doe", 2, "jane@gmail.com");
var taskManager = new TaskManager();
var task1 = taskManager.createTask("Project A", 1, user1);
var task2 = taskManager.createTask("Project B", 2, user2);
console.log(userManager.getUsers());
console.log(taskManager.getTasks());
taskManager.assignTask(1, user2);
taskManager.unassignTask(2);
taskManager.updateTask(1, { task: "Project C" });
taskManager.deleteTask(2);
userManager.updateUser(1, { name: "John Doe", email: "john.doe@gmail.com" });
userManager.deleteUser(2);
