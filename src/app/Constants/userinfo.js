import {FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export const userinfo = {
    logoText: "BLUM", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'blumong.ok@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '1123960360', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+54' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        //{ type: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61551846219257', icon: <FaFacebook className='text-primary'/> },
        { type: 'Instagram', link: 'https://www.instagram.com/blum.club/', icon: <FaInstagram className='text-primary'/> },
        { type: 'WhatsApp', link:'https://api.whatsapp.com/send?phone=5491123960360', icon: <FaWhatsapp className='text-primary'/> },
        { type: 'Phone', link:'https://api.whatsapp.com/send?phone=5491123960360' },  
    ],
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
      descripcion: 'Productos tópicos hechos a base de cannabis, ideales para aliviar dolores musculares, articulares y problemas en la piel.',
      href: 'unguentos',
      btn: 'Ver mas'
    },
    {
      nombre: 'Aceites',
      descripcion: 'Extractos concentrados de cannabis que ofrecen propiedades terapéuticas, perfectos para el bienestar físico y mental.',
      href: 'aceites',
      btn: 'Ver mas'
    },
    {
      nombre: 'Geneticas',
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
    
