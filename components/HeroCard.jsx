import Image from "next/image";

function HeroCard(props) {
    const { src, selfImage, pImage, h1, p1, h2, p2, width, height, flex } = props;
    return (
        <div className={`flex flex-col ${flex} w-full max-w-full justify-center items-center text-center`}>
            <div className="flex flex-col w-full max-w-full lg:w-fit relative lg:px-15 items-center justify-center gap-6 lg:gap-8 mb-10 lg:mb-0">
                <Image
                    src={src}
                    width={500}
                    height={500}
                    alt="chef pic"
                    className={`${width} ${height} border-0 rounded-full ${selfImage} shadow-2xl`}
                />
                <p className="text-3xl lg:text-4xl">{pImage}</p>
            </div>
            <div className="flex flex-col w-full self-center">
                <h1 className="text-2xl">{h1}</h1>
                <p>{p1}</p>
                <h1 className="pt-10 text-2xl">{h2}</h1>
                <p>{p2}</p>
            </div>
        </div>
    );
}

export default HeroCard;