import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const NavBar: FC = () => {
    return (
        <nav className="w-full h-20 bg-gray flex flex-row justify-between">
            <div className="flex ml-8">
                <Image
                    src="/svg/salty-logo-white.svg"
                    width={130}
                    height={70}
                />
            </div>
            <div className="flex flex-row justify-around items-center text-white text-lg mr-4">
                <NavItem label="Home" path="/"/>
                <NavItem label="Projects" path="/projects"/>
                <NavItem label="Documentation" path="/documentation"/>
                <NavItem label="About" path="/about"/>
            </div>
        </nav>
    );
};

type NavItemProps = { label: string, path: string };

const NavItem: FC<NavItemProps> = ({ label, path }) => (
    <Link href={path}>
        <a className="m-4 hover:text-celeste transition duration-400">{label}</a>
    </Link>
);