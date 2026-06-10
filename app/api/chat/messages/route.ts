import {NextResponse} from "next/server";
import {redis} from "@/app/lib/redis";


export default async function GET(){
    const messages = await redis.lrange("chat", 0, -1)
    return NextResponse.json(messages);
}




