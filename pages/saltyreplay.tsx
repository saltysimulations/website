import { FC } from "react";
import Image from "next/image";

const SaltyReplay: FC = () => (
    <section className="w-full h-screen bg-gray-800 flex flex-col lg:flex-row lg:justify-around justify-center gap-y-12 items-center text-white">
        <div className="font-raleway text-7xl md:text-7.5xl min-w-max mx-10 text-center lg:text-left">
            <h1>replays.</h1>
            <h1 className="text-frenchviolet"><span className="text-amethyst">red</span>
                <span className="text-celeste">ef</span>ined.</h1>
        </div>
        <div className="mx-10 max-w-lg lg:max-w-full">
            <Image src="/png/saltyreplay.png" width={900} height={554.07} className=""/>
        </div>
        <div className="absolute bottom-0 text-gray-500 my-10">
            <h4>Coming sometime between now and the future</h4>
        </div>
    </section>
);

export default SaltyReplay;
