import WaButton from "@/components/buttons/waButton/WaButton";
import HeroSection from "@/components/heroSection/HeroSection";
import Loader from "@/components/loader/Loader";
import NavBar from "@/components/navbar/Navbar";
import { usePageLoader } from "@/hooks/usePageLoader";
import { useEffect } from "react";
import imgSection1 from "@/assets/imgSection1.jpeg";
import Footer from "@/components/footer/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { services } from "@/data/services";
import AutoPlay from "embla-carousel-autoplay";
import mision from "@/assets/mision.png";
import vision from "@/assets/vision.png";
import { useNavigate } from "react-router";
import { useWidthScreen } from "@/hooks/useWidthScreen";
export default function Index() {
    const { loading, startLoading, stopLoading } = usePageLoader();
    const navigate = useNavigate();
    const isMobile = useWidthScreen();


    useEffect(() => {
        startLoading();

        setTimeout(() => stopLoading(), 500);

    }, [startLoading, stopLoading]);
    return (
        <>
            <Loader isVisible={loading} />
            <NavBar />
            <HeroSection />
            <WaButton />

            <section className="max-w-7xl px-4  mx-auto">
                <article className="grid grid-cols-12 gap-4">
                    <div data-aos="fade-right" className="col-span-12 md:col-span-6">
                        <h2 className="text-center text-[#1c64f2] text-3xl font-semibold">¿Buscas servicios de Enfemería a domicilio En Medellín?</h2>
                        <p className="mt-15 text-center text-lg">En EnfermerosSalusVida te ofrecemos <strong>atención profesional y humana directamente en tu hogar. </strong> Contamos con cobertura en varias zonas del área metropolitana del Valle de Aburrá, incluyendo <strong> Envigado, Sabaneta, Bello, Itagüí y La Estrella</strong>, para estar siempre cerca de ti cuando más nos necesites.</p>
                    </div>
                    <div data-aos="fade-left" className="col-span-12 md:col-span-6">
                        <center>
                            <img src={imgSection1} className="rounded-2xl" width={300} alt="Enfemería a domicilio" />
                        </center>
                    </div>
                </article>
                <article>
                    <div data-aos="fade-up" className="mb-20">
                        <h2 className="text-center text-[#1c64f2] text-3xl font-semibold mt-10">Nuestros servicio de enfemería a domicilio</h2>
                        <p className="text-center mt-10">
                            En <strong>Enfermeros SalusVida</strong> ofrece atención de enfermería profesional directamente en tu hogar, con respuesta rápida y <strong>disponibilidad los 7 días de la semana.</strong> Contamos con un equipo de enfermeros y enfermeras domiciliarias capacitados para brindar un cuidado humano, seguro y especializado.
                        </p>
                        <p className="text-center mt-5">
                            Confía en <strong>Enfermeros SalusVida</strong>, tu aliado en salud domiciliaria, donde la experiencia y el compromiso se unen para cuidar de ti y de los tuyos.

                        </p>
                    </div>
                    <Carousel data-aos="fade-down" opts={{ loop: true }} className="w-full " plugins={[
                        AutoPlay({
                            delay: 4000
                        })
                    ]} orientation="horizontal">
                        <CarouselContent className="h-111">
                            {
                                Object.keys(services).map((service, idx) =>
                                    <CarouselItem onClick={() => navigate(`/servicios/${services[service].url}`)} key={idx} className="pl-7 md:basis-1/2 lg:basis-1/3 cursor-pointer">
                                        <center>
                                            <img src={services[service].img} className="rounded-2xl w-90  transition-all duration-500 md:hover:w-100" />
                                        </center>
                                        <h3 className="ml-3 text-center text-2xl md:text-lg font-semibold text-[#1c64f2] break-all whitespace-normal">Servicio de {services[service].title}</h3>
                                        <p className="text-center block md:hidden">(Tap para ver más)</p>
                                    </CarouselItem>
                                )
                            }
                        </CarouselContent>
                        {
                            !isMobile && (
                                <>
                                    <CarouselPrevious className="cursor-pointer" />
                                    <CarouselNext className="cursor-pointer" />
                                </>
                            )
                        }
                    </Carousel>
                </article>

                <article className="mt-20">
                    <div className="grid grid-cols-12 gap-2 ">
                        <div data-aos="fade-right" className="col-span-12 md:col-span-6">
                            <h2 className="text-5xl font-semibold text-center md:text-left text-[#1c64f2]">Nuestra Misión</h2>
                            <p className="mt-5 text-center md:text-left">
                                En <strong>Enfermeros SalusVida</strong> brindamos servicios de enfermería a domicilio con calidad humana, profesionalismo y compromiso. Nuestra misión es cuidar la salud y el bienestar de cada paciente, ofreciendo una atención cálida, confiable y personalizada en la comodidad de su hogar.
                            </p>
                        </div>
                        <div data-aos="fade-left" className="col-span-12 md:col-span-6">
                            <center>
                                <img src={mision} className="rounded-2xl" width={300} alt="Imagen misión" />
                            </center>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 mt-10">
                        <div data-aos="fade-right" className="col-span-12 md:col-span-6 md:block hidden">
                            <center>
                                <img src={vision} className="rounded-2xl mt-5 md:mt-0" width={300} alt="Imagen visión" />
                            </center>
                        </div>
                        <div data-aos="fade-left" className="col-span-12 md:col-span-6">
                            <h2 className="text-5xl font-semibold text-center md:text-left text-[#1c64f2]">Nuestra Visión</h2>
                            <p className="mt-5 text-center md:text-left">
                                Ser reconocidos en el <strong>área metropolitana del Valle de Aburrá</strong> como un referente en servicios de enfermería a domicilio, distinguiéndonos por la excelencia, la empatía y la confianza que generamos en cada uno de nuestros pacientes y sus familias.
                            </p>
                        </div>
                        <div data-aos="fade-right" className="col-span-12 md:col-span-6 md:hidden block">
                            <center>
                                <img src={vision} className="rounded-2xl mt-5 md:mt-0" width={300} alt="Imagen visión" />
                            </center>
                        </div>
                    </div>
                </article>
            </section>
            <Footer />
        </>
    );
}