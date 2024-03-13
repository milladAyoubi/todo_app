import React, { useState } from "react";

const EditTaskForm = ({ editTask, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTask(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="task-input"
        placeholder="Update task"
      />
      <button type="submit" className="add-btn">
        Update
      </button>
    </form>
  );
};

export default EditTaskForm;
