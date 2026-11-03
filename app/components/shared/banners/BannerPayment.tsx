


const PaymentInfo = {
    title: "Mobile phone service payment",
    heading: "Accept any card online",
    amount: "payment amount"
}

export default  function BannerPayment(){
    return <>
        <div className={'bg-transparent py-12'}>
            <div className="container max-w-7xl mx-auto w-full px-4  ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-gray-100 p-5 rounded-2xl">
                    <div className="flex items-start flex-col gap-5 ">
                        <h1 className="text-zinc-600 text-2xl">
                            {PaymentInfo.title}
                        </h1>

                        <p className="text-zinc-600 text-lg">
                            {PaymentInfo.heading}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center gap-3">

                        <input
                            type="phone number"
                            placeholder="+371"
                            className="w-full bg-white py-3.5 px-4 rounded-xl outline-none text-black"
                        />

                        <input
                            type="text"
                            placeholder="payment amount"
                            className="w-full bg-white py-3.5 px-4 rounded-xl outline-none text-black"
                        />

                    </div>

                    <div className="flex items-center justify-center md:justify-end">

                        <button className="w-full md:w-auto bg-black text-white py-3.5 px-8 rounded-3xl hover:bg-zinc-800 transition">
                            Pay now
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </>
}











