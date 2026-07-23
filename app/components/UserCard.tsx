import {useRouter} from "next/navigation";


const UserCard = () => {

    const router = useRouter();
    const me = "ryan";
    const she = "haylin";

    const roomID = [me,she].sort().join("_");
    return(
        <>

            <div className="fixed bottom-4 inset-x-0 mx-auto max-w-md px-4">
                <div className="backdrop-blur-md bg-white/20 rounded-full shadow-lg p-3 flex justify-center items-center transition-all duration-300 hover:bg-white/50 cursor-pointer">
                    <button
                        className={`
                `}
                        onClick={() => router.push(`/call/${roomID}`)}
                    >
                        Позвонить Раяну
                    </button>
                </div>
            </div>

        </>
    )
}


export default UserCard;


