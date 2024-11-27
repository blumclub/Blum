import Link from "next/link";
import { userinfo } from '../../app/Constants/userinfo'

const Footer = () => {
    return (
        <section className="flex flex-col items-center bg-secondary bg-contain bg-center " id='footer'>
            <article className="flex md:flex-row align-middle justify-around w-full">
                <div className="flex flex-col items-center md:flex-row justify-around w-full max-w-screen-xl mx-auto gap-5">
                    <Link href="/" className=" md:flex flex-col items-center mb-10" title="Volver a home">
                        <img src='/Logo/LogoBlumContacto.webp' alt="logo" width={160} height={160} title="Logo Blum Club" />
                        <p className=" hidden md:block text-[40px] md:text-[62px] text-primary  text-center leading-none font-oxanium tracking-wider"><streong>Blüm</streong></p>
                    </Link>
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <ul className="text-[60px] flex gap-4 text-gray-30">
                            {userinfo.socials.map((link, key) => (
                            <li key={key} className="transition-transform duration-200 ease-in-out transform hover:scale-110">
                                <Link href={link.link} target="_blank" rel="noreferrer" title={link.link}>
                                    {link.icon}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </article>
            <small className="px-4 text-primary text-center py-6">ASOCIACION CIVIL para el Estudio y la Investigación del Uso Medicinal de la Planta de Cannabis, sus Derivados y Tratamientos No Convencionales</small>
            <article>
                <Link href='https://programundo.dev' title="https://programundo.dev">
                    <small className="text-sm text-primary sm:text-center">© 2024 - MATIGON. All Rights Reserved.</small>
                </Link>
            </article>
        </section>
    )
}
export default Footer;
