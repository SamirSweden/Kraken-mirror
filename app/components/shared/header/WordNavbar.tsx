'use client'

import { useEffect, useState } from "react";
import {User} from "lucide-react";
import Link from "next/link";
import {useScroll, motion} from "motion/react";

const WordNavbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [username , setUsername] = useState("");


    useEffect(() => {
        const savedName = localStorage.getItem("username")
        if (savedName){
            setUsername(savedName);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY >= 200);
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll",handleScroll)
        }
    }, []);

    return (
        <>
            <header className={` z-50 transition-all duration-300 outline-none border-none ${
                isSticky
                    ? "fixed top-0 left-[29.5%] w-[41%] rounded-3xl bg-black/50 backdrop-blur-xl border border-white/15 max-[710px]:!left-0 max-[710px]:!w-full"
                    : "relative bg-transparent -mb-10 py-4"
            }`}>
                <div className="container max-w-2xl mx-auto px-4 w-full h-full ">
                    <div className="flex items-center justify-around  rounded-3xl p-2.5 w-full">
                        <h1 className={'text-white font-bold tracking-tight animate-pulse max-[340px]:text-sm'}>Принцессе Хайлин💕</h1>
                        <div className="flex items-center gap-2">
                            <button className={'max-[340px]:text-sm px-3 py-1.5 text-black text-sm bg-white rounded-full cursor-pointer hover:bg-white/35'}>Ryan</button>
                            {username ?(
                                <span className={'text-white capitalize cursor-pointer tracking-tight animate-pulse text-sm '}>
                                    {username}
                                </span>
                            ) : (
                                <Link className="text-white cursor-pointer" href="/login">
                                    <User size={20} />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default WordNavbar;