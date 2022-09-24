const taskManager = new TaskManager();
const taskComplete = [];

dom("#addItem").addEventListener("click", () => {
    let taskContent = dom("#newTask").value;
    if (taskContent.length === 0) {
        alert("Chưa thêm task")
    } else if (taskContent.length !== 0) {
        const task = new Task(taskContent);
        taskManager.addTask(task);
        render("#todo");
    }
})

function deleteTask(taskID) {
    taskManager.deleteTask(taskID);
    render("#todo");
}

function checkedTask(taskID) {
    const task = taskManager.selectTask(taskID);
    taskComplete.push(task);
    taskManager.deleteTask(taskID);

    render("#todo");
    render("#completed", null);
}

function render(taskSelect, check = true) {
    let taskArr;
    let html = "";
    if (!check) {
        taskArr = taskComplete;
        html = taskArr.reduce((result, task, index) => {
            return result + 
            `
                <li data-id="${index}">
                    <span> ${task.content}</span> 
                    <div class="wrapper">
                        <i 
                        class="icon fa-solid fa-trash-can" onclick="deleteTask('${index}')"></i>
    
                        <span><i 
                        id="check"
                        class="icon fa-solid fa-circle-check" 
                        onclick="checkedTask('${index}')"></i></span>
                    </div>
                </li>
            `
        }, "");
    } else {
        taskArr = taskManager.getTaskList();
        html = taskArr.reduce((result, task, index) => {
            return result + 
            `
                <li data-id="${index}">
                    <p> ${task.content}</p> 
                    <div class="wrapper">
                        <i 
                        class="icon fa-solid fa-trash-can" onclick="deleteTask('${index}')"></i>
    
                        <i 
                        id="check"
                        class="icon fa-regular fa-circle-check" 
                        onclick="checkedTask('${index}')"></i>
                    </div>
                </li>
            `
        }, "");
    }
    dom(taskSelect).innerHTML = html;
}

// Helper function
function dom(selector) {
    return document.querySelector(selector);
}