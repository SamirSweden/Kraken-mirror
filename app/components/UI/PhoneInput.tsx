import axios from "axios"
import { toast } from "react-toastify";
import {useState} from "react";
import {SendHorizontal} from "lucide-react";


const PhoneInput = () => {

    const [phone , setPhone] = useState("");
    const [loading , setLoading] = useState(false)

    const handleSubmit = async () => {
        const cleanPhone = phone.trim();

        if(!cleanPhone || cleanPhone === "+371"){
            toast.warning("Please enter a valid phone number");
            return;
        }

        try {
            setLoading(true);

            const {data} = await axios.post(
                "http://127.0.0.1:8000/api/phone",
                {phone: cleanPhone},
                {timeout: 1000}
            );

            toast.success(data.message || "✅ Phone saved successfully!")
            setPhone("+371");
        }catch (error: unknown){
            if(axios.isAxiosError(error)) {
                const message =
                    error.response?.data?.detail ||
                    (error.code === "ECONNABORTED"
                        ? "Request timeout!"
                        : "Server connection failed!");
                toast.error(message);
            }else{
                toast.error("Something went wrong");
            }
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="relative flex items-center w-full rounded-xl border bg-white focus-within:border-cyan-600 overflow-hidden">

                <span className="px-3.5 py-2.5  text-zinc-600 font-semibold border-r">
                    +371
                </span>

                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="XX XXX XXX"
                    className="w-full  py-4.5 px-3.5 text-black  outline-none"
                />
                <button
                    disabled={loading}
                    onClick={handleSubmit}
                    className={'absolute right-2 h-10 w-10 text-lg flex items-center justify-center bg-black  py-3 px-4 text-center capitalize outline-none rounded-xl'}
                >
                    {loading ? (
                        <span className="animate-spin">⟳</span>
                    ): (
                        <SendHorizontal />
                    )}
                </button>
            </div>

        </>
    )
}


export default PhoneInput;
