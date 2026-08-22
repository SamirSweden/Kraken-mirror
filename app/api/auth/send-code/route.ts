


import {NextResponse} from "next/server";
import {supabase} from "@/app/lib/supabase";


export async function POST(req: Request){
    try {
        const {email} = await req.json()

        if (!email)
            return NextResponse.json({status: 400, statusText: "Invalid email address"})

        const {error} =  await supabase.auth.signInWithOtp(
            {
                email,
            }
        )

        if (error){
            return NextResponse.json({status: 400, statusText: error.message})
        }

        return NextResponse.json({
            status:200
        })

    }catch{
        return NextResponse.json({
            status:500,
            error: "Something went wrong"
        })
    }
}


