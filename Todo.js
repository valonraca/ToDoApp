// A single class that has grown to handle too many things.
class TodoManager {
    constructor() {
        this.tasks = [];
        this.storage = new LocalStorageHandler(); 
    }

    addTask(description, type = 'simple') {
        let task = { id: Date.now(), desc: description, completed: false };

        if (type === 'urgent') {
            task.priority = 'high';
            task.desc = `[URGENT] ${description}`;
        } else {
            task.priority = 'normal';
        }

        this.tasks.push(task);
        this.storage.save(this.tasks);
        this.renderTasks(); 
        return true;
    }

    renderTasks() {
        const container = document.getElementById('task-container');
        if (!container) return;

        let html = '<ul>';
        this.tasks.forEach(task => {
            const style = task.completed ? 'text-decoration: line-through;' : '';
            html += `<li style="${style}">${task.desc}</li>`;
        });
        html += '</ul>';

        container.innerHTML = html;
    }
}

class LocalStorageHandler {
    save(data) {
        console.log("SAVING to Local Storage:", data);
    }
}
