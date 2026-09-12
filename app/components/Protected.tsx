'use client'



import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useAuth} from "@/app/context/AuthContext";

export default  function Protected({children} : {children: React.ReactNode}) {
    const {user, loading} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if(!loading && !user){
            router.replace("/login");
        }
    },[user,loading,router])

    if(loading){
        return(
            <>
                <div className="min-h-screen flex items-center justify-center">
                    loading...
                </div>
            </>
        )
    }


    if(!user) return null;

    return <>{children}</>
}








