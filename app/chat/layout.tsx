import { Metadata } from "next";


export const metadata: Metadata ={
    title:'Kraken - Chat with friends',
    description:'krakenChat - here you can write anything'
}

export default function ChatLayout({children} :{children: React.ReactNode}){
    return <>
        {children}
    </>
}