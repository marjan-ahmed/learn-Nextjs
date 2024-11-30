import Image from "next/image";



export default function App() {

    return(
    <>
    <div>
      <h1 className="flex flex-wrap justify-center font-extrabold text-4xl font-['poppins'] m-9 text-center">Be a <span className="text-mehroon display: block whitespace-break-spaces"> Youth Ambassador </span> and Say <span className="text-mehroon display: block whitespace-break-spaces"> YES </span> to 
      </h1>

      <h1 className="mt-[-30px] flex flex-wrap justify-center font-extrabold text-4xl font-['poppins'] m-9 text-center">
      Studying in the <span className="text-mehroon display: block whitespace-break-spaces"> United States!</span></h1>
      <p className="flex justify-center text-[18px] text-center font-['poppins']">The U.S. Department of State collaborates with American Councils for International Education and their <br /> partner in-country non-profit organizations to implement the YES Program, with participating students <br /> coming from 37 different countries.</p>
      
      <button className="flex justify-center bg-grey p-4 px-7 font-['poppins'] mx-auto mt-7 text-gray-50 rounded-2xl hover:bg-mehroon hover:px-8 transition ease delay-150">APPLY NOW</button>
      </div>

      <div className="flex justify-center align-middle gap-20 my-8">
      
      <Image className="object-cover my-[-40px]"
      src={"https://yesprogram.pk/frontend/images/Group%2036.png"}
      alt={"alt text"}
      height={200}
      width={230}
      />

<Image
      src={"https://yesprogram.pk/frontend/images/Group%2033.png"}
      alt={"alt text"}
      height={200}
      width={200}
      />

<Image
      src={"https://yesprogram.pk/frontend/images/Group%2034.png"}
      alt={"alt text"}
      height={200}
      width={200}
      />

<Image
      src={"https://yesprogram.pk/frontend/images/Group%2035.png"}
      alt={"alt text"}
      height={200}
      width={230}
      className="object-cover my-[-40px]"
      />

      </div>

      <div className="flex justify-center">
        <Image
          src={"https://yesprogram.pk/frontend/images/YES%2024-25%20Updated%20Logo%20Strip.png"}
          alt="usa"
          width={1100}
          height={1100}
          className="my-20"
        />
      </div>

      <div className="flex flex-row gap-7 justify-evenly">
        <h1 className="text-center flex justify-center text-3xl font-['poppins']">GOING STRONG AHEAD!</h1>
        <div className="w-[300px] h-[140px] rounded-3xl bg-mehroon px-2 mt-10 shadow-lg">
          <h1 className="text-5xl text-gray-50 font-['poppins'] flex justify-center py-6">1453</h1>
          <h1 className="mt-[-30px] text-gray-50 font-['poppins'] flex justify-center py-6">Total Number of Alumni</h1>
        </div>

        <div className="w-[300px] h-[140px] rounded-3xl bg-mehroon px-2 mt-10 shadow-lg">
          <h1 className="text-5xl text-gray-50 font-['poppins'] flex justify-center py-6">1453</h1>
          <h1 className="mt-[-30px] text-gray-50 font-['poppins'] flex justify-center py-6">Total Number of Alumni</h1>
        </div>

        <div className="w-[300px] h-[140px] rounded-3xl bg-mehroon px-2 mt-10 shadow-lg">
          <h1 className="text-5xl text-gray-50 font-['poppins'] flex justify-center py-6">1453</h1>
          <h1 className="mt-[-30px] text-gray-50 font-['poppins'] flex justify-center py-6">Total Number of Alumni</h1>
        </div>
      </div>
    </>
  )
}