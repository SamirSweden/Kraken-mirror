
import WordList from "@/app/words/WordList";
import { words } from "@/data/words";
import WordNavbar from "@/app/components/shared/header/WordNavbar";




export const metadata = { title: "Для Хайлин💕" };

export default function WordsPage() {
    return (
        <>
            <WordNavbar />
            <main className="mx-auto max-w-2xl px-6 pb-32 pt-24 text-center">

                <h1 className="text-[clamp(3rem,10vw,5.5rem)] font-light leading-none tracking-tighter">
                    For Haylin 💕
                </h1>
                <p className="mb-12 mt-5 text-[17px] text-mute">
                    Нажми на фразу, чтобы скопировать
                </p>
                <WordList words={words} />
            </main>
        </>
    );
}