"use client"



import {useState} from "react";
import {useRouter} from "next/navigation";
import {useAuth} from "@/app/context/AuthContext";


export default function LoginPage(){
    const {login} = useAuth();
    const router = useRouter();
    const [username , setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error , setError] = useState("");
    const [loading , setLoading] = useState(false);



    const handleSubmit = async(e: React.FormEvent)=> {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await login(username , password)
            router.push("/dashboard")
        }catch(err: any){
            setError(err.message || "login error");
        } finally{
            setLoading(false);
        }

    }


    return (
<div className="relative min-h-screen overflow-hidden bg-[#050505] flex items-center justify-center px-4">



    <div className="relative z-10 w-full max-w-md">

        <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/50 backdrop-blur-2xl"
        >

            <div className="mb-8 flex justify-center">
                <div className="flex h-14 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-500/20">
                    <span className="text-xl font-black text-white">
                        Elite
                    </span>
                </div>
            </div>

            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-white">
                    Welcome back
                </h1>

                <p className="mt-2 text-sm text-zinc-400">
                    Войдите в свой аккаунт
                </p>
            </div>

            {error && (
                <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3">
                    <p className="text-sm text-red-400">
                        {error}
                    </p>
                </div>
            )}

            <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Username
                </label>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="
                            w-full rounded-xl
                            border border-white/10
                            bg-black/40
                            px-4 py-3.5
                            text-white
                            placeholder:text-zinc-600
                            outline-none
                            transition-all duration-200
                            focus:border-violet-500/60
                            focus:bg-white/[0.06]
                            focus:ring-4
                            focus:ring-violet-500/10
                        "
                        required
                    />
                </div>
            </div>

            <div className="mb-7">
                <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-zinc-300">
                        Password
                    </label>


                </div>

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="
                        w-full rounded-xl
                        border border-white/10
                        bg-black/40
                        px-4 py-3.5
                        text-white
                        placeholder:text-zinc-600
                        outline-none
                        transition-all duration-200
                        focus:border-violet-500/60
                        focus:bg-white/[0.06]
                        focus:ring-4
                        focus:ring-violet-500/10
                    "
                    required
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="
                    group relative
                    w-full overflow-hidden
                    rounded-xl
                    bg-gradient-to-r from-violet-600 to-blue-600
                    py-3.5
                    font-semibold text-white
                    shadow-lg shadow-violet-500/20
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:shadow-xl hover:shadow-violet-500/30
                    active:translate-y-0
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                        <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Вход...
                        </>
                    ) : (
                        <>
                            Войти
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                →
                            </span>
                        </>
                    )}
                </span>

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>

            <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-sm text-zinc-600">
                   Elite.su
                </span>
                <div className="h-px flex-1 bg-white/10" />
            </div>


        </form>
    </div>
</div>

    )
}











