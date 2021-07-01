import { FC } from "react";

export const Header: FC = () => (
    <header className="h-screen w-full bg-gray-800 flex text-white">
        <div className="w-full md:w-5/12 flex items-center justify-center divide-x divide-gray-400 z-30">
            <div className="text-center">
                <h1 className="text-8xl md:text-8xl text-frenchviolet font-raleway">
                    74<span className="text-celeste">S</span>
                </h1>
                <h2 className="text-2xl md:text-3xl">
                    The Ultimate 747 Experience
                </h2>
            </div>
        </div>
        <div
            className="hidden md:block w-0 md:w-7/12 h-full"
            style={{
                backgroundPosition: "18% 30%",
                backgroundImage: "url(/png/74s/74s-header.png)",
                clipPath: "polygon(0 100%, 100% -370%,100% 100%,0 100%)",
            }}
        />
        <div
            className="md:hidden w-full h-full absolute"
            style={{
                backgroundPosition: "23%",
                backgroundImage: "url(/png/74s/74s-header-dark.png)",
            }}
        />
    </header>
);
