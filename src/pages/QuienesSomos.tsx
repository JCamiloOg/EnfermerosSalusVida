import WaButton from "@/components/buttons/waButton/WaButton";
import Loader from "@/components/loader/Loader";
import NavBar from "@/components/navbar/Navbar";
import { usePageLoader } from "@/hooks/usePageLoader";
import { useEffect } from "react";
import quienesSomos from "@/assets/quienesSomos.png";
import mision from "@/assets/mision.png";
import vision from "@/assets/vision.png";
import Footer from "@/components/footer/Footer";
import ContactButton from "@/components/buttons/contactButton/ContactButton";

export default function QuienesSomos() {
    const { loading, startLoading, stopLoading } = usePageLoader();

    useEffect(() => {
        startLoading();

        setTimeout(() => stopLoading(), 500);
    }, [startLoading, stopLoading]);


    return (
        <>
            <Loader isVisible={loading} />
            <WaButton />
            <NavBar />
            <main className="container mx-auto px-4 pt-30 ">
                <section>
                    <article className="bg-[#37b9ff19] p-10 rounded-2xl">
                        <h2 data-aos="fade-left" className="text-5xl font-semibold text-[#1c64f2]">¿Quienes somos?</h2>
                        <p data-aos="fade-right" className="mt-10 font-medium">
                            En <strong>EnfermerosSalusVida</strong> somos un equipo de profesionales en enfermería a domicilio en <strong>Medellín</strong>, dedicados a ofrecer un cuidado de salud integral, humano y de alta calidad directamente en el hogar. Nuestro compromiso es brindar atención personalizada <strong>con empatía, responsabilidad y excelencia profesional</strong>, acompañando a cada paciente y su familia en cada etapa de su proceso de bienestar.
                        </p>
                        <p data-aos="fade-right" className="mt-10 font-medium">
                            Contamos con <strong>enfermeros titulados y con amplia experiencia</strong> en el ámbito domiciliario, capacitados para atender con sensibilidad y profesionalismo a personas mayores, pacientes en recuperación postoperatoria, con enfermedades crónicas o en cuidados paliativos.
                        </p>
                        <p data-aos="fade-right" className="mt-10 font-medium">
                            Nos caracteriza una <strong>atención humana, oportuna y confiable</strong>, adaptada a las necesidades específicas de cada paciente. Extendemos nuestra cobertura a todo <strong>Medellín</strong> y el área metropolitana del <strong>Valle de Aburrá</strong>, incluyendo <strong>Envigado, Itagüí, Sabaneta, Bello y La Estrella</strong>.
                        </p>
                        <p data-aos="fade-right" className="mt-10 font-semibold text-gray-600">
                            &gt; En EnfermerosSalusVida, cuidamos con el corazón y trabajamos cada día para brindar la tranquilidad y confianza que tu salud merece.
                        </p>
                        <p data-aos="fade-right" className="mt-10 font-medium">
                            Con nosotros, no solo eliges un servicio de enfermería a domicilio, eliges <strong>compromiso, cercanía y calidad profesional</strong> desde el primer contacto.
                        </p>
                        <center data-aos="fade-up">
                            <img src={quienesSomos} className="mt-10 md:w-1/2 h-100 object-cover rounded-2xl" alt="Quienes somos imagen" />
                        </center>
                    </article>
                    <article>
                        <div className="grid grid-cols-12 gap-2 mt-20 ">
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
                        <center data-aos="fade-up" className="mt-20">
                            <ContactButton />
                        </center>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}