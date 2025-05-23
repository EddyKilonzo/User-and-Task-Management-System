import { UserManager } from './index.ts';
import { TaskManager } from './index.ts';

declare global {
    interface Window {
        userManager: UserManager;
        taskManager: TaskManager;
    }
}