import { TaskItem } from "../taskItem/taskItem";
import styles from "./taskList.module.css";

export const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <div className="box">
      <h2 className={styles.title}>
        Il reste {tasks.filter((t) => !t.done).length} tâches à traiter
      </h2>
      <ul className={styles.container}>
        {tasks.map((task, index) => (
          <TaskItem
            key={task.id}          
            task={task}
            displayId={index + 1}  // ID affiché pour l’utilisateur
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))}
      </ul>
    </div>
  );
};
