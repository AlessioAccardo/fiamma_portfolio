"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Permanent_Marker, Bebas_Neue } from "next/font/google";
import Gallery from "./Gallery";

const permanentMarker = Permanent_Marker({
    subsets: ["latin"],
    weight: "400"
});
``
const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ['latin']
});


function Menu() {
    const [show, setShow] = useState(false);
    const rafRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const update = () => {
        const currentY = window.scrollY || window.pageYOffset || 0;
        const middleScreen = window.innerHeight / 2;
        setShow(currentY > middleScreen);
        };

        const onScroll = () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(update);
        };

        update(); // inizializza listener
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

   
    return (
        <div className="flex flex-col w-full max-w-full justify-center items-center text-black text-lg bg-white">
            <div className="hidden lg:flex flex-col relative w-full overflow-hidden text-white min-h-screen justify-center items-center shadow-2xl">
                <Image
                    src={"/foto_fiamma.jpg"}
                    fill={true}
                    className="object-cover z-1 brightness-60"
                    alt="pasta image"
                />

                <div className="w-full max-w-full flex flex-col justify-center items-center text-center absolute z-2 text-6xl gap-5">
                    <p className={`text-[#ffc72c] ${bebasNeue.className} text-9xl`}>FIAMMA</p>
                    <p className={`${permanentMarker.className} text-7xl`}>GALLERY</p>
                </div>
            </div>
            <div className="flex flex-col relative w-full overflow-hidden min-h-screen justify-center items-center lg:hidden shadow-2xl">
                <Image
                    src={"/foto_fiamma.jpg"}
                    fill={true}
                    className="object-cover z-1 brightness-60"
                    alt="pasta image"
                />
                <div className="w-full max-w-full flex flex-col justify-center items-center text-center text-white absolute z-2 px-4">
                    <p className={`text-[#ffc72c] ${bebasNeue.className} text-7xl md:text-9xl`}>FIAMMA</p>
                    <p className={`${permanentMarker.className} text-4xl md:text-6xl uppercase`}>GALLERY</p>
                </div>                 
            </div>
            <Gallery />
        </div>
    );
}

export default Menu;