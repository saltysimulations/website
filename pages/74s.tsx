import { FC } from "react";
import { Header } from "../components/74S/Header";

const _74S: FC = () => {
    return (
        <>
            <Header />
            <section className="w-full text-white bg-gradient-to-r from-frenchviolet via-amethyst to-celeste">
                <div className="h-32 flex items-center justify-center">
                    <h1 className="text-5xl font-raleway">features</h1>
                </div>
                <div className="w-full h-96 flex text-center divide-x divide-gray-600">
                    <div className="w-full h-96 flex text-center">
                        <div className="w-1/2 h-full bg-cover bg-center" style={{backgroundImage: "url(/png/74s/displays.png)"}} />
                        <div className="w-1/2 h-full bg-gray-800 flex justify-center items-center">
                            <div className="w-2/3">
                                <h2 className="text-3xl">Lorem ipsum dolor sit amet</h2>
                                <p className="text-lg mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-96 flex text-center">
                    <div className="w-1/2 h-full bg-gray flex justify-center items-center">
                        <div className="w-2/3">
                            <h2 className="text-3xl">Lorem ipsum dolor sit amet</h2>
                            <p className="text-lg mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="w-1/2 h-full bg-cover bg-center" style={{backgroundImage: "url(/png/74s/displays.png)"}} />
                </div>
            </section>
        </>
    );
};

export default _74S;