import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex justify-between text-white bg-blue-800 p-4">
      <div className="font-[jost] text-2xl font-bold">Logo</div>
      <div className="">
        <ul className="hidden md:flex gap-10 font-[jost]">
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/'}>Dashboard</Link></li>
          <li><Link href={'/'}>Projects</Link></li>
          <li><Link href={'/'}>About</Link></li>
          <li><Link href={'/'}>Settings</Link></li>
        </ul>
        {/* By using ShadCN UI component */}
        <Sheet> 
          <SheetTrigger className="md:hidden">
            <Menu/>
          </SheetTrigger>
          <SheetContent>
          <ul className="flex flex-col gap-5 list-none font-[jost]">
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/'}>Dashboard</Link></li>
          <li><Link href={'/'}>Projects</Link></li>
          <li><Link href={'/'}>About</Link></li>
          <li><Link href={'/'}>Settings</Link></li>
        </ul>
          </SheetContent>
        </Sheet>
      </div>

    </div>
  ) 
}