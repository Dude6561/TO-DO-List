import React, { useState } from "react";
export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function addTask() {
    if (newTask != "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }
  return (
    <div className="to-do-list">
      <div className="box">
        <div className="center">
          <h1>To-Do-List</h1>
          <input
            type="text"
            value={newTask}
            placeholder="Enter a Task...."
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            +
          </button>
          <ol>
            {tasks.map((task, index) => (
              <li key={index}>
                <span className="text">
                  {task}{" "}
                  <button onClick={() => deleteTask(index)}>Delete</button>
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
    </div>
  );
}
