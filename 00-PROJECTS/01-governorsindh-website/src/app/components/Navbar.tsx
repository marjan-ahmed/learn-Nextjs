import Image from "next/image";

const Navbar = () => {
  return (
    <>
    <div className="flex bg-blue-950 gap-5 relative">
        {/* <ul>
            <Image 
            className="absolute top-2"
            src={'https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png'}
            alt="Logo"
            width={90}
            height={90}
            />
        </ul>
        <h1 className="text-sky-400 font-[roboto] text-2xl font-bold">Tuition Free Education Program on Latest Technologies</h1>*/}
        <div className="flex "> 
        <ul className="flex gap-10 text-white p-7">
            <li>Home</li>
            <li>Apply</li>
            <li>Jobs</li>
            <li>Result</li>
            <li>Courses</li>
        </ul>
    </div>
    </div>

    <div className="mt-24 ml-8">
        <h1 className="font-[poppins] text-blue-95 leading-[40px] text-[32px] font-extrabold lg:text-[65px]">Governor Sindh</h1>
        <h1 className="font-[poppins] text-[40px] ">Kamran Khan Tessori</h1>
        <h1 className="font-[poppins] text-[40px] leading-2 font-extrabold text-sky-500]">Certified Cloud <br />
Applied Generative AI <br />
Engineer (GenEng)</h1>
<h1>Earn up to $5,000 / month</h1>
            <h1>Now admissions are open in Hyderabad</h1>
            <button className="uppercase w-[15vw] text-white font-[roboto] rounded-md h-12 bg-blue-800">Apply Now</button>
    </div>
    </>
  );
}

export default Navbar;