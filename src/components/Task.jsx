// Importing the 'React' module and specific icons from the 'react-icons/fa' library.
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

// Declaring a functional component named 'Task'.
const Task = ({ task, completeTask, deleteTask, editTask }) => {
  // Rendering JSX elements representing the component's output.
  return (
    <div className="task-group">
      <div className="Task">
        {/* Displaying the task text and applying a 'completed' class if the task is completed. */}
        <p className={`${task.completed ? "completed" : ""}`}>
          {task.completed && <FaRegCheckCircle className="check-icon" />}
          {task.task}
        </p>

        {/* Container for icons, allowing users to edit or delete the task. */}
        <div className="icon-group">
          {/* Edit icon using 'FaRegEdit' from 'react-icons/fa' */}
          <FaRegEdit className="icon" onClick={() => editTask(task.id)} />
          {/* Delete icon using 'FaRegTrashAlt' from 'react-icons/fa', triggering 'deleteTask' on click. */}
          <FaRegTrashAlt className="icon" onClick={() => deleteTask(task.id)} />
        </div>
      </div>
      {/* Button to mark the task as complete, triggering 'completeTask' on click. */}

      {!task.completed ? (
        <button onClick={() => completeTask(task.id)} className="complete-btn">
          Mark Complete
        </button>
      ) : (
        <button onClick={() => completeTask(task.id)} className="complete-btn">
          Undo
        </button>
      )}
    </div>
  );
};

// Exporting the 'Task' component as the default export of this module.
export default Task;
