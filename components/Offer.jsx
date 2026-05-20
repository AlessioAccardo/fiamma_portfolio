import Image from "next/image";
import { Bebas_Neue, Permanent_Marker } from "next/font/google";


const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ['latin']
});

const permanentMarker = Permanent_Marker({
    subsets: ["latin"],
    weight: "400"
});

const phoneNumber = "+393665029938";

function Offer() {
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
                                <p className={`${permanentMarker.className} text-7xl px-6 uppercase`}>MY OFFER</p>
                            </div>                
                        </div>
            
                        <div id="offer" className="flex flex-col relative w-full overflow-hidden min-h-screen justify-center items-center lg:hidden shadow-2xl">
                            <Image
                                src={"/foto_fiamma.jpg"}
                                fill={true}
                                className="object-cover z-1 brightness-60"
                                alt="pasta image"
                            />
                            <div className="w-full max-w-full flex flex-col justify-center items-center text-center absolute z-2 text-4xl px-4">
                                <p className={`text-[#ffc72c] ${bebasNeue.className} text-7xl md:text-9xl uppercase`}>FIAMMA</p>
                                <p className={`${permanentMarker.className} text-4xl md:text-6x uppercase`}>MY OFFER</p>
                            </div>                 
                        </div>
            <div className="flex flex-col w-full max-w-full justify-center items-center text-black text-lg bg-white gap-5">
                <div className="flex flex-col border-2 border-[#ffc72c] p-10 rounded-4xl gap-5 w-full max-w-[90%]">
                    <div>
                        <h1 className="text-3xl uppercase">Base Experience 🇬🇧</h1>
                        <p>L’esperienza prevede 5 portate, dall’aperitivo fino al dolce, con una bottiglia di vino siciliano ogni due persone</p>
                    </div>
                    
                    <div>
                        <h1 className="text-3xl uppercase">Esperienza Base 🇮🇹</h1>
                        <p>The experience includes five courses, from appetizers to dessert, with a bottle of Sicilian wine for every two people</p>
                    </div>
                    <p className="text-xl">Price: €100 p.p.</p>
                </div>

                <div className="flex flex-col border-2 border-[#da291c] p-10 rounded-4xl gap-5 w-full max-w-[90%]">
                    <div>
                        <h1 className="text-3xl uppercase">✨ Premium Experience - The most authentic Sicily 🇬🇧</h1>
                        <p>
                            An even richer tasting experience, designed for those who want to experience Sicily fully, deeply, and without compromises. <br />
                            In addition to the five courses of the basic experience, the premium experience includes:
                        </p>
                        <ul className="list-disc pl-5">
                            <li> Traditional welcome entrée</li>
                            <li> An extra off-menu course, seasonally-based</li>
                            <li> Superior wine selection: one bottle for every two people of sought-after labels</li>
                            <li> A small final treat from Sicilian tradition along with dessert</li>
                        </ul>
                        <p>A longer, more narrated, more engaging journey</p>
                    </div>
                    
                    <div>
                        <h1 className="text-3xl uppercase">✨ Esperienza Premium — La Sicilia più autentica 🇮🇹</h1>
                        <p>Un percorso degustativo ancora più ricco, pensato per chi vuole vivere la Sicilia in modo completo, profondo, senza compromessi. <br />
                            Oltre alle 5 portate del percorso base, l’esperienza premium include:</p>
                        <ul className="list-disc pl-5">
                            <li> ⁠Entrée di benvenuto della tradizione</li>
                            <li> ⁠Una portata extra fuori menu, legata alla stagionalità</li>
                            <li> ⁠Selezione di vini superiore: una bottiglia ogni 2 persone di etichette ricercate</li>
                            <li> ⁠Piccola coccola finale della tradizione siciliana insieme al dolce</li>
                        </ul>
                        <p>Un percorso più lungo, più narrato, più coinvolgente</p>
                    </div>
                    <p className="text-xl">Price: €140 p.p.</p>
                </div>
                <a href="https://wa.me/393665029938" target="_blank" className="uppercase text-4xl w-full max-w-[90%] text-center p-3 bg-[#da291c] text-white rounded-2xl hover:opacity-90 transition-all duration-300">contact me 🥂</a>
            </div>
        </div>
    );
}

export default Offer;