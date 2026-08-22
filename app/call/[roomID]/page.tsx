"use client"


import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";


export default function CallPage(){
    const containerRef = useRef<HTMLDivElement>(null);
    const params = useParams();

    useEffect(()=>{
        const init = async () => {}
            const roomID = params.roomID as string;
            const appID = 1923001453
            const serverSecret  = "236fc79e937aaa30f14709e3b76c3a42"

            const userID = "user" + Math.random().toString(36).substring(2, 10);
            const userName  = "Ryan";

            const kitToken =
                ZegoUIKitPrebuilt.generateKitTokenForTest(
                    appID,
                    serverSecret,
                    roomID,
                    userID,
                    userName
                );

                const zp = ZegoUIKitPrebuilt.create(kitToken);

            if (!containerRef.current) return;

            zp.joinRoom({
                container: containerRef.current,

                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall,
                },

                showScreenSharingButton: false,
                showTextChat: false,
                showUserList: false,
            });


    },[params.roomID])


    return (
        <div
            ref={containerRef}
            className={'w-screen h-screen'}
        />
    )
}

