import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [task, setTask] = useState("Hello");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task != "") {
      addTask(task);
      setTask("");
    } else {
      alert("Task not entered!");
    }
  };

  return (
    <form className="AppForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter Your Task!"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="add-btn">
        Add Task
      </button>

      <div>{task}</div>
    </form>
  );
};

export default Form;
