import Image from "next/image";
import Link from "next/link";
import { FC, useState, useEffect } from "react";

export const NavBar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolledDown, setIsScrolledDown] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsScrolledDown(window.scrollY > 1);
        });
    }, []);

    return (
        <nav
            className={`w-full h-20 fixed ${
                isScrolledDown || isOpen ? "bg-gray" : "bg-transparent"
            } transition duration-400 flex flex-row justify-between items-center z-50`}
        >
            <div className="flex ml-8">
                <Image src="/svg/salty-logo-white.svg" width={130} height={70} />
            </div>
            <div
                className={`md:visible md:opacity-100 flex md:flex-row flex-col md:static absolute ${
                    isOpen ? "opacity-100" : "invisible opacity-0"
                } top-20 w-full md:w-auto justify-around items-center text-white bg-gray md:bg-transparent text-lg mr-4 transition-opacity duration-400`}
            >
                <NavItem label="Home" path="/" />
                <NavItem label="74S" path="/74s" />
                <NavItem label="SaltyReplay" path="/saltyreplay" />
                <NavItem label="Documentation" path="/documentation" />
                <NavItem label="About" path="/about" />
            </div>
            <Hamburger onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))} isOpen={isOpen} />
        </nav>
    );
};

type NavItemProps = { label: string; path: string };

const NavItem: FC<NavItemProps> = ({ label, path }) => (
    <Link href={path}>
        <a className="m-3 md:m-4 hover:text-celeste transition duration-400">{label}</a>
    </Link>
);

type HamburgerProps = { onClick: () => void; isOpen: boolean };

const Hamburger: FC<HamburgerProps> = ({ onClick, isOpen }) => (
    <div
        className={`md:hidden w-9 h-9 flex flex-col justify-between cursor-pointer transform ${
            isOpen ? "rotate-90" : ""
        } transition-transform duration-400 m-8`}
        onClick={onClick}
    >
        {Array.from(Array(3), (_, i) => (
            <div className={`w-full h-1/6 ${isOpen ? "bg-celeste" : "bg-white"} rounded`} key={i} />
        ))}
    </div>
);
