import React from "react";

export default function Profile() {
    return(
        <div  className="col-span-1 row-span-2 bg-white rounded-lg border-4 border-black overflow-hidden">
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                <img src="./src/assets/profile.png" className='h-56'/>
            </div>
        </div>
    )
}