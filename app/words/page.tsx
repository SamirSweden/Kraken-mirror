
import WordList from "@/app/words/WordList";
import { words } from "@/data/words";
import WordNavbar from "@/app/components/shared/header/WordNavbar";

export const metadata = {
    title: "Для Хайлин💕",
};

export default function WordsPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#09070d] text-white">

            {/* Halloween background */}
            <div className="pointer-events-none fixed inset-0 z-0">


                {/* Halloween pumpkins */}

                {/* Top left pumpkin */}
                <div className="absolute left-[8%] top-[22%] rotate-[-15deg] text-4xl opacity-50 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)] animate-pulse">
                    🎃
                </div>

                {/* Top right pumpkin */}
                <div className="absolute right-[9%] top-[38%] rotate-[15deg] text-3xl opacity-40 drop-shadow-[0_0_12px_rgba(249,115,22,0.5)]">
                    🎃
                </div>

                {/* Bottom left pumpkin */}
                <div className="absolute bottom-[12%] left-[8%] rotate-[12deg] text-5xl opacity-35 drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]">
                    🎃
                </div>

                {/* Bottom right pumpkin */}
                <div className="absolute bottom-[20%] right-[10%] rotate-[-12deg] text-4xl opacity-45 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)] animate-pulse">
                    🎃
                </div>

                {/* Tiny pumpkin decoration */}
                <div className="absolute left-[48%] top-[12%] text-xl opacity-30">
                    🎃
                </div>


                {/* Purple glow */}
                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/15 blur-[120px]" />

                {/* Orange glow */}
                <div className="absolute -right-40 top-80 h-96 w-96 rounded-full bg-orange-600/10 blur-[120px]" />

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-1/2 h-80 w-96 -translate-x-1/2 rounded-full bg-purple-900/20 blur-[120px]" />

                {/* Cobweb - top left */}
                <svg
                    className="absolute left-0 top-0 w-48 opacity-25 md:w-72"
                    viewBox="0 0 250 250"
                    fill="none"
                >
                    <path
                        d="M0 0 L250 0 M0 0 L0 250 M0 0 L250 250 M0 0 L125 250 M0 0 L250 125"
                        stroke="#c4a1ff"
                        strokeWidth="1"
                    />
                    <path
                        d="M40 0 Q40 40 0 40 M90 0 Q90 90 0 90 M140 0 Q140 140 0 140 M190 0 Q190 190 0 190"
                        stroke="#c4a1ff"
                        strokeWidth="1"
                    />
                </svg>

                {/* Cobweb - top right */}
                <svg
                    className="absolute right-0 top-0 w-48 rotate-90 opacity-20 md:w-72"
                    viewBox="0 0 250 250"
                    fill="none"
                >
                    <path
                        d="M0 0 L250 0 M0 0 L0 250 M0 0 L250 250 M0 0 L125 250 M0 0 L250 125"
                        stroke="#fb923c"
                        strokeWidth="1"
                    />
                    <path
                        d="M40 0 Q40 40 0 40 M90 0 Q90 90 0 90 M140 0 Q140 140 0 140 M190 0 Q190 190 0 190"
                        stroke="#fb923c"
                        strokeWidth="1"
                    />
                </svg>

                {/* Floating decorations */}
                <span className="absolute left-[12%] top-[35%] text-2xl opacity-20">
                    🕸️
                </span>

                <span className="absolute right-[12%] top-[65%] text-2xl opacity-20">
                    🕷️
                </span>

                <span className="absolute bottom-[15%] left-[20%] text-xl opacity-20">
                    ✦
                </span>

            </div>

            {/* Content */}
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
