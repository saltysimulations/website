import Image from "next/image";
import Link from "next/link";

export const NavBar: React.FC = () => {
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
                <Link href="/home">
                    <a className="m-4">Home</a>
                </Link>
                <Link href="/home">
                    <a className="m-4">Projects</a>
                </Link>
                <Link href="/home">
                    <a className="m-4">Documentation</a>
                </Link>
                <Link href="/home">
                    <a className="m-4">About</a>
                </Link>
            </div>
        </nav>
    );
};
