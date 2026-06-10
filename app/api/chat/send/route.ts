import {NextResponse} from "next/server";
import {redis} from "@/app/lib/redis";

export  default async function POST(req: Request){
    const body = await req.json();

    const message = {
        id: crypto.randomUUID(),
        text: body.text,
        author: body.author,
        createdAt: new Date()
    };

    await redis.rpush("chat", message);

    return NextResponse.json({
        success: true,
    })
}
