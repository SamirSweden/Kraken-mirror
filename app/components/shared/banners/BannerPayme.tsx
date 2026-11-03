'use client'

import PhoneInput from "@/app/components/UI/PhoneInput";

const bannerInfo = {
    title: "Payment service ElitePay",
    preTitle: "Sign up forever",
    phoneText:"Phone number",
    bottomTitle: "Single  authorization and registration",
}

const BannerPayme = () => {
    return (
        <>
            <section className={'py-15 bg-gray-100'}>
                <div className="container max-w-7xl mx-auto px-4 py-4 w-full h-full">
                    <div className="flex items-center justify-between">
                        <div className="info flex items-start flex-col gap-4">
                            <h1 className={'font-bold text-4xl  mb-4 text-zinc-500'}>{bannerInfo.title}</h1>
                            <h3 className={'font-semibold text-zinc-500 text-xl'}>{bannerInfo.preTitle}</h3>
                            <span className={'font-medium text-zinc-600'}>{bannerInfo.phoneText}</span>
                            <PhoneInput />
                            <span className={'text-zinc-500'}>{bannerInfo.bottomTitle}</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default  BannerPayme

