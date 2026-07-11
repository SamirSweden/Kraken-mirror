'use client'



import { useEffect  ,useRef } from "react"
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs"



type ChatChars = {
    msg: string,
    user: string
}

export function useChatSockets(
    onMessage: (msg: ChatChars) => void,
    onTyping: (user: ChatChars) => void
){
    const clientRef = useRef<Client | null>(null);
    
    useEffect(() => {
        const socket = new SockJS("http://localhost:8080/ws");

        const client = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000,
        });

        client.onConnect = () => {
            client.subscribe("/topic/messages", (message) => {
                onMessage(JSON.parse(message.body))
            })
        }

        client.subscribe("/topic/typing", (message) =>  {
            const data = JSON.parse(message.body);
            onTyping(data.user)
        })

        client.activate();

        clientRef.current = client;

        return () => {
            client.deactivate();
        }

    }, [])

    return clientRef;
}



