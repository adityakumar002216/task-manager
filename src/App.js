import React, { useState, useEffect } from 'react';
import './App.css'
import TaskForm from './pages/TaskForm';
import List from './pages/List';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ priority: 'all', status: 'all' });

  // Retrieve tasks from localStorage
  const getTasksFromLocalStorage = () => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  };

  const [tasks, setTasks] = useState(getTasksFromLocalStorage);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    // Store tasks to localStorage whenever they change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const editTask = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    
    setTasks(updatedTasks);
    setTaskToEdit(null); // Clear the taskToEdit state after editing
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPriority = filter.priority === 'all' || task.priority === filter.priority;
    const matchesStatus = filter.status === 'all' || task.status === filter.status;
    return matchesSearch && matchesPriority && matchesStatus;
  });

  const handleEdit = (task) => {
   <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} data={task}/>
    setTaskToEdit(task);
    
  };

  return (
    <Router>
      <div className="App">
        
        <h1>Task Dashboard</h1>
        
        {/* Search and Filter */}
        <div className='header'>
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            onChange={(e) => setFilter((prev) => ({ ...prev, priority: e.target.value }))} 
            value={filter.priority}
          >
            <option value="all">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <select
            onChange={(e) => setFilter((prev) => ({ ...prev, status: e.target.value }))} 
            value={filter.status}
          >
            <option value="all">All Statuses</option>
            <option value="upcoming">Upcoming</option>
            <option value="overdue">Overdue</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        
        {/* Task Form */}
        <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} data={taskToEdit} />

        {/* Dashboard */}
        <Routes>
          <Route
            path="/"
            element={<List tasks={filteredTasks} onDelete={deleteTask} onEdit={handleEdit} />}
          />
        </Routes>
        
      </div>
      
    </Router>
  );
}

export default App;
