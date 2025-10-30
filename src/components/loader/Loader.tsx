import { useEffect, useState } from "react";
import "./loader.css";

interface Props {
    isVisible: boolean;
}

export default function Loader({ isVisible }: Props) {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        if (!isVisible) {
            const timeOut = setTimeout(() => setHidden(true), 500);

            return () => clearTimeout(timeOut);
        } else {
            setHidden(false);
        }
    }, [isVisible]);

    if (hidden) return null;

    return (
        <div className={`absolute ${isVisible ? "opacity-100" : "opacity-0"} transition-all duration-300  bg-[#eeeeee] w-full h-full z-50  `}>
            <div className="loader absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
        </div>
    );
}