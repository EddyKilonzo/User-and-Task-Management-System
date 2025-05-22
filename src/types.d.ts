import { UserManager } from './index';
import { TaskManager } from './index';

declare global {
    interface Window {
        userManager: UserManager;
        taskManager: TaskManager;
    }
}