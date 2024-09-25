import Link from "next/link";

const Navbar = () => {
    return(
        <>
        <ul className="flex gap-3 bg-yellow-300 p-9">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
        </>
    )
}

export default Navbar;