import React from 'react';

function TaskItem({ task, onDelete, onEdit }) {
  let { title, description, dueDate, priority, status, id } = task;

  const handleEdit = () => {
    onEdit(task); // 
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
      <button onClick={handleEdit} className='editB'>Edit</button>
      <button onClick={handleDelete} className='deleteB'>Delete</button>
      </div>
      </div>
    </div>
  );
}

export default TaskItem;
