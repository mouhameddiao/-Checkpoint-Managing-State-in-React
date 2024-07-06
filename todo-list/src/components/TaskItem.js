import React from 'react';

function TaskItem({ task, deleteTask, updateTask }) {
  const handleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.name}</span>
      <div>
        <button className="complete-button" onClick={handleComplete}>
          <i className={`fas ${task.completed ? 'fa-undo' : 'fa-check'}`}></i>
        </button>
        <button className="edit-button">
          <i className="fas fa-edit"></i>
        </button>
        <button onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
