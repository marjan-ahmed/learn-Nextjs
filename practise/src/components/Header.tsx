import Link from "next/link";
import next from "next";
import { useState } from "react";

export function Header() {
    async function getData() {
        const data = await fetch("https://simple-books-api.glitch.me");
        console.log(data)
    }
    const response = "majan";
    console.log(response.toString)
    const [print, setPrint] = useState<string>("")
 return(
    <div>
        <ul className="bg-primary flex justify-end p-7 text-white gap-9">
            <div>
                <h1 className="text-2xl font-[roboto] font-bold text-skyblue-500">Tuition Free Education Program on Latest Technologies</h1>
            </div>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/apply'}>Apply</Link></li>
            <li><Link href={'/jobs'}>Jobs</Link></li>
            <li><Link href={'/result'}>Result</Link></li>
            <li><Link href={'/courses'}>Courses</Link></li>
            <h1></h1>
        </ul>
    </div>
    )
}