import { h1 } from "framer-motion/client"
import Image from "next/image"
import Link from "next/link"

export default function Apple() {

    return(
        <>
    <h1 className="font-[poppins] text-center my-7 text-xl "><Link href={'./'}>Products</Link>/Orange</h1>
    <div className="flex">
    <div className="m-14">
    <Image 
    src={'data:image/jpeg;base64,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'}
    alt="aaple image"
    width={400}
    height={400}
    />   
    <h1 className="font-[poppins] text-2xl">Apple 150g</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Illum ad veritatis ducimus id officia itaque tempore iste<br /> nostrum, ex magnam.</p>

    </div>
        
    <div className="w-7/12 p-4 bg-gray-300">
        <h1 className="text-2xl font-[poppins]">Afghani Apple 1 kilo</h1>
        <p className="font-[poppins] py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita obcaecati et, assumenda ducimus totam recusandae rerum sint mollitia dolorem, ullam tenetur dignissimos blanditiis nisi ipsum doloremque? Tempore, voluptates similique? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolorum rem, fugit suscipit saepe natus nihil iure harum error laudantium, officiis reprehenderit repudiandae at facilis odio quos perferendis! Eum ipsam error laborum est omnis impedit aspernatur numquam similique magni dolores.</p>
        <h1 className="font-[poppins] text-2xl">Rs 125</h1>
        <input type="text" className="p-2 mt-5" placeholder="How many?"/>
        
        <div className="my-10">
        <button className="p-4 font-[poppins] bg-grey text-white">Add to Cart</button>
        <button className="p-4 mx-6 font-[poppins] bg-grey text-white">Buy Now</button>
        </div>
    </div>

    </div>
    </>
  )
}