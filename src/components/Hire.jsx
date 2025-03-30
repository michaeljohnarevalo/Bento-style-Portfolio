import React from "react";
import hireImg from "../assets/pls.gif";



export default function Hire(){
    return(
        <div className="flex justify-center items-center h-33 w-full py-1 pt-7   md:w-auto ">
            <img src={hireImg} alt="hire" className='h-40 w-full md:w-85 border-1 border-black rounded-lg' />
        </div>
    )
}