"use client"

import Logo from "./Logo";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ['latin']
})

function Footer() {

    const number = "+393665029938";

    function call(phoneNumber) {
        window.location.href = `tel:${phoneNumber}`;
    }

    return (
        <>
            <footer className="flex flex-col justify-center items-center text-center w-full p-2 text-lg bg-gradient-to-t from-[#ffc72c] to-[#da291c] border-0 shadoww md:px-10">
                <div className="flex flex-col flex-1 md:flex-row justify-evenly items-center w-full gap-20 lg:gap-12">
                    <div className="flex flex-col gap-2 lg:gap-3 items-center lg:items-start justify-center">
                        <div className={`${bebasNeue.className} flex gap-2 items-baseline text-[#ffc72c]`}>
                            <Logo className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]" />
                            <h1 className="uppercase text-3xl">fiamma</h1>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 lg:gap-4 items-center justify-center">
                        <div className="flex justify-center items-center relative gap-5">
                            <a href="https://www.facebook.com/ubabbiopalermo" target="_blank">
                                <Image
                                    src={"/facebook.png"}
                                    width={50}
                                    height={50}
                                    alt="facebook"
                                    className="transition-opacity duration-300 hover:opacity-70 active:opacity-40 cursor-pointer"
                                />
                            </a>
                            
                            <a href="https://www.instagram.com/ubabbio/" target="_blank">
                                <Image
                                    src={"/instagram_icon.png"}
                                    width={40}
                                    height={40}
                                    alt="instagram"
                                    className="transition-opacity duration-300 hover:opacity-70 active:opacity-40 cursor-pointer"
                                />
                            </a>
                            
                            <a href="">
                                <Image
                                    src={"/tiktok.png"}
                                    width={45}
                                    height={45}
                                    alt="tiktok"
                                    className="transition-opacity duration-300 hover:opacity-70 active:opacity-40 cursor-pointer"
                                />
                            </a>
                        </div>
                    </div>
                
                    <div className="flex flex-col gap-2 items-center justify-center relative cursor-pointer active:opacity-60 transition-opacity">
                        <a href="https://www.instagram.com/infinitytecnologyy/" target="_blank">
                            <p>Made By</p>
                            <Image
                                src={"/mio_logo.webp"}
                                width={80}
                                height={80}
                                alt="logo creatore web"
                                className="w-[120px] lg:w-[80px] border-0 rounded-full"
                            />
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <p className=""><i className="fa-regular fa-copyright"/> 2025 | Fiamma</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;