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
    this.taskList = this.taskList.filter((task, index) => {
      return index !== +taskID;
    })
  }
}
