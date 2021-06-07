import { FC } from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

export const Footer: FC = () => (
    <footer className="w-full h-72 bg-gray flex flex-col justify-around items-center text-gray-400">
        <div className="w-80 flex justify-around mt-4">
            <SocialIcon url="https://discord.gg/S4PJDwk" />
            <SocialIcon url="https://github.com/saltysimulations" bgColor="white" />
            <SocialIcon url="https://twitter.com/Salty_Sim" />
            <SocialIcon url="https://facebook.com/Salty_Sim" />
            <SocialIcon url="https://youtube.com/saltysimulations" />
        </div>
        <div className="text-xs md:text-lg flex text-center">
            <FooterLink path="/tos" label="Terms of Service" />
            <FooterLink path="/privacy" label="Privacy Policy" />
            <FooterLink path="/coc" label="Code of Conduct" />
            <FooterLink path="https://github.com/saltysimulations/website" label="Source Code" />
        </div>
        <div className="mb-4">© 2021 Salty Simulations</div>
    </footer>
);

type FooterLinkProps = { path: string, label: string };

const FooterLink: FC<FooterLinkProps> = ({ path, label }) => (
    <Link href={path}>
        <a className="mx-4 hover:underline"> {label}</a>
    </Link>
);
