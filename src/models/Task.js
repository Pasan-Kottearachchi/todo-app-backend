class Task {
  constructor(id, name, status = 'in_progress', created = new Date(), modified = new Date()) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.createdAt = created;
    this.modifiedAt = modified;
  }

  async _updateStatus(status) {
    this.status = status;
    this.modifiedAt = new Date();
  }

  async _updateTaskName(name) {
    this.name = name;
    this.modifiedAt = new Date();
  }
}

export default Task;
