import Link from "next/link";


const SXHeader = () => {
    return (
        <>
            <header className={`bg-black px-0 py-5 `}>
                <div className="max-w-5xl px-4 md:px-8 mx-auto w-full h-full ">
                    <div className="flex items-center justify-between">
                        <Link href={'/'} className={'text-white text-2xl ca-'}>SXGram</Link>
                        <ul className={'flex items-center gap-4'}>
                            <li>
                                <Link href={'/'} className={'bg-zinc-800 rounded-lg py-2 px-5 '}>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}


export default SXHeader
