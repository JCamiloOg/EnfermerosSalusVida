import Page404 from "@/pages/404";
import Contacto from "@/pages/Contacto";
import Index from "@/pages/Index";
import QuienesSomos from "@/pages/QuienesSomos";
import Services from "@/pages/Services";
import { Route, Routes } from "react-router";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/quienes-somos" element={<QuienesSomos />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/servicios/:servicio" element={<Services />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    );
}