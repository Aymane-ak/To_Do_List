import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/TaskList";
import { useTasks } from "../hook/useTasks";

export const TaskContainer = () => {
  const { tasks, addTask, deleteTask, toggleTask } = useTasks();

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
      <Footer total={tasks.length} />
    </main>
  );
};
