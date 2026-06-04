'use client'


const content = {
    title: "Trade anytime, anywhere",
    desc: "Google Play availability may vary by region.",
    linkText: "Learn more"
}

const Install = () => {
    return (
        <>
            <section className={'banner__install py-10 px-0'}>
                <div className="container">
                    <div className="flex items-center justify-between bg-linear-to-br from-[#383222]
                    to-[#1a1302] py-6 px-6 "
                    >
                        <h2 className={'text-white font-mono text-3xl '}>{content.title}</h2>
                    </div>
                </div>
            </section>

            <style>{`
                .container {
                    max-width: 1230px;
                    padding: 0 15px;
                    margin: 0 auto;
                    width: 100%;
                }
            `}</style>
        </>
    )
}


export default Install

