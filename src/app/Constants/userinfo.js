import {faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

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
        { type: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61551846219257', icon: faFacebook },
        { type: 'Instagram', link: 'https://www.instagram.com/blum.club/', icon: faInstagram },
        { type: 'WhatsApp', link:'https://api.whatsapp.com/send?phone=5491123960360', icon: faWhatsapp },
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

export default userData;
    
