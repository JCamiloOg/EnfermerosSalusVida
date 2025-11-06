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
        description: "En <strong> Enfermeros SalusVida </strong> ofrecemos el servicio de <strong> administración de medicamentos a domicilio especializado </strong>, garantizando que cada paciente reciba sus tratamientos de manera segura, puntual y supervisada por personal calificado. Nuestro compromiso es brindar una atención humana, responsable y confiable, asegurando el cumplimiento estricto de las indicaciones médicas y el bienestar integral del paciente. <br><br> Con nosotros, la tranquilidad y la salud de quienes más quieres están en manos profesionales. <br><br> Nuestro compromiso va más allá de una simple aplicación: buscamos generar tranquilidad tanto para el paciente como para su familia, ofreciendo una atención cercana, humana y responsable. ",
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
                number: 5,
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
        description: "En <strong>Enfermeros SalusVida</strong> ofrecemos el servicio de <strong>inyectología a domicilio especializado</strong>, pensado para brindar comodidad, seguridad y atención profesional sin que el paciente tenga que desplazarse a un centro médico. Nuestro equipo de enfermeros titulados y con amplia experiencia se encarga de aplicar inyecciones de manera precisa, segura y bajo estrictas normas de bioseguridad, garantizando la correcta administración del tratamiento en la tranquilidad del hogar. <br><br> Entendemos que muchos pacientes requieren la aplicación de medicamentos inyectables por prescripción médica, y que hacerlo con la técnica adecuada es esencial para evitar complicaciones, infecciones o molestias innecesarias. Por eso, en <strong>SalusVida</strong> priorizamos la calidad y el trato humano, creando un ambiente de confianza donde cada procedimiento se realiza con cuidado, higiene y total respeto por la comodidad del paciente.",
        content: [
            {
                number: 1,
                text: "💉 Aplicación profesional de inyecciones por vía intramuscular, subcutánea, intravenosa o intradérmica, según las indicaciones médicas."
            },
            {
                number: 2,
                text: "🧴 Cumplimiento estricto de protocolos de asepsia y bioseguridad para prevenir infecciones y garantizar procedimientos seguros."
            },
            {
                number: 3,
                text: "⏱️ Atención puntual y organizada, con registro de cada aplicación y seguimiento continuo del tratamiento."
            },
            {
                number: 4,
                text: "💊 Orientación al paciente y sus familiares sobre cuidados posteriores y observación de posibles efectos secundarios."
            },
            {
                number: 5,
                text: "❤️ Trato humano y empático, enfocado en brindar confianza, bienestar y una experiencia positiva en cada visita."
            }
        ],
        img: inyectologia,
        url: "inyectologia",
        img1: img1Inyectologia,
        img2: img2Inyectologia
    },
    "sueroterapia": {
        title: "Sueroterapia",
        description: "En <strong>Enfermeros SalusVida</strong> ofrecemos el <strong>servicio de sueroterapia a domicilio especializado</strong>, enfocado en proporcionar una reposición rápida y segura de líquidos, vitaminas y minerales directamente en el hogar del paciente. Nuestro equipo de enfermeros profesionales garantiza una aplicación cuidadosa y personalizada, asegurando que cada tratamiento intravenoso se realice bajo las mejores condiciones de higiene, confort y supervisión. <br><br> Nuestro propósito es que cada persona reciba el cuidado que necesita sin salir de casa, con la tranquilidad de estar en manos expertas.",
        content: [
            {
                number: 1,
                text: "💧 Aplicación profesional de sueros intravenosos formulados según las indicaciones médicas o necesidades específicas del paciente."
            },
            {
                number: 2,
                text: "🧪 Supervisión del proceso completo, desde la preparación del equipo hasta el control posterior a la aplicación."
            },
            {
                number: 3,
                text: "⏱️ Monitoreo constante de signos vitales y respuesta del paciente durante todo el procedimiento."
            },
            {
                number: 4,
                text: "👩‍⚕️ Evaluación del estado de hidratación y condiciones generales antes y después del tratamiento."
            },
            {
                number: 5,
                text: "❤️ Atención personalizada, humana y empática, brindando confianza, orientación y acompañamiento continuo al paciente y su familia."
            }
        ],
        img: sueroterapia,
        url: "sueroterapia",
        img1: img1sueroterapia,
        img2: img2sueroterapia
    },
    "antibioticos": {
        title: "Antibióticos a domicilio",
        description: "En <strong>Enfermeros SalusVida</strong> ofrecemos el <strong>ervicio de administración de antibióticos a domicilio especializado</strong>, diseñado para garantizar que cada paciente reciba su tratamiento antimicrobiano de forma <strong>segura, controlada y bajo la supervisión de personal de enfermería calificado</strong>. Sabemos que el cumplimiento adecuado del tratamiento antibiótico es fundamental para una recuperación efectiva, por eso nos encargamos de aplicar y monitorear cada dosis con precisión, asegurando el bienestar del paciente desde la comodidad de su hogar.<br> <br> Nuestro compromiso es brindar un servicio que combine profesionalismo, puntualidad y cuidado humano, permitiendo que el paciente continúe su proceso terapéutico sin la necesidad de desplazarse o exponerse a entornos hospitalarios. <br> <br>Nuestro objetivo es ofrecer un servicio confiable, eficiente y cercano, que contribuya a una recuperación más rápida y segura.",
        content: [
            {
                number: 1,
                text: "💉 Aplicación profesional de antibióticos intravenosos, intramusculares o subcutáneos, según las indicaciones médicas."
            },
            {
                number: 2,
                text: "🧴 Cumplimiento estricto de normas de asepsia y bioseguridad, garantizando procedimientos seguros y libres de infecciones."
            },
            {
                number: 3,
                text: "👩‍⚕️ Monitoreo constante del estado del paciente, detectando posibles reacciones adversas o signos de mejoría."
            },
            {
                number: 4,
                text: "📋 Registro detallado de cada aplicación y seguimiento clínico, para mantener una trazabilidad completa del tratamiento."
            },
            {
                number: 5,
                text: "❤️ Atención empática y personalizada, brindando orientación, acompañamiento y confianza tanto al paciente como a su familia."
            }
        ],
        img: antibioticos,
        url: "antibioticos",
        img1: img1Antibioticos,
        img2: img2Antibioticos
    },
    "laboratorio-clinico": {
        title: "Laboratorio clínico a domicilio",
        description: "En <strong>Enfermeros SalusVida</strong> ofrecemos el servicio de <strong>laboratorio clínico a domicilio especializado</strong>, pensado para brindar comodidad, eficiencia y atención profesional a quienes requieren exámenes médicos sin salir de casa. Nuestro equipo de enfermeros capacitados realiza la <strong>toma de muestras de sangre, orina, heces u otros fluidos biológicos</strong> con total precisión, asegurando la correcta manipulación, conservación y transporte al laboratorio. Todo esto bajo estrictas normas de bioseguridad y garantizando la confiabilidad de los resultados. <br> <br>Nuestro objetivo es facilitar el acceso al diagnóstico médico sin sacrificar la calidad del servicio ni la seguridad del paciente.",
        content: [
            {
                number: 1,
                text: "🧫 Toma profesional de muestras biológicas (sangre, orina, heces, hisopados, entre otros) en el hogar del paciente."
            },
            {
                number: 2,
                text: "🧴 Cumplimiento estricto de protocolos de bioseguridad y asepsia, asegurando un procedimiento limpio y seguro."
            },
            {
                number: 3,
                text: "🚚 Transporte adecuado de las muestras hacia laboratorios certificados, preservando su integridad y calidad."
            },
            {
                number: 4,
                text: "📄 Entrega de resultados en el menor tiempo posible, con posibilidad de envío digital o físico."
            },
            {
                number: 5,
                text: "👩‍⚕️ Orientación y acompañamiento al paciente, explicando el proceso y resolviendo dudas sobre la preparación o cuidados previos."
            },
            {
                number: 6,
                text: "❤️ Atención personalizada y humana, enfocada en brindar confianza, bienestar y comodidad en todo momento."
            }
        ],
        img: laboratorioClinico,
        url: "laboratorio-clinico",
        img1: img1LaboratorioClinico,
        img2: img2LaboratorioClinico
    },
    "bombas-del-dolor": {
        title: "Bombas del dolor a domicilio",
        description: "En <strong>Enfermeros SalusVida</strong> ofrecemos el servicio de <strong>manejo y control de bombas de infusión para el dolor a domicilio</strong>, un acompañamiento especializado orientado a pacientes que requieren <strong>tratamientos analgésicos</strong> continuos mediante dispositivos de infusión programada. Nuestro objetivo es garantizar la administración segura y precisa de los medicamentos para el control del dolor, brindando alivio, bienestar y una mejor calidad de vida desde la comodidad del hogar. <br> <br> Nuestro compromiso es estar presentes en cada etapa, brindando soporte, confianza y tranquilidad tanto al paciente como a su familia.",
        content: [
            {
                number: 1,
                text: "⚕️ Instalación, control y retiro de bombas de infusión para analgesia según indicación médica y tipo de dispositivo."
            },
            {
                number: 2,
                text: "💊 Preparación y administración segura de medicamentos bajo protocolos de asepsia y dosis previamente establecidas."
            },
            {
                number: 3,
                text: "⏱️ Monitoreo constante del funcionamiento de la bomba, asegurando la infusión correcta y sin interrupciones."
            },
            {
                number: 4,
                text: "🧾 Registro detallado de cada procedimiento y comunicación continua con el médico tratante."
            },
            {
                number: 5,
                text: "❤️ Atención cálida, profesional y humana, enfocada en brindar alivio, acompañamiento y seguridad durante todo el proceso."
            }
        ],
        img: bombasDolor,
        url: "bombas-del-dolor",
        img1: img1BombasDolor,
        img2: img2BombasDolor
    },
    "sonda-vesical": {
        title: "Cambio de sonda vesical permanete a domicilio",
        description: "En <strong>Enfermeros SalusVida</strong> ofrecemos el servicio de <strong>cambio de sonda vesical permanente a domicilio especializado</strong>, orientado a garantizar un procedimiento seguro, higiénico y realizado por personal de enfermería altamente calificado. Entendemos que este tipo de atención requiere precisión, experiencia y un trato delicado hacia el paciente, por lo que nuestro equipo realiza cada cambio de sonda con el máximo cuidado, siguiendo los más altos estándares de bioseguridad y comodidad. <br><br>Cada procedimiento se realiza en coordinación con las indicaciones médicas y con una atención cercana, respetuosa y empática, buscando siempre el bienestar y la tranquilidad tanto del paciente como de su familia.",
        content: [
            {
                number: 1,
                text: "🧴 Retiro y reemplazo profesional de la sonda vesical permanente, siguiendo protocolos clínicos y de bioseguridad."
            },
            {
                number: 2,
                text: "🧪 Evaluación del estado del sistema urinario, del sitio de inserción y del flujo de drenaje antes y después del procedimiento."
            },
            {
                number: 3,
                text: "👩‍⚕️ Colocación segura y comprobación del correcto funcionamiento de la nueva sonda y de la bolsa recolectora."
            },
            {
                number: 4,
                text: "📋 Educación y orientación al paciente y cuidadores sobre cuidados diarios, signos de alarma y mantenimiento adecuado del sistema."
            },
            {
                number: 5,
                text: "❤️ Atención cálida, humana y profesional, enfocada en la comodidad, la dignidad y el bienestar del paciente en todo momento."
            }
        ],
        img: sondaVesical,
        url: "sonda-vesical",
        img1: img1SondaVesical,
        img2: img2SondaVesical
    }
};