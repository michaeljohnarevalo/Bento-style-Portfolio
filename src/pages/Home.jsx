import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";
import Projects from "../components/Projects";
import SocialLinks from "../components/SocialLinks";
import Profile from "../components/Profile";
import TechStack from "../components/TechStack";
import About from "../components/About";
import Hire from "../components/Hire";

export default function Home(){
    return(
        <div className="min-h-screen bg-[#D4C9BE]  flex flex-col items-center p-3 font-sans">
            <div className="w-[90%] max-w-5xl gap-0.3">
                <Header/>
                <div className="grid grid-cols-3 gap-1 mt-2 min-h-[85vh]">
                    <div className="flex flex-col gap-2.5">
                        <Description/>
                        <Projects/>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <SocialLinks/>
                        <Profile/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <TechStack/>
                        <About/>
                        <Hire/>
                    </div>
                </div>
            </div>
        </div>
    )
}