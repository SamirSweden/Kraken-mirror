
import Header from "@/app/components/shared/header/Header"
import Banner from "@/app/components/Banner";
import { redirect } from "next/navigation";

export default function Home() {
    redirect("/words");
    // return (
    //     <main className={'min-h-screen'}>
    //         <Header />
    //         <Banner />
    //     </main>
    // );
}