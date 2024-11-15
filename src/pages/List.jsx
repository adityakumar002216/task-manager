import React from 'react';
import TaskItem from './TaskItem';

function List({ tasks, onDelete, onEdit }) {
  return (
    <div >
      <h2>Task List</h2>
      <div className='flex'>
        {tasks.length === 0 ? <p>No tasks found.</p> : 
          tasks.map((task) => (
            <div className="task-list">
            <TaskItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default List;
