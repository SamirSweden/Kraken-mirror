"use client"


import {useAuth} from "@/app/context/AuthContext";
import {api} from "@/app/lib/api";

export default function ProtectedPage(){
    const {user,logout} = useAuth();

    const fetchProtected = async () => {
        try {
            const data = await api("/protected");
            console.log(data)
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>
            <div className="p-8">
                <p className="text-xl mb-4">Hello, {user?.full_name}</p>

                <div className="flex gap-4">
                    <button
                        onClick={fetchProtected}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Protected page
                    </button>

                    <button
                        onClick={logout}
                        className="px-4 py-2 bg-red-600 text-white capitalize rounded"
                    >
                        logout
                    </button>
                </div>
            </div>
        </>
    )
}





