import BannerCoin from "@/app/components/shared/coins/bannerCoin";
import CheckText from "../components/UI/CheckText";


const CheckList = () => {
    return (
        <>
            <main className={`bg-black min-h-screen overflow-hidden`}>
                <CheckText />
                <BannerCoin />
            </main>
        </>
    )
}


export default CheckList
