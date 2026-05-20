import Image from "next/image";
import HeroCard from "./HeroCard";
import { Bebas_Neue, Permanent_Marker } from "next/font/google";


const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ['latin']
});

const permanentMarker = Permanent_Marker({
    subsets: ["latin"],
    weight: "400"
});

const p11 = `
            Sono uno Chef privato di cucina tradizionale siciliana per B&B ed eventi esclusivi.
            Porto la vera Sicilia direttamente a casa vostra, trasformando una cena in un’esperienza culturale, sensoriale e narrativa.
            Utilizzo esclusivamente materie prime fresche e rigorosamente siciliane, selezionate con cura tra piccoli produttori locali, per offrire piatti autentici della tradizione siciliana
            `
const p12 = `
            I'm a private chef specializing in traditional Sicilian cuisine for B&Bs and exclusive events.
            I bring the authentic Sicily directly to your home, transforming a dinner into a cultural, sensorial, and narrative experience.
            I use only fresh, Sicilian ingredients, carefully selected from small local producers, to offer authentic traditional Sicilian dishes.
            `

const p21 = `
            Non è una cena. È un percorso. 
            Un’esperienza culinaria siciliana che inizia con un aperitivo al tramonto e ti accompagna, passo dopo passo, attraverso i sapori più autentici dell’isola, fino ad arrivare al dolce.
            Ogni portata racconta un luogo, una tradizione, una storia.
            Dalla strada di Palermo alle coste di Catania, passando per i profumi di Siracusa e la pasticceria nobile di Noto.
            `
const p22 = `
            It's not a dinner. It's a journey.
            A Sicilian culinary experience that begins with a sunset aperitif and takes you, step by step, through the island's most authentic flavors, all the way to dessert.
            Each course tells the story of a place, a tradition, a story.
            From the streets of Palermo to the coast of Catania, passing through the aromas of Syracuse and the noble pastries of Noto.
            `

function Hero() {
    return (
        <div className="flex flex-col w-full max-w-full justify-center items-center text-white text-lg gap-20 lg:gap-25 pb-20">
            <div className="hidden lg:flex flex-col relative w-full overflow-hidden min-h-screen justify-center items-center shadow-2xl">
                <Image
                    src={"/foto_fiamma.jpg"}
                    fill={true}
                    className="object-cover z-1 brightness-70"
                    alt="pasta image"
                />  
            
                <div className="w-full max-w-full flex flex-col justify-center items-center text-center absolute z-2 text-6xl ">
                    <p className={`text-[#ffc72c] ${bebasNeue.className} text-9xl uppercase`}>FIAMMA</p>
                    <p className={`${permanentMarker.className} text-7xl px-6 uppercase`}>CHEF PRIVATO</p>
                </div>                
            </div>

            <div className="flex flex-col relative w-full overflow-hidden min-h-screen justify-center items-center lg:hidden shadow-2xl">
                <Image
                    src={"/foto_fiamma.jpg"}
                    fill={true}
                    className="object-cover z-1 brightness-60"
                    alt="pasta image"
                />
                <div className="w-full max-w-full flex flex-col justify-center items-center text-center absolute z-2 text-4xl px-4">
                    <p className={`text-[#ffc72c] ${bebasNeue.className} text-7xl md:text-9xl uppercase`}>FIAMMA</p>
                    <p className={`${permanentMarker.className} text-4xl md:text-6x uppercase`}>CHEF PRIVATO</p>
                </div>                 
            </div>
            
            <div id="chi" className="flex flex-col w-[90%] max-w-[90%] gap-30 lg:gap-25 justify-center items-center text-black text-center scroll-mt-[7rem]">
                <HeroCard src={"/gallery/img21.jpg"} selfImage={"lg:self-start"} pImage={"Chef Fiamma"} h1={"ITA 🇮🇹"} p1={p11} h2={"ENG 🇬🇧"} p2={p12} width={"w-[40vh]"} flex={"lg:flex-row"}/>

                <HeroCard src={"/burroalici.jpg"} selfImage={"lg:self-start"} pImage={"La Nostra Pasta"} h1={"ITA 🇮🇹"} p1={p21} h2={"ENG 🇬🇧"} p2={p22} width={"w-[35vh]"} height={"h-[27vh]"} flex={"lg:flex-row-reverse"} />
            </div>
        </div>
    );
}

export default Hero;