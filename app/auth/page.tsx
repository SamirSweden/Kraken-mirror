'use client'

import {useRouter} from "next/navigation";
import {useState} from "react";
import {ToastContainer, toast} from "react-toastify";

const PanelPage = () =>  {
    const router = useRouter();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading , setLoading] = useState(false)

    async function handleForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()


        setLoading(true)

        try {
            const resp = await fetch("http://localhost:8080/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password})
            });

            const data = await resp.json();

            if (!resp.ok){
                toast.error("Login failed.")
                return;
            }

            localStorage.setItem("nickName",username)

            toast.success("Login successfully.")
            setTimeout(() => {
                router.push("/panel")
            },1000)


        }catch(err){
            toast.error("Error, set username or password .");
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                theme="dark"
            />
            <main className="flex min-h-screen items-center justify-center bg-black p-6 text-white">
                <form onSubmit={handleForm} className={'w-full max-w-sm space-y-4 rounded-2xl border border-gray-800 p-6'}>
                    <h1 className="text-2xl font-bold">Login</h1>
                    <input
                        className={'w-full rounded-lg border border-gray-700 bg-black p-3'}
                        type="text"
                        placeholder={"username"}
                        value={username}

                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        placeholder={"password"}

                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className={'w-full rounded-lg border border-gray-700 bg-black p-3'}
                    />


                    <button disabled={loading}
                            className={'w-full text-black cursor-pointer rounded-3xl ' +
                                'bg-white p-3 hover:bg-white/35 disabled:opacity-50'}
                    >
                        {loading ? "Loading" : "Login"}
                    </button>

                </form>
            </main>
        </>
    )
}

export default PanelPage