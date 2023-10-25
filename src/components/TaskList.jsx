import Task from "./Task";

export default function TaskList({ lista }) {
  return (
    <>
      {lista.map((tsk) => (
        <Task  taskName={tsk.name} completar={tsk.complete}/>
      ))}
    </>
  );
}
