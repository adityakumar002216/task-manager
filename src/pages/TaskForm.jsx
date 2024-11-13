import React, { useState } from 'react';

function TaskForm({ addTask, editTask, taskToEdit }) {
  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');
  const [dueDate, setDueDate] = useState(taskToEdit ? taskToEdit.dueDate : '');
  const [priority, setPriority] = useState(taskToEdit ? taskToEdit.priority : 'Medium');
  const [status, setStatus] = useState(taskToEdit ? taskToEdit.status : 'upcoming');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title,
      description,
      dueDate,
      priority,
      status
    };
    
    if (taskToEdit) {
      editTask(newTask);
    } else {
      addTask(newTask);
    }
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Medium');
    setStatus('upcoming');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="upcoming">Upcoming</option>
        <option value="overdue">Overdue</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">{taskToEdit ? 'Edit Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;
