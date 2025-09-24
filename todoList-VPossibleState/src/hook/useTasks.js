import { useState } from "react";

// Définition des états possibles d'une tâche
export const possibleStates = Object.freeze({
  PENDING: {
    value: 0,
    enabling: { TO_DONE: true, TO_PENDING: false, REMOVE: true },
  },
  DONE: {
    value: 1,
    enabling: { TO_DONE: false, TO_PENDING: true, REMOVE: true },
  },
});

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(1);

  // Ajouter une tâche
  const addTask = (content) => {
    const newTask = {
      id: counter,
      content,
      state: possibleStates.PENDING,
    };
    setTasks([...tasks, newTask]);
    setCounter(counter + 1);
  };

  // Supprimer une tâche
  const deleteTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    if (task?.state.enabling.REMOVE) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  // Changer l’état (PENDING / DONE)
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          if (task.state.enabling.TO_DONE) return { ...task, state: possibleStates.DONE };
          if (task.state.enabling.TO_PENDING) return { ...task, state: possibleStates.PENDING };
        }
        return task;
      })
    );
  };

  return { tasks, addTask, deleteTask, toggleTask };
};
