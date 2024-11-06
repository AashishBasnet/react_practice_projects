import Button from "./Button.jsx";
export default function SideSection() {
  return (
    <aside className="mt-5 rounded-tr-2xl bg-zinc-900 px-8 py-16 text-gray-300 md:w-72 w-1/4  ">
      <h2 className=" mb-8 md:text-xl text-3xl font-mono font-extrabold">
        YOUR PROJECTS
      </h2>
      <div>
        <Button>+Add Projects</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
