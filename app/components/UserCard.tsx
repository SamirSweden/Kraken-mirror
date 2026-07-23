import {useRouter} from "next/navigation";


const UserCard = () => {

    const router = useRouter();
    const me = "ryan";
    const she = "haylin";

    const roomID = [me,she].sort().join("_");
    return(
        <>
            <div className={' flex items-center max-[425px]:w-full'}>
                <button
                    className={`max-[425px]:w-full
                    border-none outline-none text-lg text-center text-white
                    bg-linear-to-br from-sky-400 via-blue-600 to-violet-600 
                    cursor-pointer
                    py-2 px-5 rounded-xl  transition-transform duration-200 hover:-translate-y-1
                `}
                    onClick={() => router.push(`/call/${roomID}`)}
                >
                    Позвонить Раяну
                </button>
            </div>

        </>
    )
}


export default UserCard;


