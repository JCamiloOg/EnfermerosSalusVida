import bgImage from "@/assets/young-handsome-physician-medical-robe-with-stethoscope.jpg";
import imageCenter from "@/assets/imageCenter.png";
import imageLeft from "@/assets/imageLeft.png";
import imageRight from "@/assets/imageRight.png";
import { Link } from "react-router";

export default function HeroSection() {
    return (
        <section className="mb-20">
            <div className={` bg-center bg-cover bg-no-repeat min-h-dvh text-white py-20`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})` }}>
                <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                    <div data-aos="fade-left" className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                        <h1 className="text-3xl md:text-5xl p-2 text-[#1c64f2] tracking-loose">Enfermeros Salusvida</h1>
                        <h2 className="text-3xl text-[#a4cafe] md:text-4xl leading-relaxed md:leading-snug mb-2">Donde el cuidado se convierte en cariño</h2>
                        <p className="text-sm md:text-base text-[#728db1] mb-4 font-bold">Te cuidamos con calidez y profesionalismo. Desde Medellín, brindamos un servicio humano y cercano para tu bienestar.</p>
                        <Link to="/"
                            className="bg-transparent hover:bg-[#76a9fa] text-[#76a9fa] hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-[#76a9fa] hover:border-transparent transition-all duration-300">
                            Contactanos</Link>
                    </div>
                    <div data-aos="fade-right" className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
                        <div className="h-48 flex flex-wrap content-center justify-center">
                            <div className="hidden xl:block">
                                <img
                                    className="inline-block mt-28"
                                    width={200}
                                    src={imageLeft}
                                    alt="Left image"
                                />
                            </div>
                            <div className="p-8 md:p-0">
                                <img
                                    className="inline-block mt-24 md:mt-0" width={300}
                                    src={imageCenter}
                                    alt="Center image"
                                />
                            </div>
                            <div className="hidden lg:block">
                                <img
                                    className="inline-block mt-28"
                                    width={200}
                                    src={imageRight}
                                    alt="Right image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}