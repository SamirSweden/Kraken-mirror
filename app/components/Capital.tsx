

const content = {
    title: "An app built by traders, for traders",
    description: "Go long or short on 5,500+ CFD markets on an award-winning platform with 13ms average execution speed.*",
    pt: "*Internal server data, 2025",
}

export default function Capital() {
    return <>
        <section className="h-screen px-0 ">
            <div className="max-w-7xl mx-auto px-4 w-full h-full">
                <div className="flex items-start justify-between">
                    <div className="flex items-start flex-col gap-10 max-w-[600px]">
                        <h1 className="mt-[50px] text-5xl text-wrap font-bold  ">
                            {content.title}
                        </h1>
                        <h3 className="text-lg text-white font-mono text-wrap ">
                            {content.description}
                        </h3>
                        <p className="text-wrap ">
                            {content.pt}
                        </p>

                        <div className={'flex items-start border border-gray-600 rounded-2xl py-4 px-5'}>
                            hhhh
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </>

}