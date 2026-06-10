'use client'

import {useState,useEffect} from "react";

export default  function Chat() {
    const [author , setAuthor] = useState("");
    const [text , setText] = useState("");
    const [message , setMessage] = useState<any[]>([]);

    useEffect(() => {
        const interval = setInterval(async () => {
           const res = await fetch("/api/chat/messages");

           const data = await res.json();
           setMessage(data);
        } , 1000);

        return () => clearInterval(interval)
    },[])

    const send = async () => {
        if(!text.trim()) return;
        if(!author.trim()) return;

        await fetch("/api/chat/send", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                text,
                author
            })
        })

        setText("")
    }
    return (
        <>
            <section>
                <div className="p-4">
                    <input
                        type="text"
                        placeholder={"name"}
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />

                    <div className={'h-[400px] overflow-auto border my-4 p-4'}>
                        {message.map((msg) => (
                            <div key={msg.id}>
                                <b>{msg.author}</b>: {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className={'bottom_content'}>
                        <input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="write a message"
                        />
                        <button onClick={send}>
                            send
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}