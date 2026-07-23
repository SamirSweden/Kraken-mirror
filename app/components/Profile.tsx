'use client'

import Image from "next/image";

import RyanImg from "@/app/assets/ryan.jpg"
import UserCard from "@/app/components/UserCard";


const Profile = () => {
    return (
        <>
            <section className={'py-10 select-none '}>
                <div className="container relative">
                    <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 rounded-2xl ">
                        <div className="bg-[#111] py-4 px-5 rounded-xl">
                            <span className={'text-white text-lg font-semibold'}>s.azimovs</span>
                            <div className="followers mt-3 mb-4 flex items-center gap-5">
                                <div className={'flex items-center gap-2'}>
                                    <span className={'number text-white text-xl font-bold'}>15</span>
                                    <span className={'number text-gray-500 text-lg font-bold'}>followers</span>
                                </div>
                                <div className={'flex items-center gap-2'}>
                                    <span className={'number text-white text-xl font-bold'}>15</span>
                                    <span className={'number text-gray-500 text-lg font-bold'}>following</span>
                                </div>
                            </div>

                            <div className={'flex items-start flex-col justify-start '}>
                                <span className={'username text-white text-sm capitalize '}>cute</span>
                                <span>Vienna, Austria</span>
                            </div>
                            <div className={'flex items-start gap-5  justify-start sub_content mt-4 '}>
                                <UserCard />
                            </div>

                            <div className={'flex items-center gap-2 absolute bottom-[-30]  '}>
                                <span className={'text-sm text-gray-400 capitalize '}>Status</span>
                                &mdash;
                                <p className={'text-sm text-white lowercase'}>unavailable</p>
                            </div>
                        </div>
                        <div className="photo w-full">
                            <Image
                                src={RyanImg}
                                alt={'ryan'}
                                width={'260'}
                                height={'100'}

                                className={'rounded-3xl  max-[425px]:w-full'}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>
                {`
                    .container {
                        max-width: 1230px;
                        padding: 0 15px;
                        margin: 0 auto;
                        width: 100%;
                        height: 100%;
                    }
                `}
            </style>
        </>
    )
}


export default Profile

// 1923001453  AppID

//ServerSecret 236fc79e937aaa30f14709e3b76c3a42