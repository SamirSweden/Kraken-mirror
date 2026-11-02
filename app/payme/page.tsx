import PaymeNavbar from "@/app/components/shared/header/PaymeNavbar";
import BannerPayme from "@/app/components/shared/banners/BannerPayme";
import InstallApps from "@/app/components/shared/banners/InstallApps";


const PaymePage = () => {
    return <>
        <div className={'bg-white min-h-screen'}>
            <PaymeNavbar />
            <BannerPayme />
            <InstallApps />
        </div>
    </>
}

export default PaymePage

