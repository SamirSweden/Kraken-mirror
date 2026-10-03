'use client'

const Banner = () => {
    return (
        <>
        <section className={`relative overflow-hidden bg-[#06060b] py-24`}>
            <div className={'pointer-events-none absolute inset-0'} style={{
                background:  "radial-gradient(circle at 15% 15%, rgba(168,85,247,0.28), transparent 45%), radial-gradient(circle at 85% 85%, rgba(0,255,157,0.16), transparent 50%)",
            }} />


            <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between gap-12 px-6">
                <div className="max-w-lg">
                    <p className={"mb-4 text-sm font-semibold tracking-[0.2em] text-purple-500"}>
                        YIELD PROTOCOL
                    </p>
                    <h1 className={'text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl'}>
                        Your budget <br /> works <span className={'text-[#00ff9d] [text-shadow:0_0_18px_rgba(0,255,157,0.5)]'}>24/7</span>
                    </h1>
                    <p className={'mt-5 max-w-sm text-sm text-slate-400'}>
                        Staking, farming, and yield auto-compounding without intermediaries.
                    </p>

                    <div className="flex w-full max-[440px]:w-full mt-4">
                        <button className={`
                        max-[440px]:w-full
                        outline-none
                        w-[85%]
                        border-none 
                        cursor-pointer
                        [0_0_26px_rgba(168,85,247,0.4)] transition-transform hover:scale-[1.02]
                        bg-linear-to-r from-purple-600 to-[#00ff9d] px-6 py-3 text-center text-black rounded-xl
                    `}>
                            connect wallet
                        </button>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2 sm:gap-3 max-[440px]:w-full">
                        {['Audited', 'Non-custodial', 'Multi-chain'].map((label: string) => (
                            <span
                                key={label}
                                className={'max-[440px]:w-full rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] sm:px-3 sm:text-xs text-slate-300'}>
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={'relative hidden h-[280px] w-[280px] shrink-0 items-center md:flex'}>
                    <div className="absolute h-full w-full rounded-full border border-purple-500/40" />
                    <div className="absolute h-[200px] w-[200px] rounded-full border border-dashed border-[#00ff9d]/40" />
                    <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-[#00ff9d] text-xs font-extrabold text-[#06060b] shadow-[0_0_60px_rgba(168,85,247,0.5)]">
                        KrakenCoin
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

export default Banner