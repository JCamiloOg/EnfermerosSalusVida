import type { CSSProperties } from "react";
import "./socialButton.css";

import "./socialButton.css";
import { Fa, Ig, Tt, Wa } from "./socialSvg";
import { useWidthScreen } from "@/hooks/useWidthScreen";

interface CSSVars extends CSSProperties {
    "--color": string;
    "--letterColor": string;
}

interface Props {
    theme: "wa" | "fa" | "ig" | "tt"
}

export default function SocialButton({ theme }: Props) {
    const isMobile = useWidthScreen();


    const themes = {
        wa: {
            text: "WhatsApp",
            color: "#25d366",
            Svg: Wa
        },
        fa: {
            text: "Facebook",
            color: "#2176ff",
            Svg: Fa
        },
        ig: {
            text: "Instagram",
            color: "#fb0364",
            Svg: Ig
        },
        tt: {
            text: "Tik Tok",
            color: "#010101",
            Svg: Tt
        }
    };

    const { Svg, color, text } = themes[theme];



    return (
        <button className={`btn-blank flex! gap-2 text-left md:px-20! py-10! px-5! `} style={{ "--color": color, "--letterColor": isMobile ? "white" : "black" } as CSSVars} >
            <Svg />
            <span className={`text-4xl mt-3 font-bold ${isMobile && "text-white!"}`}>{text}</span>
        </button>
    );
}