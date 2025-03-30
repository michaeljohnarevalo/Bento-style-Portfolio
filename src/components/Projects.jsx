import React from "react";

export default function Projects(){
    return(
        <div className="border-2 border-black p-2 w-full md:w-170 h-82 flex flex-col justify-center items-center rounded-lg bg-[#F1EFEC]">
            <div className="flex-grow mt-4 mb-2 flex items-center justify-center">
                <img src="public/profile.png" className="max-h-48 max-w-89 object-contain" />
            </div>
            <div className="text-center text-sm mb-1">
                <h3 className="font-bold mb-0.3 text-[#123458]">CLARA</h3>
                <p className="text-s mb-1.5">Lorem ipsum dolor sit amet.</p>
                <div className="flex flex-wrap gap-2 justify-center">
                    <span className="border border-black px-2 py-0.5 text-[12px] rounded-lg text-[#F1EFEC] bg-[#123458]">
                        Dart
                    </span>
                    <span className="border border-black px-2 py-0.5 text-[12px] rounded-lg text-[#F1EFEC] bg-[#123458]">
                        Firebase
                    </span>
                    <span className="border border-black px-2 py-0.2 text-[12px] rounded-lg text-[#F1EFEC] bg-[#123458]">Flutter</span>
                </div>
            </div>
            <a className="w-45 mb-5 text-center bg-[#123458] text-[#F1EFEC] py-1.5 font-bold text-[10px] hover:bg-gray-800 transition rounded-lg">View Case Study</a>
        </div>
    )
}