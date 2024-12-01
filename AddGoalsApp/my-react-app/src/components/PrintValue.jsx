export default function PrintValue({ value }) {
  console.log(value);
  return (
    <div className="mt-10">
      <div className="bg-orange-400 shadow-orange-400/50  m-auto h-36 w-1/2 rounded-xl flex justify-center items-center ">
        {value}
      </div>
    </div>
  );
}
