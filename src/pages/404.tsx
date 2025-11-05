import Loader from "@/components/loader/Loader";
import { usePageLoader } from "@/hooks/usePageLoader";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Page404() {
    const navigate = useNavigate();
    const { loading, startLoading, stopLoading } = usePageLoader();

    useEffect(() => {
        startLoading();

        setTimeout(() => stopLoading(), 500);
    }, [startLoading, stopLoading]);
    return (
        <>
            <Loader isVisible={loading} />
            <div className="bg-linear-to-r from-blue-200 to-blue-100">
                <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-8">
                        <div className="border-t border-gray-200 text-center pt-8">
                            <h1 className="text-9xl font-bold text-[#2568ad]">404</h1>
                            <h1 className="md:text-6xl text-3xl font-medium py-8">oops! Pagina no encontrada.</h1>
                            <p className="md:text-2xl text-xl pb-8 px-12 font-medium">Oops! Parece que intenta ingresar a una página que no existe.</p>
                            <button onClick={() => navigate(-1)} className="bg-linear-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-md mr-6 cursor-pointer transition-colors duration-300">
                                Atrás
                            </button>
                            <button onClick={() => navigate("/contacto")} className="bg-linear-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-950 text-white font-semibold px-6 py-3 rounded-md cursor-pointer transition-colors duration-300">
                                Contactanos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}