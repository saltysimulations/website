import {FC, useRef} from "react";
import { ScrollVideoAnimation } from "../components/ScrollVideoAnimation";

const _74S: FC = () => {
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full flex justify-center bg-black" style={{height: "200vh"}} ref={divRef}>
            <ScrollVideoAnimation parentRef={divRef} />
        </div>
    );
};

export default _74S;