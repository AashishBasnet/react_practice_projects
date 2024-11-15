import NewTasks from "./NewTasks.jsx";
export default function Task() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTasks />
      <p className="text-stone-800 mb-4">
        This Project doesn't have any tasks.
      </p>
      <ul></ul>
    </section>
  );
}
