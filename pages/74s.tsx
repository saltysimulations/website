import { FC } from "react";
import { Header } from "../components/74S/Header";
import { Feature } from "../components/74S/Feature";

const _74S: FC = () => {
    return (
        <>
            <Header />
            <section className="w-full text-white bg-gradient-to-r from-frenchviolet via-amethyst to-celeste">
                <div className="h-32 flex items-center justify-center">
                    <h1 className="text-5xl font-raleway">features</h1>
                </div>
                <div className="flex flex-col gap-y-2 md:block">
                    <Feature
                        title="Lorem ipsum dolor sit amet"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                        side="left"
                    />
                    <Feature
                        title="Lorem ipsum dolor sit amet"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                        side="right"
                    />
                    <Feature
                        title="Lorem ipsum dolor sit amet"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                        side="left"
                    />
                    <Feature
                        title="Lorem ipsum dolor sit amet"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                        side="right"
                    />
                </div>
            </section>
        </>
    );
};

export default _74S;
