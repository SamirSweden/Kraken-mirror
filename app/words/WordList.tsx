"use client";

import { useMemo, useState ,useEffect} from "react";
import {motion} from "framer-motion";
import {easeInOut} from "motion";


type Pair = readonly [string, string];

export default function WordList({ words }: { words: readonly Pair[] }) {
    const [placeholderIndex, setPlaceholderIndex] = useState<number>(0)
    const [q, setQ] = useState("");
    const [copied, setCopied] = useState<string | null>(null);

    const filtered = useMemo(() => {
        const s = q.trim().toLowerCase();
        return s
            ? words.filter(([en, ru]) => (en + " " + ru).toLowerCase().includes(s))
            : words;
    }, [q, words]);

    async function copy(en: string) {
        try {
            await navigator.clipboard.writeText(en);
        } catch {}
        setCopied(en);
        setTimeout(() => setCopied(null), 1200);
    }

    const placeholders: string[] = [
        "все для Хайлин",
        "Сьем тебя",
        "Поиск по английскому или русскому",
        "Поищи слова",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % placeholders.length)
        },1500)

        return () => clearInterval(interval)
    },[]);

    return (
        <>
            <div className="sticky top-4 z-20">
                <input
                    type="search"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder={placeholders[placeholderIndex]}
                    aria-label="Поиск"
                    className="w-full rounded-full border border-white/10 bg-white/[0.06] px-6 py-4 text-center text-lg
                     text-ink shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition
                     placeholder:text-zinc-500 focus:border-accent/60 focus:bg-white/[0.09] focus:outline-none"
                />
            </div>

            <p className="mb-8 mt-5 min-h-5 text-sm text-mute">
                {filtered.length} из {words.length}
            </p>

            {filtered.length === 0 ? (
                <p className="rounded-3xl border border-white/10 bg-white/[0.04] py-12 text-mute backdrop-blur-xl">
                    Ничего не найдено. Попробуй другое слово.
                </p>
            ) : (
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {filtered.map(([en, ru]) => {
                        const isCopied = copied === en;
                        return (
                            <motion.li
                                key={en}
                                initial={{opacity:100,y:200}}
                                whileInView={{opacity:1,y:0}}
                                viewport={{once:true, amount:0.1}}
                                transition={{
                                    duration:0.4,
                                    ease: "easeOut"
                                }}
                            >
                                    <button
                                        onClick={() => copy(en)}
                                        className={`group relative block w-full cursor-pointer overflow-hidden rounded-3xl border px-6 py-6
                    backdrop-blur-xl transition duration-300 motion-reduce:transition-none
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
                    ${
                                            isCopied
                                                ? "border-accent/60 bg-accent/10 shadow-[0_0_40px_-8px_rgba(201,184,255,0.45)]"
                                                : "border-white/10 bg-white/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]"
                                        }`}
                                    >
                                    <span
                                        aria-hidden
                                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60"
                                    />
                                        <span
                                            className={`block text-[clamp(1.4rem,4.5vw,1.9rem)] font-medium leading-tight tracking-tight transition-colors ${
                                                isCopied ? "text-accent" : "text-ink"
                                            }`}
                                        >
                    {en}
                  </span>
                                        <span className="mt-2 block text-[17px] leading-snug text-mute transition-colors group-hover:text-zinc-300">
                    {isCopied ? "Скопировано" : ru}
                  </span>
                                    </button>
                            </motion.li>
                        );
                    })}
                </ul>
            )}
        </>
    );
}