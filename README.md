
# Task Manager API

This is a Node.js and Express application for managing tasks in memory. The API allows you to add, update, delete, and retrieve tasks, with functionality to mark tasks as complete or in progress.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Development Notes](#development-notes)

## Features

- Add new tasks
- Retrieve a list of tasks with search functionality
- Update task name
- Mark tasks as complete or in progress
- Delete tasks
- Fetch a random task

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: You need to have Node.js version `16.20.2` or later installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node.js comes with npm, the Node package manager, which you’ll need to install dependencies.
- **Git**: You’ll need Git to clone the repository. Download it from [git-scm.com](https://git-scm.com/).

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**:

   ```
   git clone https://github.com/Pasan-Kottearachchi/todo-app-backend.git
   ```


2.  **Navigate to the Project Directory**:

    ```
    cd todo-app-backend
    ```


3.  **Install Dependencies**:

    ```
    npm install
    ```


## Running the Server

To start the server, follow these steps:

1.  **Run the Server**:

    `npm run start:dev`


2.  **Access the API**: The server will start on `http://localhost:8848` by default.


## API Endpoints

Here are the available API endpoints and their functionality:

-   **Get All Tasks**: Retrieve a list of all tasks.

    ```
    GET /api/tasks
    ```

-   **Add New Task**: Add a new task with a specified name.
    ```
    POST /api/tasks
    Body: { "name": "New Task Name" }
    ```



-   **Update Task Name**: Update the name of an existing task.
    ```
    PUT /api/tasks/:id
    Body: { "name": "Updated Task Name" }
    ```

-   **Update Task Status**: Mark a task as complete or in progress.

    ```
    PATCH /api/tasks/:id/status
    Body: { "status": "complete" | "in_progress" }
    ```

-   **Delete Task**: Remove a task from the list.

    ```
    DELETE /api/tasks/:id
    ```


-   **Get Random Task**: Fetch a random task from the list.

    ```
    GET /api/tasks/random
    ```


## Development Notes

-   The application stores tasks in memory, so all tasks will be lost when the server restarts.
-   Initial tasks are created on server startup for testing purposes.
-   Validation is performed using [Joi](https://joi.dev/) to ensure request integrity.
