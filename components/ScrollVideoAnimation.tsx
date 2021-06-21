import {FC, useRef, useEffect, MutableRefObject} from "react";

type ScrollVideoAnimationProps = { parentRef: MutableRefObject<HTMLElement> };

export const ScrollVideoAnimation: FC<ScrollVideoAnimationProps> = ({ parentRef }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const frameCount = 47;

    const preloadImages = () => {
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
        }
    };

    const currentFrame = (index: number): string => (
        `/png/anim/test_anim${index.toString().padStart(5, '0')}.png`
    );

    const updateImage = (index: number, img: HTMLImageElement): void => {
        const context = canvasRef.current.getContext("2d");
        img.src = currentFrame(index);
        context.drawImage(img, 0, 0);
    }

    useEffect(() => preloadImages);

    useEffect(() => {
        const img = new Image();
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY;
            const maxScrollTop = parentRef.current.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
            console.log(frameIndex);
            requestAnimationFrame(() => updateImage(frameIndex + 1, img));
        })
    }, []);


    return <canvas ref={canvasRef} width="1920" height="1080" className="fixed w-full max-h-screen max-w-screen mt-20"/>;
};
