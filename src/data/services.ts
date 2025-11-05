import administracionMedicamentos from "@/assets/services/administracionMedicamentos/administracionMedicamentos.jpeg";
import img1AdministracionMedicamentos from "@/assets/services/administracionMedicamentos/d5288064-b693-460f-8289-1998143e7f45.png";
import img2AdministracionMedicamentos from "@/assets/services/administracionMedicamentos/01b78293-efd6-47b6-96f5-2e8a0510e15e.png";

import inyectologia from "@/assets/services/inyectologia/inyectologia.png";
import img1Inyectologia from "@/assets/services/inyectologia/823b8bfd-6a51-43f4-93ec-1a42ee7ca465.png";
import img2Inyectologia from "@/assets/services/inyectologia/ff0466aa-b8be-4abb-9696-b4b36d903f8c.png";


import sueroterapia from "@/assets/services/sueroterapia/sueroterapia.png";
import img1sueroterapia from "@/assets/services/sueroterapia/07667cef-78b3-469d-b89f-f40ba5dca9f2.png";
import img2sueroterapia from "@/assets/services/sueroterapia/f137cfa0-3d3d-4661-829f-b7f022354d21.png";

import antibioticos from "@/assets/services/antiobioticosDomicilio/antibioticosDomicilio.png";
import img1Antibioticos from "@/assets/services/antiobioticosDomicilio/226d812d-553c-4955-93d5-7015ca6c03b9.png";
import img2Antibioticos from "@/assets/services/antiobioticosDomicilio/ea4465ec-ee73-475f-b599-1a78467c9d9d.png";

import laboratorioClinico from "@/assets/services/laboratorioClinico/laboratorioClinico.png";
import img1LaboratorioClinico from "@/assets/services/laboratorioClinico/0e5b2f4e-fa4f-41be-b904-f1a300ed8bd9.png";
import img2LaboratorioClinico from "@/assets/services/laboratorioClinico/7aea4894-45b1-41e6-b97d-058deb2a4b93.png";

import bombasDolor from "@/assets/services/bombasDolor/bombasDolor.png";
import img1BombasDolor from "@/assets/services/bombasDolor/220ad18d-69b3-485a-a88c-6ae40234de29.png";
import img2BombasDolor from "@/assets/services/bombasDolor/f71b5196-5822-4011-a287-a16e40117591.png";

import sondaVesical from "@/assets/services/sondaVesical/sondaVesical.png";
import img1SondaVesical from "@/assets/services/sondaVesical/02391d4a-160d-46e4-b5e6-e83ee71eeeb0.png";
import img2SondaVesical from "@/assets/services/sondaVesical/bf0a2fbd-5c7e-46cd-a603-5a5a3fe8c592.png";

export interface Services {
    [key: string]: {
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
}


export const services: Services = {
    "administracion-de-medicamentos": {
        title: "Administración de medicamentos",
        description: "En <strong> Enfermeros SalusVida </strong> ofrecemos el servicio de <strong> administración de medicamentos a domicilio especializado </strong>, garantizando que cada paciente reciba sus tratamientos de manera segura, puntual y supervisada por personal calificado. Nuestro compromiso es brindar una atención humana, responsable y confiable, asegurando el cumplimiento estricto de las indicaciones médicas y el bienestar integral del paciente. <br><br> Con nosotros, la tranquilidad y la salud de quienes más quieres están en manos profesionales. ",
        content: [
            {
                number: 1,
                text: "💉 Aplicación segura de medicamentos por vía oral, intramuscular, intravenosa o subcutánea según la prescripción médica."
            },
            {
                number: 2,
                text: "⏱️ Control y seguimiento de horarios para evitar omisiones o duplicaciones de dosis."
            },
            {
                number: 3,
                text: "👩‍⚕️ Supervisión de posibles reacciones adversas y comunicación inmediata con el médico tratante si es necesario."
            },
            {
                number: 4,
                text: "💧 Educación al paciente y su familia sobre el uso correcto de los medicamentos y cuidados posteriores."
            },
            {
                number: 4,
                text: "❤️ Atención personalizada adaptada a las necesidades y condiciones de cada persona."
            }
        ],
        img: administracionMedicamentos,
        url: "administracion-de-medicamentos",
        img1: img1AdministracionMedicamentos,
        img2: img2AdministracionMedicamentos
    },
    "inyectologia": {
        title: "Inyectología",
        description: "",
        content: [
            {
                number: 1,
                text: ""
            }
        ],
        img: inyectologia,
        url: "inyectologia",
        img1: img1Inyectologia,
        img2: img2Inyectologia
    },
    "sueroterapia": {
        title: "Sueroterapia",
        description: "",
        content: [
            {
                number: 1,
                text: ""
            }
        ],
        img: sueroterapia,
        url: "sueroterapia",
        img1: img1sueroterapia,
        img2: img2sueroterapia
    },
    "antibioticos": {
        title: "Antibióticos a domicilio",
        description: "",
        content: [
            {
                number: 1,
                text: ""
            }
        ],
        img: antibioticos,
        url: "antibioticos",
        img1: img1Antibioticos,
        img2: img2Antibioticos
    },
    "laboratorio-clinico": {
        title: "Laboratorio clínico a domicilio",
        description: "",
        content: [
            {
                number: 1,
                text: ""
            }
        ],
        img: laboratorioClinico,
        url: "laboratorio-clinico",
        img1: img1LaboratorioClinico,
        img2: img2LaboratorioClinico
    },
    "bombas-del-dolor": {
        title: "Bombas del dolor a domicilio",
        description: "",
        content: [
            {
                number: 1,
                text: ""
            }
        ],
        img: bombasDolor,
        url: "bombas-del-dolor",
        img1: img1BombasDolor,
        img2: img2BombasDolor
    },
    "sonda-vesical": {
        title: "Cambio de sonda vesical permanete a domicilio",
        description: "",
        content: [
            {
                number: 1,
                text: ""
            }
        ],
        img: sondaVesical,
        url: "sonda-vesical",
        img1: img1SondaVesical,
        img2: img2SondaVesical
    }
};