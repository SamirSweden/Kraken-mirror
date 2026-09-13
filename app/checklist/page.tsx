import BannerCoin from "@/app/components/shared/coins/bannerCoin";
import CheckText from "../components/UI/CheckText";
import ProtectedPage from "@/app/dashboard/page";


const CheckList = () => {
    return (
        <>
            <main className={`bg-black min-h-screen overflow-hidden`}>
                <CheckText />
                <BannerCoin />
                <ProtectedPage />
            </main>
        </>
    )
}


export default CheckList
