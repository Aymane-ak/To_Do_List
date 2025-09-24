import styles from "./taskItem.module.css";
import checkIcon from "../../assets/Check.svg";
import trashIcon from "../../assets/Trash.svg";
import undoIcon from "../../assets/Undo.svg";

export const TaskItem = ({ task, displayId, deleteTask, toggleTask }) => {
  return (
    <li className={`${styles.container} ${task.done ? styles.success : styles.default}`}>
      <div className={styles.item}>
        <div className={`${styles.id} ${task.done ? styles.idSuccess : styles.idDefault}`}>
          {displayId}
        </div>
        <div className={task.done ? styles.contentSuccess : styles.contentDefault}>
          {task.content}
        </div>
      </div>

      <div className={styles.actions}>
        <button
          className="button-primary"
          onClick={() => toggleTask(task.id)}
          title={task.done ? "Revenir en arrière" : "Terminer"}
        >
          <img
            src={task.done ? undoIcon : checkIcon}
            alt={task.done ? "Undo" : "Check"}
            width={16}
            height={16}
          />
        </button>

        <button
          className="button-primary"
          onClick={() => deleteTask(task.id)}
          title="Supprimer"
        >
          <img src={trashIcon} alt="Trash" width={16} height={16} />
        </button>
      </div>
    </li>
  );
};
