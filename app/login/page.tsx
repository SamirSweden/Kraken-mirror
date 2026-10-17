'use client'

import {useRouter} from "next/navigation";
import {FormEvent, useEffect, useState} from "react";
import Link from "next/link";
import {House} from "lucide-react";
import {toast} from "react-toastify";


const Login = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error , setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        setError("")
        setLoading(true)

        try {
            const response = await fetch("https://api-for-the-crypto-app.vercel.app/api/login", {
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            if(username && password == ""){
                toast.warning("set a username and password")
            }

            const data = await  response.json()
            if (!response.ok){
                toast.error("Login failed.")
                return
            }
            toast.success("Login successfully.")
            localStorage.setItem("username", data.username)
            setTimeout(() => router.push("/"),2000)
        } catch{
            toast.error("Cannot connect to the server")
        }
    }

    return <>

        <main className="min-h-screen bg-neutral-950 text-white
                         flex items-center justify-center p-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm space-y-5 rounded-2xl
                           border border-neutral-800 shadow-[inset_4px_4px_25px_0_hsla(0,0%,100%,.15)]
                           p-8   relative"
            >
                <h1 className="text-3xl font-bold">
                    Create account
                </h1>

                <Link href={'/'} className={'text-white text-lg cursor-pointer absolute -top-2.5 right-0 rotate-20'}>
                    <House size={'35px'}/>
                </Link>

                <div className="space-y-2">

                    <input
                        id="username"
                        type="text"
                        autoComplete="username"
                        minLength={3}
                        maxLength={30}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full rounded-xl
                                    px-4 py-3 outline-none
                                   focus:border-gray-400
                                   bg-black/50 backdrop-blur-xl border border-white/15
                                   "
                        placeholder="Username"
                    />
                </div>

                <div className="space-y-2">


                    <input
                        id="password"
                        type="password"
                        autoComplete="new-password"
                        minLength={8}
                        maxLength={128}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-xl
                                    px-4 py-3 outline-none
                                   focus:border-gray-400
                                   bg-black/50 backdrop-blur-xl border border-white/15
                                   "
                        placeholder="Password"
                    />
                </div>

                {error && (
                    <p role="alert" className="text-sm text-red-400">
                        {error}
                    </p>
                )}

                <button
                    type="submit"

                    className="w-full rounded-4xl bg-[#111] px-4 py-3
                               font-semibold text-gray-300 transition
                               hover:bg-black disabled:opacity-50 cursor-pointer outline-none border-none"
                >
                    {loading ? "Creating account..." : "Register"}
                </button>
            </form>
        </main>
    </>
}

export default Login