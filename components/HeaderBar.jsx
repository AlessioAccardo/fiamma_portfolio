"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Playwrite_AU_QLD, Bebas_Neue, Luckiest_Guy, Permanent_Marker, Roboto_Slab } from "next/font/google";
import { useState, useEffect } from "react";


// SCEGLIERE UNO DI QUESTI FONT PER IL TITOLO
const playwriteAU = Playwrite_AU_QLD({
    weight: "400",
    subsets: ['latin']
})
const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ['latin']
})

const robotoSlab = Roboto_Slab({
    subsets: ['latin']
})


function HeaderBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const number = "+393665029938";

    function call(phoneNumber) {
        window.location.href = `tel:${phoneNumber}`;
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        // Aggiungo listener su scroll
        window.addEventListener('scroll', handleScroll);
    }, [isScrolled]);

    return (
        <div className="relative">
            {/* Header principale */}
            <header className={`${robotoSlab.className} w-full py-6 px-10 md:py-6 md:px-30 lg:py-6 lg:px-30 flex items-center justify-between fixed top-0 left-0 ${isScrolled ? "bg-[#da291c]" : "bg-transparent"} font-bold backdrop-blur-md z-20 transform transition-all duration-300 ease-in-out ${isOpen ? "-translate-x-full" : "translate-x-0"}`}>
                <Link href={"/"} className="flex items-baseline justify-center gap-4">
                    <Logo className="text-[#ffc72c] w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"  />
                    <h1 className={`${bebasNeue.className} text-[#ffc72c] text-4xl sm:text-5xl`}>
                        Fiamma
                    </h1>
                </Link>

                <Link href="/#chi" className={`hidden lg:flex justify-center items-center text-center text-xl px-5 py-2 border text-white border-transparent rounded-2xl ${!isScrolled ? "hover:opacity-70" : "hover:bg-[#da291c] hover:opacity-80"} transition-all duration-300 active:opacity-40 uppercase`}>who I am</Link>
                <Link href={"/offer"} className={`hidden lg:flex justify-center items-center text-center text-xl px-5 py-2 border text-white border-transparent rounded-2xl ${!isScrolled ? "hover:opacity-70" : "hover:bg-[#da291c] hover:opacity-80"} transition-all duration-300 active:opacity-40 uppercase`}>what i offer</Link>
                <Link href="" onClick={() => { call(number) }} className={`hidden lg:flex justify-center items-center text-center text-xl px-5 py-2 border text-white border-transparent rounded-2xl ${!isScrolled ? "hover:opacity-70" : "hover:bg-[#da291c] hover:opacity-80"} transition-all duration-300 active:opacity-40 uppercase`}>contact me</Link>
                <Link href={"/menu"} className={`hidden lg:flex justify-center items-center text-center text-xl px-5 py-2 border ${isScrolled ? "bg-white border-[#da291c]  hover:bg-[#da291c] text-[#da291c] hover:text-[#fff] " : "border-transparent text-white hover:bg-white hover:text-[#da291c]"} rounded-2xl transition-all duration-300 active:opacity-80 uppercase`}>gallery</Link> 

                <button className="lg:hidden px-4" onClick={toggle}>
                    <i className={`fa-solid fa-bars text-2xl sm:text-3xl ${isScrolled ? "text-white" : "text-[#ccc]"}`} />
                </button>
            </header>

            {/* Menu Mobile */}
            <div className={`${robotoSlab.className} text-[#da291c] py-6 px-6 sm:py-8 sm:px-12 fixed inset-0 bg-white flex flex-col gap-20 z-10 transform transition-transform duration-300 ease-in-out ${isOpen ? "-translate-x-0" : "translate-x-full"} font-semibold`}>
                <button onClick={toggle} className="text-slate-500 self-end text-xl px-4 pt-2 uppercase">
                    Chiudi <i className="fa-regular fa-circle-xmark text-xl"/>
                </button>

                <nav className="flex flex-col items-end-safe gap-6 px-10">
                    <Link onClick={toggle} href={"/offer"} className="transition-opacity duration-100 ease-in-out active:opacity-20 text-2xl uppercase">What I Offer</Link>
                                        <Link href="" className="transition-opacity duration-100 ease-in-out active:opacity-20 text-2xl uppercase" onClick={() => {
                        toggle();
                        call(number);
                    }}>Contact Me</Link>
                    <Link href={"/menu"} onClick={toggle} className="transition-opacity duration-100 ease-in-out active:opacity-20 text-2xl uppercase">Gallery</Link>
                    <Link onClick={toggle} href="/#chi" className="transition-opacity duration-100 ease-in-out active:opacity-20 text-2xl uppercase">Who I Am</Link>
                    <Link href={"/"} onClick={toggle} className="transition-opacity duration-100 ease-in-out active:opacity-20 text-2xl uppercase">Home</Link>
                </nav>
            </div>
        </div>
    );
}

export default HeaderBar;