

import type {Metadata} from "next";
import React, {ReactNode} from "react";
import {ToastContainer} from "react-toastify";

export const metadata: Metadata = {
    title: "Elite - all financial services in one click",
    description:"use the best, use Elite for all financial services in one click",
}

export default function PaymeLayout({children}: {children: React.ReactNode}) {
    return <>
        {children}
        <ToastContainer position="top-right" autoClose={3000} theme={'light'} />
    </>
}




