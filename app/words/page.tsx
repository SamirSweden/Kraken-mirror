
import WordList from "@/app/words/WordList";
import { words } from "@/data/words";
import WordNavbar from "@/app/components/shared/header/WordNavbar";

export const metadata = {
    title: "Для Хайлин💕",
};

export default function WordsPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#09070d] text-white">

            <div className="relative z-10">

                <WordNavbar />

                <main className="mx-auto max-w-2xl px-6 pb-32 pt-24 text-center">

                    <div className="mb-5 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.4em] text-orange-300/70">
                        <span>✦</span>
                        Trick or Treat
                        <span>✦</span>
                    </div>

                    <h1 className="bg-gradient-to-r from-purple-200 via-white to-orange-200 bg-clip-text text-[clamp(3rem,10vw,5.5rem)] font-light leading-none tracking-tighter text-transparent">
                        For Haylin 💕
                        <div className="mb-5 mt-4 flex justify-center gap-3 text-xl opacity-70">
                            <span>🕯️</span>
                            <span>🎃</span>
                            <span>🕸️</span>
                            <span>🎃</span>
                            <span>🦇</span>
                        </div>
                    </h1>

                    <p className="mb-12 mt-5 text-[17px] text-yellow-500">
                        {/*Нажми на фразу, чтобы скопировать*/}
                        Сьем ням-нямку
                    </p>

                    <WordList words={words} />

                    <p className="mt-16 text-xs tracking-widest text-purple-200/30">
                        MADE WITH LOVE 🕸️
                    </p>

                </main>
            </div>
        </div>
    );
}
