import Link from "next/link";
import { userinfo } from '../../app/Constants/userinfo'

const Footer = () => {
    return (
        <section className="flex flex-col items-center bg-bgSecondary bg-contain bg-center" id='footer'>
            <article className="flex md:flex-row align-middle justify-around w-full">
                <div className="flex flex-col items-center md:flex-row justify-around w-full max-w-screen-xl mx-auto gap-5">
                    <Link href="/" className=" md:flex flex-col items-center mb-10">
                        <img src='Logo/LogoBlumContacto.webp' alt="logo" width={160} height={160} />
                        <p className="text-[40px] md:text-[62px] text-primary  text-center leading-none font-oxanium tracking-wider"><streong>Blüm</streong></p>
                    </Link>
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <ul className="text-[40px] flex gap-4 text-gray-30">
                            {userinfo.socials.map((link, key) => (
                            <li key={key} className="transition-transform duration-200 ease-in-out transform hover:scale-110">
                                <Link href={link.link} target="_blank" rel="noreferrer">
                                {link.icon}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </article>
            <article>
                <a href="https://programundo.dev" target="_blank" rel="noreferrer">
                    <p className="bold-20 w-full text-center text-primary pt-10 mb-4">2024 - Website creado por MATGON</p>
                </a>
            </article>
        </section>
    )
}
export default Footer;
