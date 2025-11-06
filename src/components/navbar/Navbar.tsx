import { Link, NavLink } from "react-router";
import NavButton from "../buttons/navButton/NavButton";
import logo from "@/assets/logoPng.png";
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useClickOutSide } from "@/hooks/useClickOutSide";
import { useMobileNav } from "@/hooks/useMobileNav";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from "../ui/navigation-menu";
import { services } from "@/data/services";
import { useLocation } from "react-router";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Button } from "../ui/button";

export default function NavBar() {
    const { isOpen, close, toggle } = useMobileNav();
    const location = useLocation();
    const navMobileRef = useRef<HTMLDivElement>(null);
    const buttonMobileRef = useRef<HTMLButtonElement>(null);
    const [openCollapsible, setOpenCollapsible] = useState(false);


    const baseClass = "font-semibold pl-3 pr-4  md:p-0 rounded text-lg ";
    const inactiveClass = "text-[#2568ad] hover:text-[#2c93ca]";
    const activeClass = "md:text-[#2c93ca]";

    const baseClassMobile = "block pl-3 pr-4 py-2 rounded font-semibold text-lg w-full";
    const inactiveClassMobile = "text-blue-700";
    const activeClassMobile = "bg-blue-700! text-white!";

    const isActiveServices = location.pathname.startsWith("/servicios");

    useEffect(() => {
        close();
    }, [location, close]);

    useClickOutSide([navMobileRef, buttonMobileRef], close);

    return (
        <nav className="border-gray-200 px-2 lg:px-10 bg-white py-6 shadow-lg fixed top-0 w-full z-49 ">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <Link to={"/"} className="shrink-0 flex items-center cursor-pointer">
                    <img src={logo} className="h-10 scale-250 sm:scale-250 md:scale-260 lg:scale-300 xl:scale-300 2xl:scale-300 w-auto" alt="" />
                    <span className="self-center text-lg font-semibold whitespace-nowrap ml-4"> <span className="text-[#2568ad]">Salus</span><span className="text-[#2c93ca]">Vida</span></span>
                </Link>
                <div className="flex md:order-2">
                    <div className="relative mr-3 md:mr-0 hidden md:block">
                        <NavButton />
                    </div>
                    <button ref={buttonMobileRef} onClick={toggle} data-collapse-toggle="mobile-menu-3" type="button" className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center p-1" aria-controls="mobile-menu-3" aria-expanded={isOpen ? "true" : "false"}>
                        <FontAwesomeIcon icon={faBars} size="lg" color="#2568ad" />
                    </button>
                </div>
                <div className="hidden md:flex justify-between gap-6 items-center w-full md:w-auto md:order-1">
                    <NavLink className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`} end to={"/"}>
                        Inicio
                    </NavLink>
                    <NavLink className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`} to="/quienes-somos">
                        Quienes somos
                    </NavLink>
                    <NavigationMenu className="list-none">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={`${baseClass} ${isActiveServices ? activeClass : inactiveClass} hover:text-[#2c93cabg-transparent! data-[state=open]:text-[#2c93ca] data-[state=open]:bg-transparent! bg-transparent!`}>Servicios</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="p-3 w-[300px]">
                                    {
                                        Object.keys(services).map((service, idx) => (
                                            <li key={idx}>
                                                <NavigationMenuLink className="mb-3 hover:bg-transparent">
                                                    <NavLink className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`} to={`/servicios/${services[service].url}`}>{services[service].title}</NavLink>
                                                </NavigationMenuLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenu>
                    <NavLink className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`} to="/contacto">
                        Contacto
                    </NavLink>
                </div>
            </div>

            {/* Mobile */}

            <div ref={navMobileRef} className={`transition-all duration-500 ease-in-out md:hidden overflow-y-auto ${isOpen ? "max-h-[500px] opacity-100 pointer-events-auto" : " max-h-0 opacity-0 pointer-events-none"}`}>
                <div className="px-2 pt-2 space-y-1">
                    <ul className="mt-5">
                        <li className="mb-3">
                            <NavLink to={"/"} end className={({ isActive }) => `${baseClassMobile} ${isActive ? activeClassMobile : inactiveClassMobile}`} >
                                Inicio
                            </NavLink>

                        </li>
                        <li className="mb-3">
                            <NavLink to={"/quienes-somos"} className={({ isActive }) => `${baseClassMobile} ${isActive ? activeClassMobile : inactiveClassMobile}`}>
                                Quienes somos
                            </NavLink>
                        </li>
                        <li className="mb-3">
                            <Collapsible open={openCollapsible} onOpenChange={setOpenCollapsible}>
                                <CollapsibleTrigger asChild className="w-full group/collapsible">
                                    <Button className={` bg-transparent! ${baseClassMobile} ${isActiveServices ? activeClassMobile : inactiveClassMobile} flex justify-between data-[state=open]:bg-blue-700! data-[state=open]:text-white`}>
                                        <span>Servicios</span>
                                        <FontAwesomeIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" icon={faChevronRight} />
                                    </Button>
                                </CollapsibleTrigger>
                                <div className={`transition-all duration-500 overflow-y-auto ${openCollapsible ? "h-90 opacity-100" : "h-0 opacity-0"}`}>
                                    <CollapsibleContent>
                                        <ul className="p-4">
                                            {
                                                Object.keys(services).map((service, idx) => (
                                                    <li key={idx} className="mb-4">
                                                        <NavLink to={`/servicios/${services[service].url}`} className={({ isActive }) => `${baseClassMobile} ${isActive ? activeClassMobile : inactiveClassMobile + "text-black!"}`}>
                                                            {services[service].title}
                                                        </NavLink>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </CollapsibleContent>
                                </div>
                            </Collapsible>
                        </li>
                        <li className="mb-3">
                            <NavLink to={"/contacto"} className={({ isActive }) => `${baseClassMobile} ${isActive ? activeClassMobile : inactiveClassMobile}`}>
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}