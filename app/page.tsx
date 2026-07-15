import Profile from "@/app/components/Profile";
import Header from "@/app/components/shared/header/Header";


export default function Home() {
    return (
        <>
            <main className={'bg-black min-h-screen '}>
                <Header/>
                <Profile />
            </main>
        </>
    )
}


