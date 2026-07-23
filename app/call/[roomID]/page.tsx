"use client"


import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";


export default function CallPage(){
    const containerRef = useRef<HTMLDivElement>(null);
    const params = useParams();

    useEffect(()=>{
        const init = async () => {
            const {ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");

            if(!containerRef.current) return;

            const appId = Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID)
            const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET!;

            // const roomID = params.roomID as string;
          

            const roomID = "samir";
            const userID = crypto.randomUUID();

            const userName = `User_${userID.substring(0, 5)}`;

            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appId,
                serverSecret,
                roomID,
                userID,
                userName
            )

            const zp = ZegoUIKitPrebuilt.create(kitToken)

            zp.joinRoom({
                container: containerRef.current,

                scenario:{
                    mode: ZegoUIKitPrebuilt.OneONoneCall
                },

                turnOnCameraWhenJoining: false,
                turnOnMicrophoneWhenJoining: true,
                showMyCameraToggleButton: false,
                showScreenSharingButton: false,
                sharedLinks: [],
            })
        }

        init();
    },[params])


    return (
        <div
            ref={containerRef}
            className={'w-full h-full'}
        />
    )
}

