class TodoManager {
    constructor() {
        this.tasks = [];
    }

    // Method to add tasks AND validate input
    addTask(description) {
        if (description && description.length > 3) {
            const task = {
                id: Math.random(),
                desc: description,
                completed: false
            };
            this.tasks.push(task);
            console.log(`DATABASE: Saving task '${description}'`);
            return true;
        } else {
            console.log("VALIDATION: Description is too short.");
            return false;
        }
    }

    // Method to print tasks to the console
    displayTasks() {
        console.log("--- TODO LIST ---");
        this.tasks.forEach(task => {
            if (!task.completed) {
                console.log(`[ ] ${task.desc}`);
            }
        });
    }

    // A separate method to print completed tasks
    displayCompletedTasks() {
        console.log("--- COMPLETED ---");
        this.tasks.forEach(task => {
            if (task.completed) {
                console.log(`[x] ${task.desc}`);
            }
        });
    }
}
