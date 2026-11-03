
import Link from "next/link"



const InstallApps = () => {
    return (
        <>
            <section className={'bg-transparent py-10'}>
                <div className="container max-w-7xl mx-auto w-full h-full px-4 ">
                    <div className="bg-[#f5f7f5]  p-5 rounded-3xl flex justify-between items-center max-[688px]:flex-col  w-full">
                        <span className={'text-2xl text-zinc-600 font-medium max-[688px]:mb-4 max-[688px]:text-lg'}>Download our Mobile app</span>
                        <div className="flex items-center gap-4 max-[688px]:flex-col max-[688px]:w-full">
                            <Link href={'/'} className={'cursor-pointer hover:bg-white/30 text-center max-[688px]:w-full py-4 px-5 bg-white/85 font-bold rounded-xl text-black'}>app store</Link>
                            <Link href={'/'} className={'cursor-pointer hover:bg-white/30 text-center max-[688px]:w-full py-4 px-5 font-bold bg-white/85 rounded-xl text-black'}>play market</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InstallApps