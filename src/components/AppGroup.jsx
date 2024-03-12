// Importing the 'React' module and 'useState' hook from the 'react' library.
import React, { useState } from "react";
// Importing the 'uuid' function from the 'uuid' library.
import { v4 as uuidv4 } from "uuid";
// Importing the 'Form' and 'Task' components.
import Form from "./Form";
import Task from "./Task";
// Generating a unique identifier using 'uuid'.
uuidv4();

// Declaring a functional component named 'AppGroup'.
const AppGroup = () => {
  // State hook to manage the todoList array.
  const [todoList, setTodoList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Function to add a new task to the todoList.
  const addTask = (task) => {
    // Using the spread operator (...) to create a new array with the existing tasks and the new task.
    setTodoList([
      ...todoList,
      { id: uuidv4(), task: task, completed: false, isEditing: false },
    ]);
    console.log(todoList); // Logging the updated todoList to the console.
  };

  // Function to mark a task as completed or incomplete.
  const completeTask = (id) => {
    // Using the map function to create a new array with updated completion status for the selected task.
    setTodoList(
      todoList.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );

    setCompletedTasks(todoList);
  };

  // Function to delete a task from the todoList.
  const deleteTask = (id) => {
    // Using the filter function to create a new array without the task to be deleted.
    setTodoList(todoList.filter((task) => task.id !== id));
    setCompletedTasks(todoList);
  };

  // Rendering JSX elements representing the component's output.
  return (
    <div className="AppGroup">
      <h1>React Application!</h1>
      <Form addTask={addTask} /> {/* Rendering the 'Form' component. */}
      {/* Mapping through the todoList and rendering 'Task' components for each task. */}
      {todoList.map((task, index) => (
        <Task
          task={task}
          key={index}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
      <p className="total-tasks">Total Tasks: {todoList.length}</p>
    </div>
  );
};

// Exporting the 'AppGroup' component as the default export of this module.
export default AppGroup;
