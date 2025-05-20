
interface Users {
    name: string;
    id: number;
    email: string;
    task: Tasks[];
    
}
interface Tasks{
    task: string;
    id: number;
    
}

class User implements Users {
    constructor(public name: string, public id: number, public email: string, public task: Tasks[] = []) {
         
    }
}


class task implements Tasks {
    constructor(public task: string, public id: number, public user: User) {
        
    }
}


class UserManager {
    users: User[] = [];


    createUser(name: string, id: number, email: string): User {
        const newUser = new User(name, id, email);
        this.users.push(newUser);
        console.log(`User ${name} created successfully`);
        return newUser;
    }

    updateUser(id: number, updateData: { name: string; email: string; }): void {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users[userIndex].name = updateData.name;
            this.users[userIndex].email = updateData.email;
            console.log(`User ${id} updated successfully`);
        }  }

    deleteUser(id: number, ): void {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            console.log(`User ${id} deleted successfully`);
        }
        
    }

    getUsers(): User[] {
        return this.users;
    }
}


class TaskManager{
    tasks: task[] = [];


    createTask(taskName: string, id: number, user: User): task {
        const newTask = new task(taskName, id, user);
        this.tasks.push(newTask);
        console.log(`Task ${taskName} created successfully`);
        return newTask;
    }


    updateTask(id: number, updateData: { task: string; }): void {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].task = updateData.task;
            console.log(`Task ${id} updated successfully`);
        }
    }

    deleteTask(id: number): void {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            console.log(`Task ${id} deleted successfully`);
        }
    }

    getTasks(): task[] {
        return this.tasks;
    }

    assignTask(taskId: number, assignedUser: User): void {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].user = assignedUser;
            console.log(`Task ${taskId} assigned successfully`);
        }
    }

    unassignTask(taskId: number): void   {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].user = null as any;
            console.log(`Task ${taskId} unassigned successfully`);
        }
    }


}


const userManager = new UserManager();


const user1 = userManager.createUser("John Doe", 1, "john@gmail.com");
const user2 = userManager.createUser("Jane Doe", 2, "jane@gmail.com");


const taskManager = new TaskManager();

const task1 = taskManager.createTask("Project A", 1, user1);
const task2 = taskManager.createTask("Project B", 2, user2);


console.log(userManager.getUsers());
console.log(taskManager.getTasks());

taskManager.assignTask(1, user2);
taskManager.unassignTask(2);
taskManager.updateTask(1, { task: "Project C" });
taskManager.deleteTask(2);
userManager.updateUser(1, { name: "John Doe", email: "john.doe@gmail.com" });
userManager.deleteUser(2);


