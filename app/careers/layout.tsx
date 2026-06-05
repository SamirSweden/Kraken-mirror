


import {Metadata} from "next"
import Header from "@/app/components/shared/header/Header";

export const metadata: Metadata = {
    title: "Careers | Kraken",
    description: "we are looking for talented individuals to join our team and help us build the future of finance. Explore our current job openings and find out how you can contribute to our mission of making crypto accessible to everyone.",
}


export default  function CareersLayout({children} : {children: React.ReactNode}) {
    return(
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}






