
import Header from "@/app/components/shared/header/Header"
import Banner from "@/app/components/Banner";

export default function Home() {

    return (
        <main className={'bg-black min-h-screen'}>
            <Header />
            <Banner />
        </main>
    );
}