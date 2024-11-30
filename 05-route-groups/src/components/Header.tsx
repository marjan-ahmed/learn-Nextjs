"use client";
import next from "next";
import Image from "next/image";
import { usePathname } from 'next/navigation'; // Use from next/navigation
import Link from "next/link";

function Header() {
  const pathname = usePathname();

    return(
      <div>
      <div className="bg-mehroon p-4 mx-0 sm:text-sm">
        <h1 className="flex justify-center text-white font-['Poppins'] text-xl sm:text-2xl">YES 2025-26 Application is Coming Soon!</h1>
      </div>

      <div className="p-2 bg-gray-200 flex flex-col sm:flex-row items-center">
        <Image
          className="mx-auto sm:mx-0"
          src={'https://yesprogram.pk/frontend/images/YES%20Logo%20Updated.png'}
          alt={'this is alt'}
          width={100}
          height={100}
        />
        <h1 className="font-['Poppins'] text-mehroon font-semibold text-center sm:text-left text-[16px] sm:text-[20px] my-2 sm:my-5 sm:ml-4">
          ONE-YEAR EXCHANGE PROGRAM FOR <br />
          HIGH SCHOOL STUDENTS
        </h1>
      </div>

      <div>
        <nav> 
        <ul className="shadow-xl bg-gray-800 text-gray-100 flex flex-col sm:flex-row justify-center p-2 gap-2 sm:gap-20 text-[14px] font-['Poppins']">
          <li className={`hover:text-yellow-500 ${pathname === "/" ? 'text-yellow-500' : ''}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`hover:text-yellow-500 ${pathname === "/yesprogram" ? 'text-yellow-500' : ''}`}>
            <Link href="/yesprogram">YES Program</Link>
          </li>
          <li className={`hover:text-yellow-500 ${pathname === "/media" ? 'text-yellow-500' : ''}`}>
            <Link href="/media">Media</Link>
          </li>
          <li className={`hover:text-yellow-500 ${pathname === "/products" ? 'text-yellow-500' : ''}`}>
            <Link href="/products">Products</Link>
          </li>
          <li className={`hover:text-yellow-500 ${pathname === "/about" ? 'text-yellow-500' : ''}`}>
            <Link href="/about">About Us</Link>
          </li>
          <li className={`hover:text-yellow-500 ${pathname === "/contact" ? 'text-yellow-500' : ''}`}>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
        </nav>
      </div>
    </div>
    )
}

export default Header;