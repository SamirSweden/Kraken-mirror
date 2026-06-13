"use client"

import { Client } from "@stomp/stompjs"
import { SendHorizontal } from "lucide-react"
import { useEffect, useRef, useState } from "react"

type Message = {
    text: string
}

export default function Chat(){

   const [messages , setMessages] = useState<Message[]>([])
   const [text , setText] = useState('')
   const [typing , setTyping] = useState(false)

   const clientRef = useRef<Client | null>(null)

   useEffect(() => {
    const client = new Client({
        brokerURL: "ws://localhost:8080/ws",
        reconnectDelay:5000
    })

        client.onConnect = () => {
            client.subscribe('/topic/messages', msg => {
                setMessages(prev => [
                    ...prev,
                    JSON.parse(msg.body)
                ])
            })

            client.subscribe('/topic/typing', () => {
                setTyping(true)

                setTimeout(() => {
                    setTyping(false)
                },1000)
            })
        }

        client.activate()
        clientRef.current = client

        return () => void client.deactivate()
   },[])


   function send(){
    if(!text.trim()) return;

    clientRef.current?.publish({
        destination: "/app/chat.send",
        body: JSON.stringify({text})
    })

    setText('')
   }

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
           <div className="max-w-2xl mx-auto p-4">
               <div className="space-y-2 mb-4">
                    {messages.map((msg , i) => (
                        <div key={i} style={{ backgroundColor: '#111', borderRadius: '8px', padding: '12px' }}>
                            <p style={{ color: '#fff' }}>{msg.text}</p>
                        </div>
                    ))}
               </div>

               <div className="flex flex-col sm:flex-row  gap-3 items-center
                absolute bottom-4.5 left-1/2 w-full -translate-x-1/2 max-w-2xl">
                <input 
                    className="flex-1 border border-gray-600 rounded-2xl w-full outline-none py-4 px-5 text-white wrap-break-word"
                    placeholder="write a message"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            e.preventDefault()
                            send()
                        }
                    }}
               />

               <button
                    
                    onClick={send}
               >
                   <SendHorizontal size={40} className="text-white max-[440px]:text-lg" />
               </button>
               </div>

               {typing && (
                    <p style={{ color: '#888', marginTop: '8px', fontSize: '14px' }}>Печатает....</p>
               )}
           </div>
        </div>
    )
}