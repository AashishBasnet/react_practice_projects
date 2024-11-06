export default function Button({ children, ...props }) {
  return (
    <button
      className=" px-4 py-2 text-xs md:text-base rounded-md text-gray-400  mt-5  bg-zinc-800 hover:bg-zinc-600 "
      {...props}
    >
      {children}
    </button>
  );
}
