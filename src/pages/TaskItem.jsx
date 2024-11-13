import React from 'react';

function TaskItem({ task, onDelete, onEdit }) {
  const { title, description, dueDate, priority, status, id } = task;

  const handleEdit = () => {
    onEdit(task); // Send the task to be edited
  };

  const handleDelete = () => {
    onDelete(id); // Delete the task
  };

  return (
    <div className={`task ${status}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Due: {new Date(dueDate).toLocaleDateString()}</p>
      <p>Priority: {priority}</p>
      <p>Status: {status}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskItem;
