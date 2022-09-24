class TaskManager {
  constructor() {
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
  }

  selectTask(taskID) {
    return this.taskList.find((task, index) => {
      return index === +taskID;
    });
  }

  getTaskList() {
    return this.taskList;
  }

  deleteTask(taskID) {
    const index = this.taskList.findIndex((task, index) => {
      return index === +taskID;
    });

    if (index !== -1) {
      this.taskList.splice(index, 1);
    }
  }
}
