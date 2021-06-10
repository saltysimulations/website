import { FC } from "react";
import Link from "next/link";

type LinkButtonProps = { path: string; name: string; bg: string };

export const LinkButton: FC<LinkButtonProps> = ({ path, name, bg }) => (
    <div className="mx-3 my-7">
        <Link href={path}>
            <a className={`bg-${bg}
             py-3 px-6 border-2 border-frenchviolet rounded-3xl text-md hover:bg-celeste hover:text-frenchviolet transition duration-400`}
            >
                {name}
            </a>
        </Link>
    </div>
);
