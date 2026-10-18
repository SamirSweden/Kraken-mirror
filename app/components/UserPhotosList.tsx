"use client"

import Image from "next/image";
import {useEffect, useState} from "react";
import { useRouter } from "next/navigation";

import az from "@/public/azimov.jpg"
import az2 from "@/public/azimovx2.jpg"
import {toast} from "react-toastify";

export default  function UserPhotosList(){
    const router = useRouter()
    const [nickname, setNickname] = useState("")
    const [authorized, setAuthorized] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if(nickname.trim().toLowerCase() === "Haylin"){
            setAuthorized(true)
            toast.success("Successfully authorized!")
        } else if(nickname == ""){
            toast.info("Please write nickname!")
        }
        else{
            toast.error("Вход запрещен");
            router.replace("/words");
        }
    }

    if(!authorized){
        return <>
            <main className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur-md">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm rounded-2xl border border-white/10 bg-neutral-900 p-7 text-white shadow-2xl"
                >
                    <h1 className="text-2xl font-bold">
                        Прежде чем продолжить
                    </h1>

                    <p className="mt-2 text-sm text-neutral-400">
                        Введи свой ник, чтобы посмотреть фотографии.
                    </p>

                    <input
                        autoFocus
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="Твой ник..."
                        className="mt-6 w-full rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-3 outline-none focus:border-violet-500"
                    />



                    <button
                        type="submit"
                        className="mt-4 w-full rounded-xl bg-violet-700 py-3 font-semibold text-white transition hover:bg-[#111] cursor-pointer"
                    >
                        Продолжить
                    </button>
                </form>
            </main>
        </>
    }

    return (
        <>


            <section className={'py-20'}>

                <div className="container max-w-4xl mx-auto w-full h-full px-4 ">
                    <h1 className={'text-white text-3xl text-center font-bold mb-10'}>Ryan's photos</h1>
                    <div className="grid grid-cols-2 gap-4  w-full max-[768px]:grid-cols-1">
                        <Image
                            src={az}
                            width={400}
                            height={300}
                            className={'rounded-xl w-full '}
                            alt={'photo'}
                        />
                        <Image
                            src={az2}
                            width={400}
                            height={300}
                            className={'rounded-xl w-full'}
                            alt={'photo'}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}


