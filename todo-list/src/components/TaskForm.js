import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      addTask({
        id: Date.now(),
        name,
        description,
        completed: false
      });
      setName('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Nom de la tâche"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea 
        placeholder="Description de la tâche "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Ajouter une tâche</button>
    </form>
  );
}

export default TaskForm;
