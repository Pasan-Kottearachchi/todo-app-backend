import Task from '../models/Task';

class TaskManager {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  async addTask(name) {
    const task = new Task((this.nextId += 1), name);
    this.tasks.push(task);
    return task;
  }

  async getTasks(search = '') {
    return this.tasks.filter((task) => task.name.toLowerCase().includes(search.toLowerCase()));
  }

  async getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }

  async getRandomTask() {
    if (this.tasks.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * this.tasks.length);
    return this.tasks[randomIndex];
  }

  async updateTaskName(id, name) {
    const task = this.tasks.find((_task) => _task.id === id);
    if (!task) return null;
    await task._updateTaskName(name);
    return task;
  }

  async updateTaskStatus(id, status) {
    const task = this.tasks.find((_task) => _task.id === id);
    if (!task) return null;
    await task._updateStatus(status);
    return task;
  }

  async deleteTask(id) {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks.length < initialLength;
  }
}

export default TaskManager;
