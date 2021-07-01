import { FC } from "react";

type ImageSide = "left" | "right";

type FeatureProps = { title: string; content: string; side: ImageSide };

const FeatureText: FC<FeatureProps> = ({ title, content, side }) => (
    <div
        className={`md:w-1/2 h-1/2 md:h-full ${
            side === "left" ? " bg-gray-800" : "bg-gray"
        } flex justify-center items-center`}
    >
        <div className="w-4/5">
            <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>
            <p className="text-sm md:text-md lg:text-lg mt-6">{content}</p>
        </div>
    </div>
);

const FeatureImage: FC = () => (
    <div
        className="md:w-1/2 h-1/2 md:h-full bg-cover bg-center"
        style={{
            backgroundImage: "url(/png/74s/displays.png)",
        }}
    />
);

export const Feature: FC<FeatureProps> = (props) => (
    <>
        <div className="w-full h-screen md:h-96 flex text-center">
            <div className="hidden md:flex flex-row text-center">
                {props.side === "left" ? (
                    <>
                        <FeatureImage />
                        <FeatureText {...props} />
                    </>
                ) : (
                    <>
                        <FeatureText {...props} />
                        <FeatureImage />
                    </>
                )}
            </div>
            <div className="md:hidden flex flex-col">
                <FeatureImage />
                <FeatureText {...props} />
            </div>
        </div>
    </>
);
