'use client'


import {useState , FormEvent} from "react";
import { useRouter } from "next/navigation";

const API_URL = "https://api-for-the-crypto-app.vercel.app";

const Login = () => {
    const router = useRouter();
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState<string | null>(null)
    const [isRegister , setIsRegister] = useState(false)

    async function handleSubmit(e: FormEvent){
        e.preventDefault()
        setError(null)
        setLoading(true)

        const endpoint = isRegister ? "/auth/register" : "/auth/login";

        try {
            const res = await fetch(`${API_URL}${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,password
                }),
            });

            const data = await res.json();
            if (!res.ok)
                throw new Error("Failed to login");
            router.push("/login")
        }catch (err){
            setError("auth error")
        }finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="min-h-screen bg-black flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    {/* Card */}
                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
                        <h1 className="text-2xl font-semibold text-white mb-2 text-center">
                            {isRegister ? "Create account" : "Sign in"}
                        </h1>
                        <p className="text-zinc-400 text-sm text-center mb-8">
                            {isRegister
                                ? "Register a new account"
                                : "Enter your credentials to continue"}
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-zinc-300 mb-1.5"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-black border border-zinc-700 rounded-lg
                           text-white placeholder-zinc-500
                           focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-zinc-500
                           transition"
                                    placeholder="you@example.com"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-zinc-300 mb-1.5"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    minLength={8}
                                    maxLength={128}
                                    autoComplete={isRegister ? "new-password" : "current-password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-black border border-zinc-700 rounded-lg
                           text-white placeholder-zinc-500
                           focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-zinc-500
                           transition"
                                    placeholder="••••••••"
                                />
                            </div>

                            {/* Error */}
                            {error && (
                                <div className="text-sm text-red-400 bg-red-950/40 border border-red-900/50 rounded-lg px-4 py-3">
                                    {error}
                                </div>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-2.5 px-4 bg-white text-black font-medium rounded-lg
                         hover:bg-zinc-200 active:bg-zinc-300
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition cursor-pointer"
                            >
                                {loading
                                    ? "Please wait..."
                                    : isRegister
                                        ? "Register"
                                        : "Sign in"}
                            </button>
                        </form>

                        {/* Toggle */}
                        <div className="mt-6 text-center text-sm text-zinc-400">
                            {isRegister ? (
                                <>
                                    Already have an account?{" "}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsRegister(false);
                                            setError(null);
                                        }}
                                        className="text-white hover:underline font-medium cursor-pointer"
                                    >
                                        Sign in
                                    </button>
                                </>
                            ) : (
                                <>
                                    Don&apos;t have an account?{" "}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsRegister(true);
                                            setError(null);
                                        }}
                                        className="text-white hover:underline font-medium"
                                    >
                                        Register
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Login


