import { LinkButton } from "../components/LinkButton";

const Index = () => (
    <section className="w-full h-screen bg-home-background bg-center flex flex-col items-center justify-center text-white">
        <div className="font-raleway">
            <h2 className="text-3xl md:text-4xl text-center md:text-left relative top-7 right-16 md:right-0">meet the</h2>
            <h1 className="text-8xl md:text-9xl leading-none text-frenchviolet text-center">74<span className="text-celeste">S</span></h1>
            <h3 className="text-lg md:text-xl mt-5">Free. Open Source. Feature Packed.</h3>
        </div>
        <div className="flex">
            <LinkButton path="/" name="Download" bg="frenchviolet"/>
            <LinkButton path="/74s" name="Read More" bg="gray"/>
        </div>
    </section>
);

export default Index;
