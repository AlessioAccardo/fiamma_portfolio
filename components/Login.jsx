"use client"

import { Fugaz_One } from "next/font/google";
import { useState } from "react";
import Image from "next/image";

const roboto = Fugaz_One({
    weight: ["400"],
    subsets: ["latin"]
})

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

    function submit() {
        if (!email || !email.includes("@") || !email.includes(".")) {
            setIsEmailInvalid(true);
            return;
        }

        if (!password || password.length < 8) {
            setIsPasswordInvalid(true);
            setPassword("");
            return
        }
        console.log(email, password);

    }

    return (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 px-4 w-full max-w-[1000px] mx-auto">
            <h1 className={`${roboto.className} text-4xl text-slate-950 pb-4`}>Login</h1>
            <input value={email} type="text" placeholder="Email" className="border border-violet-300 rounded-full px-3 py-2 sm:py-3 w-full max-w-[400px] outline-none focus:border-violet-900 mx-auto" 
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            onClick={() => {
                setIsEmailInvalid(false);
                setIsPasswordInvalid(false);
            }} 
            />
            <input value={password} type="password" placeholder="Password" className="border border-violet-300 rounded-full px-3 py-2 sm:py-3 w-full max-w-[400px] outline-none focus:border-violet-900 mx-auto" 
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            onClick={() => {
                setIsEmailInvalid(false);
                setIsPasswordInvalid(false);
            }} 
            />
            <p className="text-red-600">{isEmailInvalid ? "Inserire una email valida" : (isPasswordInvalid ? "Inserire una password non inferiore a 8 caratteri" : "")}</p>
            <button className={`${roboto.className} border-2 border-violet-500 hover:bg-violet-500 w-full max-w-[400px] px-3 py-2 sm:py-3 rounded-full duration-200 text-slate-950 hover:text-shadow-black mx-auto`} onClick={submit}>Accedi</button>
            <p className="mt-5 text-center mx-auto"> OPPURE </p>
            <div className="p-3 sm:p-5 flex flex-col w-full mx-auto items-center justify-center gap-2 text-center">
                <button className="flex flex-row justify-center items-center gap-2 border border-slate-800 hover:bg-slate-800 hover:text-white duration-200 px-3 py-2 sm:py-3 rounded-full w-full max-w-[400px] text-center">
                    <div className="flex justify-center items-start">
                        <Image 
                        src="/google-color-svgrepo-com.svg"
                        width={30}
                        height={30}  
                        alt="Google"
                    />
                    </div>
                    <div className="w-full max-w-[85%] text-center items-center"><p>Continua con Google</p></div>   
                </button>
                <button className="flex flex-row justify-center items-center gap-2 border border-slate-800 hover:bg-slate-800 hover:text-white duration-200 px-3 py-2 sm:py-3 rounded-full w-full max-w-[400px] text-center">
                    <div className="flex justify-center items-start">
                        <Image 
                        src="/apple-color-svgrepo-com.svg"
                        width={30}
                        height={30}  
                        alt="Apple"
                    />
                    </div>
                    <div className="w-full max-w-[85%] text-center items-center"><p>Continua con Apple</p></div>   
                </button>
            </div>
        </div>
    );
}

export default Login;