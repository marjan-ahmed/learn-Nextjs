import next from "next";
import Link from "next/link";
import Image from "next/image";

function Footer() {
    return(
        <>
        <div className="relative mt-20 gap-20 flex flex-row font-['poppins'] bg-mehroon text-gray-50 py-[70px] px-20">
        <div>
        <Image 
        src={"https://yesprogram.pk/frontend/images/footer.png"}
        alt="logo"
        width={150}
        height={150}
        />
        <p>Empower individuals and communities to think, <br />
learn, share and grow for a better world by creating <br />
innovative opportunities</p>
        <Link href={"/about"} className="underline">Learn More</Link>
        </div>
        <div>
            <h1 className="text-2xl text-white font-extrabold underline">INFORMATION</h1>
            <ul className="my-4 leading-7">
                <li>Program Intro</li>
                <li>Eligibility Criteria</li>
                <li>Age Calculator</li>
                <li>Application & Selection Process</li>
                <li>Parent Student Agreement</li>
                <li>FAQ's</li>
            </ul>
        </div>

        <div>
            <h1 className="text-2xl text-white font-extrabold underline ">CONTACT INFORMATION</h1>
            <p className="my-4">Society for International <br /> Educational <br /> 
88-H, P.E.C.H.S. Block-6, <br />
Karachi.</p>
        <h1 className="my-[-5px]">Tel: 0333-2929960</h1>
        <h1>Email: info@yesprogram.pk</h1>
        </div>
        <div className="absolute left-[530px] bottom-2">
        <h1>Copyright © 2024 All rights reserved</h1>
        </div>
        </div>
        </>
    )
}

export default Footer;