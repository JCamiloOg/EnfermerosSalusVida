import HeroSection from "@/components/heroSection/HeroSection";
import Loader from "@/components/loader/Loader";
import NavBar from "@/components/navbar/Navbar";
import { usePageLoader } from "@/hooks/usePageLoader";
import { useEffect } from "react";

export default function Index() {
    const { loading, startLoading, stopLoading } = usePageLoader();

    useEffect(() => {
        startLoading();

        setTimeout(() => stopLoading(), 500);

    }, [startLoading, stopLoading]);
    return (
        <>
            <Loader isVisible={loading} />
            <NavBar />
            <HeroSection />
        </>
    );
}