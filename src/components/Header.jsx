import React from "react";
import { Link} from "react-router-dom";


export default function Header() {
    return(
        <div className="col-span-2 row-span-3 bg-[#F1EFEC] p-6 rounded-lg border-4 border-black glex justify-between items-center flex">
            <h3 className=' font-bold text-3xl text-[#123458]'>MJA</h3>
            <nav>
            <a className="flex space-x-10 font-bold text-xl hover:text-[#123458] cursor-pointer ">Projects</a>
            </nav>
        </div>
    )
}