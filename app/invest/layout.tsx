


import {Metadata} from "next"
import Header from "@/app/components/shared/header/Header";

export const metadata: Metadata = {
    title: "Buy - Sell | start trading",
    description: "",
}


export default  function TradeLayout({children} : {children: React.ReactNode}) {
    return(
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}






