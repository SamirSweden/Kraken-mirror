"use client"




import {useState} from "react";
import {toast} from "react-toastify";

const API_URL = "http://127.0.0.1:8000";


type Translation = {
    english: string,
    russian: string,
}


export default function AIPage() {
    const [question, setQuestion] = useState("")
    const [results, setResults] = useState<Translation[]>([])
    const [loading, setLoading] = useState(false)

    async function search(){
        if (!question.trim()) return;

        setLoading(true)
        setResults([])

        const response = await fetch(`http://127.0.0.1:8080/api/translate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question
            })
        });

        if (!response.ok){
            toast.error("error occurred")
            return
        }

        const data = await response.json();
        setResults(data.results);

        if (!data.found){
            toast.error("Не найдено")
            return
        }

    }

    return<>
        <main className="flex min-h-screen flex-col items-center bg-neutral-950 px-5 pt-32 text-white">
            <h1 className="mb-8 text-3xl font-bold">
                English Dictionary
            </h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    search();
                }}
                className="flex w-full max-w-xl gap-2"
            >
                <input
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Введи слово или фразу..."
                    className="min-w-0 flex-1 rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none focus:border-emerald-400"
                />

                <button
                    type="submit"
                    disabled={loading || !question.trim()}
                    className="rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-black disabled:opacity-50"
                >
                    узнать
                </button>
            </form>



            <div className="mt-8 w-full max-w-xl space-y-3">
                {results.map((item, index) => (
                    <div
                        key={`${item.english}-${index}`}
                        className="rounded-xl border border-neutral-800 bg-neutral-900 p-5"
                    >
                        <p className="text-lg font-semibold text-emerald-400">
                            {item.english}
                        </p>
                        <p className="mt-2 text-neutral-300">
                            {item.russian}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    </>
}

