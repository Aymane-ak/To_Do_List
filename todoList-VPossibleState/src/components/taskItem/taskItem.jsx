import styles from "./taskItem.module.css";
import checkIcon from "../../assets/Check.svg";
import undoIcon from "../../assets/Undo.svg";
import trashIcon from "../../assets/Trash.svg";
import { possibleStates } from "../../hook/useTasks";

export const TaskItem = ({ task, displayId, deleteTask, toggleTask }) => {
  const isDone = task.state.value === possibleStates.DONE.value;

  return (
    <li className={`${styles.container} ${isDone ? styles.success : styles.default}`}>
      <div className={styles.item}>
        <div className={`${styles.id} ${isDone ? styles.idSuccess : styles.idDefault}`}>
          {displayId}
        </div>
        <div className={isDone ? styles.contentSuccess : styles.contentDefault}>
          {task.content}
        </div>
      </div>

      <div className={styles.actions}>
        <button
          className="button-primary"
          onClick={() => toggleTask(task.id)}
          title={isDone ? "Revenir en arrière" : "Terminer"}
        >
          <img src={isDone ? undoIcon : checkIcon} alt={isDone ? "Undo" : "Check"} width={16} height={16}/>
        </button>

        <button
          className="button-primary"
          onClick={() => deleteTask(task.id)}
          title="Supprimer"
        >
          <img src={trashIcon} alt="Trash" width={16} height={16}/>
        </button>
      </div>
    </li>
  );
};
