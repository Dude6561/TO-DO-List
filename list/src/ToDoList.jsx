import React, { useState } from "react";
export default function ToDoList() {
  const [tasks, setTasks] = useState(["ram", "hari"]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function addTask() {
    setTasks((t) => [...t, newTask]);
  }
  function deleteTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }
  function moveTaskUp(index) {}
  function moveTaskDown(index) {}
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Enter a Task...."
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">
                {task} <button onClick={() => deleteTask(index)}>Delete</button>
                <button onClick={() => moveTaskUp(index)} className="up">
                  Up
                </button>
                <button onClick={() => moveTaskDown(index)} className="down">
                  Down
                </button>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
