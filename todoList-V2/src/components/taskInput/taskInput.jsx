import { useState } from "react";
import styles from "./taskInput.module.css";

export const TaskInput = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTask(value);
      setValue("");
    }
  };

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajouter une nouvelle tâche</h2>
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.input}
          placeholder="Ajouter une nouvelle tâche"
        />
        <button className="button-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};
