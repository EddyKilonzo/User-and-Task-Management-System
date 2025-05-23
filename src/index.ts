interface Users {
    name: string;
    id: number;
    email: string;
    task: Tasks[];
    
}
interface Tasks{
    task: string;
    id: number;
    description?: string;
    
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
    userId: number = 1;

    createUser(name: string, userId: number, email: string): User {
        const newUser = new User(name, userId++, email);

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
        } 
     }

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
    taskId: number = 1;


    createTask(taskId: number, taskName: string, user: User): task {
        const newTask = new task(taskName, taskId, user);

        this.tasks.push(newTask);
        console.log(`Task ${taskName} created successfully`);
        return newTask;
    }


    updateTask(updateData: { task: string; id: number }): void {
        const taskIndex = this.tasks.findIndex(task => task.id === updateData.id);

        if (taskIndex !== -1) {
            this.tasks[taskIndex].task = updateData.task;
            console.log(`Task ${updateData.task} updated successfully`);
        } else {
            console.log(`Task with ID ${updateData.id} not found`);
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

    assignTask(taskId: number, userId: User): void {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);

        if (taskIndex !== -1 && userId) {
            this.tasks[taskIndex].user = userId;
            console.log(`Task ${taskId} assigned successfully to user ${userId}`);
        }
    }

    unassignTask(taskId: number): void {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);

        if (taskIndex !== -1) {
            this.tasks[taskIndex].user = null as any;
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



