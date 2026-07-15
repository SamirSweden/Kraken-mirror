'use client'

import Image from "next/image";

import RyanImg from "@/app/assets/ryan.jpg"


const Profile = () => {
    return (
        <>
            <section className={'py-10'}>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 rounded-2xl">
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
                            <div className={'flex items-start gap-5  justify-start sub_content mt-4'}>
                                <button className={'sub_btn text-white cursor-pointer hover:bg-blue-400 py-2 px-4 bg-blue-600 rounded-lg text-center text-sm capitalize outline-none border-none'}>
                                    subscribe
                                </button>
                                <button className={'sub_btn text-white cursor-pointer hover:bg-[#525252] py-2 px-4 bg-[#111] rounded-lg text-center text-sm capitalize outline-none border-none'}>
                                    send message
                                </button>
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