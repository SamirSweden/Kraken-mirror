

import type {Metadata} from "next"
import {ReactNode} from "react";
import Header from "@/app/components/shared/header/Header";

export const metadata: Metadata = {
    title: "Login",
}



export default function LoginLayout({children}: {children: ReactNode}) {
    return (
        <>
            <Header  />
            <main className={'bg-black'}>
                {children}
            </main>
        </>
    )
}



