import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="col-span-2 row-span-3 bg-[#F1EFEC] p-6 rounded-lg border-4 border-black flex flex-row justify-between items-center w-full">
      <h3 className='font-bold text-3xl text-[#123458]'>MJA</h3>
      <nav>
        <a className="font-bold text-xl hover:text-[#123458] cursor-pointer">
          Projects
        </a>
      </nav>
    </div>
  )
}