
const content = {
    heading: "The popular crypto coins",
    text: "Explore the most popular crypto coins and make correct investment"
}

const CheckText = () => {
    return (
        <div className={`py-10 px-0 bg-black`}>
            <div className="container">
                <div className="flex items-center justify-center flex-col gap-6">
                    <h1 className="font-mono text-4xl text-white selection">{content.heading}</h1> 
                    <p className="text-gray-300 text-center selection">{content.text}</p>
                </div>
            </div>
        </div>
    )
}


export default CheckText