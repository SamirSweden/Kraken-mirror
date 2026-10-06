"use client";

import { useEffect, useState } from "react";

export default function PanelPage() {
    const [email, setEmail] = useState("");

    useEffect(() => {
        const savedEmail = localStorage.getItem("email");

        if (savedEmail) {
            setEmail(savedEmail);
        }
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold">
                Привет, {email} 👋
            </h2>

            <p className="mt-2 text-zinc-400">
                Добро пожаловать в твой личный кабинет.
            </p>
        </div>
    );
}

