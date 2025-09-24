import { useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(1); // compteur ID unique

  // Ajouter une tâche
  const addTask = (content) => {
    const newTask = { id: counter, content, done: false };
    setTasks([...tasks, newTask]);
    setCounter(counter + 1);
  };

  // Supprimer une tâche
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Marquer comme terminé / revenir en arrière
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
  };
};
