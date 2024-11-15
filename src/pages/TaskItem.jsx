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
    <div className="itemshow">
      <div>
      <h3>Title : {title}</h3>
      <h4>Description : {description} </h4>
      <p>Due: {new Date(dueDate).toLocaleDateString()}</p>
      <p>Priority: {priority}</p>
      <p>Status: {status}</p>
      <div className="ED">
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      </div>
      </div>
    </div>
  );
}

export default TaskItem;
