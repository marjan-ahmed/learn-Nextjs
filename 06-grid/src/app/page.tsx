import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="grid sm:text-lg lg:text-2xl text-white text-center text-sm  grid-rows-[100px_80px_100px_100px_100px_100px] gap-2 grid-cols-4">
      <div className="bg-blue-950 col-span-4 content-center">Box-1</div>
      <div className="bg-blue-950 row-span-4 content-center">Box-2</div>
      <div className="bg-blue-950 col-span-3 row-span-3 content-center">Box-3</div>
      <div className="bg-blue-950 col-span-2 content-center">Box-4</div>
      <div className="bg-blue-950 content-center">Box-5</div>
      <div className="bg-blue-950 col-span-4 content-center">Box-6</div>
    </div>
    </>
  );
}
