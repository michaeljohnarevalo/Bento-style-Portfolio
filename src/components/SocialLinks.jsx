import React from "react";
import { 
    FaGithub, 
    FaLinkedin, 
  } from 'react-icons/fa';


export default function SocialLinks(){
    const links = [
        {
            name:"Github",
            url:"#",
            icon: <FaGithub className="text-xl hover:scale-110 transition-transform" /> 
        },
        {
            name:"LinkedIn",
            url:"#",
            icon: <FaLinkedin className="text-xl hover:scale-110 transition-transform" /> 
        }
    ];
    
    return (
        <div className="col-span-1 row-span-1 bg-[#F1EFEC] p-3 rounded-lg border-2 border-black flex items-center justify-center">
            <div className="flex space-x-15">
                {links.map((link, index) =>(
                    <a
                     key={index}
                     href={link.url}
                    title={link.name}
                    className="hover:text-[#030303] transition-colors text-[#123458] "
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    )
}