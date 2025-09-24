import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";
import { Footer } from "./footer/footer";
import { useTasks } from "../hook/useTasks";

export const TaskContainer = () => {
  const { tasks, addTask, deleteTask, toggleTask } = useTasks();

  return (
    <main style={{ backgroundColor: "#000", minHeight: "100vh", padding: "20px" }}>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
      <Footer total={tasks.length} />
    </main>
  );
};
