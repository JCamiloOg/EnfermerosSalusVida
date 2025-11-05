import SocialButton from "@/components/buttons/socialButton/SocialButton";
import WaButton from "@/components/buttons/waButton/WaButton";
import Loader from "@/components/loader/Loader";
import NavBar from "@/components/navbar/Navbar";
import { usePageLoader } from "@/hooks/usePageLoader";
import { useEffect } from "react";

export default function Contacto() {
    const { loading, startLoading, stopLoading } = usePageLoader();

    useEffect(() => {
        startLoading();

        setTimeout(() => stopLoading(), 500);

    }, [startLoading, stopLoading]);
    return (
        <>
            <Loader isVisible={loading} />
            <NavBar />
            <WaButton />

            <main className="md:pt-23 pt-22">
                <section className="">
                    <div className="flex justify-between w-full bg-[#2568ad] md:px-20 py-10 px-5 gap-5 md:gap-0 mx-auto" data-aos="fade-up">
                        <h2 className="md:text-4xl text-xl font-bold text-white" >Contáctanos</h2>
                        <div className="text-white">
                            <h4 className="md:text-xl text-lg font-bold">EMAIL:</h4>
                            <h5 className="md:text-lg text-sm font-semibold wrap-break-word">info@enfermerosSalusVida.com</h5>
                        </div>
                    </div>
                    <div className="w-full md:bg-[#25d366]/50 bg-[#25d366]  mx-auto overflow-hidden" data-aos="fade-left">
                        <div className="text-white w-full ">
                            <SocialButton theme="wa" />
                        </div>
                    </div>
                    <div className="w-full md:bg-[#fb0364]/50 bg-[#fb0364]  mx-auto overflow-hidden" data-aos="fade-right">
                        <div className="text-white w-full ">
                            <SocialButton theme="ig" />
                        </div>
                    </div>
                    <div className="w-full md:bg-[#2176ff]/50 bg-[#2176ff]  mx-auto overflow-hidden" data-aos="fade-left">
                        <div className="text-white w-full ">
                            <SocialButton theme="fa" />
                        </div>
                    </div>
                    <div className="w-full md:bg-[#010101]/50 bg-[#010101]  mx-auto overflow-hidden" data-aos="fade-right" data-aos-offset="10">
                        <div className="text-white w-full ">
                            <SocialButton theme="tt" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}