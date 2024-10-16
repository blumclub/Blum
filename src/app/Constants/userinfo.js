import Contactusform from '@/Componentes/Contact/Contactus'
import {FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export const userinfo = {
    logoText: "BLUM",
    contact: {
        email: 'blumong.ok@gmail.com', 
        phone: '1123960360', 
        countrycode: '+54' 
    },
    socials: [
        //{ type: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61551846219257', icon: <FaFacebook className='text-primary'/> },
        { type: 'Instagram', link: 'https://www.instagram.com/blum.club/', icon: <FaInstagram className='text-primary'/> },
        { type: 'WhatsApp', link:'https://api.whatsapp.com/send?phone=5491123960360', icon: <FaWhatsapp className='text-primary'/> },
        { type: 'Phone', link:'https://api.whatsapp.com/send?phone=5491123960360' },  
    ],
    nosotrosTitle:'Somos el primer club de cultivo de Bernal, que realiza producciones cannábicas orientadas exclusivamente a fines medicinales',
    nosotrosSub:'Blüm',
    nosotrosText1:'En nuestro compromiso con la salud y el bienestar, nuestra misión es liderar la revolución del cannabis medicinal en Bernal, Argentina. Nos dedicamos a investigar, educar y acompañar a nuestros pacientes y la comunidad en general en el uso responsable y terapéutico del cannabis. ',
    nosotrosText2:'Buscamos proporcionar alternativas de tratamiento efectivas y de alta calidad, marcando la pauta como el primer Club Asociación Civil sin fines de lucro de Cannabis Medicinal en la localidad. Partimos del marco legal de la Ley de Cannabis Medicinal (Ley N°27.350), llevando adelante nuestras actividades bajo los estándares de la misma.',
    nosotrosTitle2:'¿Como Funciona Blüm?',
    nosotrosText3: () => (<><Contactusform text={(<>Primero tenés que completar el formulario que se encuentra <strong className='text-secondary'>aqui</strong> y seleccionar tu sede.</>)} estilo={'font-aileron'} /> </>),
    nosotrosText4: 'Una vez que llenes el formulario y lo envies, te vamos a contactar para una cita presencial con el Doc. Tomás León.',
    nosotrosText5: 'En esta visita, te contaremos cómo funciona el cannabis medicinal, cuáles son las indicaciones que recomienda nuestro doctor, y además podrás recorrer las instalaciones de nuestro club. Una vez que te asocies, podrás venir cuando quieras, de 12 a 21 hs.',
    nosotrosText6: 'Somos una ONG que prioriza el consumo responsable, es por esto que el único requisito para ser socio de Blüm, es que tengas tu Reprocann. No te preocupes, ¡Nosotros te lo gestionamos!',
  }

export const news = {
        //this text goes on your landing page
        title: 'Sumate al Newsletter', 
        subTitle: 'Anotate para conocer los próximos eventos.',
        btn: 'Suscribirme',
    }

export const userData = { //----- Asi tiene que ser el documento dentro de constantes -----
  codigoPais: 54,
  contact: 1123960360,
  textBoton:'¡Contáctame!',
  textoPredefinido :`Hola, me gustaria saber mas sobre,`
};

export const Links = [
    { name: "El Club", href: "#ElClub", current: false  },
    { name: "Catalogo", href: "#Catalogo", current: false  },
    { name: "Consultorio", href: "#consultorio", current: false  },
    { name: "Hidropónico", href: "#cultivoHipodonico", current: false  },
  ];

export const catalogo = [
    {
      nombre: 'Ungüentos',
      // img:'https://res.cloudinary.com/deueso3sr/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1725643288/2_kpxnaj.jpg',
      img:'https://res.cloudinary.com/deueso3sr/image/upload/t_cuadrado/v1725643288/2_kpxnaj.jpg',
      descripcion: 'Productos tópicos hechos a base de cannabis, ideales para aliviar dolores musculares, articulares y problemas en la piel.',
      href: 'unguentos',
      btn: 'Ver mas'
    },
    {
      nombre: 'Aceites',
      // img:'https://res.cloudinary.com/deueso3sr/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1725643287/1_dn4ewf.jpg',
      img:'https://res.cloudinary.com/deueso3sr/image/upload/t_cuadrado/v1725643287/1_dn4ewf.jpg',
      descripcion: 'Extractos concentrados de cannabis que ofrecen propiedades terapéuticas, perfectos para el bienestar físico y mental.',
      href: 'aceites',
      btn: 'Ver mas'
    },
    {
      nombre: 'Geneticas',
      // img:'https://res.cloudinary.com/deueso3sr/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1726160665/9_oozgob.webp',
      img:'https://res.cloudinary.com/deueso3sr/image/upload/t_cuadrado/v1726160665/9_oozgob.webp',
      descripcion: 'Variedades específicas de plantas de cannabis seleccionadas por sus características únicas, optimizadas para usos medicinales y recreativos.',
      href: 'geneticas',
      btn: 'Ver mas'
    }
  ]


  export const faqData = [
    {
        "id": 1,
        "question": "¿Cómo puedo hacerme socio del club de cannabis Blum?",
        "answer": "Para hacerte socio, completa el formulario en contacto. Te pediremos algunos datos y, una vez verificada la información, podrás acceder a los beneficios exclusivos del club.",
        "linkText": "Únete al club de cannabis",
        "linkUrl": ""
    },
    {
        "id": 2,
        "question": "¿Qué geneticas de cannabis están disponibles para los socios?",
        "answer": "Ofrecemos una variedad de geneticas de cannabis, tanto índicas como sativas, seleccionadas cuidadosamente por su calidad y propiedades terapéuticas. Visita nuestro catalogo para conocer las opciones disponibles.",
        "linkText": "Ver el catalgo de geneticas",
        "linkUrl": "/catalogo/geneticas"
    },
    {
        "id": 3,
        "question": "¿El club ofrece asesoramiento sobre el uso de cannabis medicinal?",
        "answer": "Sí, ofrecemos asesoramiento personalizado sobre el uso de cannabis medicinal para tratar distintas condiciones. Puedes agendar una consulta con nuestros especialistas en cannabis medicinal a través de nuestro formulario en línea.",
        "linkText": "Agenda una consulta sobre cannabis medicinal",
        "linkUrl": "https://api.whatsapp.com/send/?phone=541162574919&text=Hola%2C+te+escribo+desde+la+web%2C++&type=phone_number&app_absent=0"
    },
    {
        "id": 4,
        "question": "¿Cuáles son los beneficios de ser socio del club?",
        "answer": "Al ser socio, accedes a descuentos exclusivos, productos de alta calidad, eventos privados y asesoramiento personalizado. Además, estarás apoyando el acceso seguro y regulado al cannabis.",
        "linkText": "Conoce todos los beneficios de ser socio",
        "linkUrl": ""
    }
  ]
    
