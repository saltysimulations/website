import { FC } from "react";

export const TextHeader: FC<{ text: string }> = ({ text }) => (
    <h2 className="text-4xl pb-4 border-b-2 border-gray-700 font-raleway">
        {text}
    </h2>
);
