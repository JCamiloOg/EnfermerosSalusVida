import WaButton from "@/components/buttons/waButton/WaButton";
import Loader from "@/components/loader/Loader";
import NavBar from "@/components/navbar/Navbar";
import { services as data, type Services } from "@/data/services";
import { usePageLoader } from "@/hooks/usePageLoader";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import Page404 from "./404";
import Footer from "@/components/footer/Footer";

interface Params extends Record<string, string> {
    servicio: string;
}

interface Service {
    title: string;
    description: string;
    content: {
        number: number;
        text: string;
    }[];
    img: string;
    url: string;
    img1: string;
    img2: string;
}

export default function Services() {
    const [error, setError] = useState<boolean>(false);
    const { loading, startLoading, stopLoading } = usePageLoader();
    const { servicio } = useParams<Params>();
    const [services, setServices] = useState<Service>();


    const setData = useCallback(() => {
        startLoading();
        if (!servicio) return setError(true);

        setServices(data[servicio]);

        if (!data[servicio]) return setError(true);

        setTimeout(() => stopLoading(), 500);
    }, [servicio, startLoading, stopLoading]);


    useEffect(() => {
        setData();
    }, [startLoading, stopLoading, setData]);

    useEffect(() => {
        window.scrollTo(0, 0);
        startLoading();
        setData();
        setTimeout(() => stopLoading(), 500);
    }, [servicio, startLoading, stopLoading, setData]);

    if (error) return <Page404 />;

    return (
        <>
            <Loader isVisible={loading} />
            <NavBar />
            <WaButton />
            <section className="container px-4 mx-auto pt-30">
                <h2 data-aos="fade-up" className="text-center text-4xl font-bold text-[#1c64f2] md:mt-20 mt-5">{services?.title}</h2>
                <article className="grid grid-cols-12 gap-4 md:mt-20 mt-10">
                    <div data-aos="fade-right" className="col-span-12 md:col-span-6">
                        <img src={services?.img1} className="w-100 rounded-2xl" alt="" />
                    </div>
                    <div data-aos="fade-left" className="col-span-12 md:col-span-6">
                        <p
                            className="font-medium text-lg"
                            dangerouslySetInnerHTML={{ __html: services?.description ?? "" }}
                        >

                        </p>
                    </div>
                </article>
                <article className="rid grid-cols-12 gap-4 md:mt-20 mt-10">
                    <div className="col-span-12 md:col-span-6">
                        <ol>
                            {
                                services?.content?.map((item, idx) => (
                                    <li key={idx}>
                                        {
                                            item.text
                                        }
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <img src={services?.img2} className="w-100 rounded-2xl" alt="" />

                    </div>
                </article>
            </section>
            <Footer />
        </>
    );
}