import React from "react";

export default function TechStack(){
    return(
        <div className="border-2 border-black p-8 h-55 rounded-lg bg-[#F1EFEC]">
            <h2 className="text-xl font-bold mb-10 text-[#123458]">LANGUAGES</h2>
            <div className="grid grid-cols-3 gap-7 mb-5">
                <span className="border border-black p-1 text-xs text-center  text-[#F1EFEC] bg-[#123458]" >
                    HTML
                </span>
                <span className="border border-black p-1 text-xs text-center text-[#F1EFEC] bg-[#123458]" >
                    JAVASCRIPT
                </span>
                <span className="border border-black p-1 text-xs text-center text-[#F1EFEC] bg-[#123458]">
                    CSS
                </span>
                <span className="border border-black p-1 text-xs text-center text-[#F1EFEC] bg-[#123458]">
                    REACTJS
                </span>
                <span className="border border-black p-1 text-xs text-center text-[#F1EFEC] bg-[#123458]">
                    MYSQL
                </span>
            </div>
        </div>
    )
}