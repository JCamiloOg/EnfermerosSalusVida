import Index from "@/pages/Index";
import { Route, Routes } from "react-router";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </>
    );
}