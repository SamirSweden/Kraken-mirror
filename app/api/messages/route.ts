


import {NextResponse} from "next/server";


const messages: string[] = [];

export async function GET(){
    return NextResponse.json(messages);
}


export async function POST(req: Request){
    const body = await req.json();

    messages.push(body.text)


    return NextResponse.json({
        success: true,
    });
}




