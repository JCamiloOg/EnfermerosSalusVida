import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "@/assets/logoPng.png";
import { faWhatsapp, faFacebook, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="text-center bg-[#ffffff] py-10 mt-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <Link to="/" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900">
                <img src={logo} className="h-12 mr-3 sm:h-9 scale-300" alt="SalusVida logo" />
                Enfermeros &nbsp; <span className="text-[#1c64f2]"> SalusVida</span>
            </Link>

            <span className="block text-sm text-center text-gray-500">© {new Date().getFullYear()}
                &nbsp;   Enfermeros SalusVida
            </span>

            <ul className="flex justify-center mt-5 space-x-5">
                <li>
                    <a href="#" className="text-[#2568ad] hover:text-[#1b4875]">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[#fb005b] hover:text-[#961243]">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-800 hover:text-gray-900">
                        <FontAwesomeIcon icon={faTiktok} size="lg" />
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[#00d757] hover:text-[#06933e]">
                        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                    </a>
                </li>
            </ul>
        </footer>
    );
}