import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-[88px] bg-grey"></div>
      <div className="flex flex-wrap justify-between mt-[65px] px-[62px] sm:px-[62px]">
        <div className="mt-[50px] sm:mt-[100px] sm:w-[548px]">
          <h1 className="font-[inter] text-[44px] font-bold">
            Welcome To Our Website
          </h1>
          <p className="font-[inter] text-[32px] w-full sm:w-[571px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <button className="bg-black text-white w-full sm:w-[237px] p-3 font-inter font-normal text-[28px] leading-[34px] mt-4">
            Contact Us
          </button>
        </div>
        <div className="mt-[30px] w-full sm:w-auto flex justify-center sm:justify-end">
          <Image 
            src={'/hero-image.png'} 
            alt="hero image"
            width={502}
            height={465}
          />
        </div>
      </div>
    </>
  );
}
