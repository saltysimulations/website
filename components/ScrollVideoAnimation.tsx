import { FC, MutableRefObject, useEffect, useRef } from "react";

type ScrollVideoAnimationProps = { parentRef: MutableRefObject<HTMLElement> };

export const ScrollVideoAnimation: FC<ScrollVideoAnimationProps> = ({ parentRef }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const frameCount = 47;
    let imageArray;

    const loadImages = (): HTMLImageElement[] => {
        let images = [];
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            images.push(img);
        }
        return images;
    };

    useEffect(() => {
        imageArray = loadImages();
    }, [])

    const currentFrame = (index: number): string => (
        `/png/anim/test_anim${index.toString().padStart(5, '0')}.png`
    );

    const updateImage = (index: number): void => {
        const context = canvasRef.current.getContext("2d");
        context.drawImage(imageArray[index], 0, 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY;
            const maxScrollTop = parentRef.current.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
            console.log(frameIndex);
            requestAnimationFrame(() => updateImage(frameIndex));
        })
    }, []);


    return <canvas ref={canvasRef} width="1920" height="1080" className="fixed w-full max-h-screen max-w-screen mt-20"/>;
};
