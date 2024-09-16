'use client'
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { generateHref } from "../Utils/generateHref";
import Contactusform from "../Contact/Contactus";
import {Links} from '../../app/Constants/userinfo'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar(contacto) {

  const [activeLink, setActiveLink] = useState(""); 
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos <= prevScrollPos);
      setPrevScrollPos(currentScrollPos);
      setIsScrolled(currentScrollPos > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };
  
  return (
    <div className="">
      <Disclosure as="nav" className={classNames(`fixed top-0 left-0 right-0 sm:py-0 md:py-3 border-neutral-200 z-30 transition-colors duration-300 bg-background-primary text-text-tertiary   shadow-lg ${isScrolled?'shadow-secondary backdrop-blur-md':'backdrop-blur-none '} `)}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 py-1 md:py-0 sm:px-6 lg:px-8 z-20">
              <div className="relative flex h-16 items-center justify-start md:justify-around">
                <div className="flex flex-1 items-center justify-start md:justify-around">
                  <div className="flex flex-shrink-0 items-center mr-10 ">
                    <Link href="/" className="z-20 py-2">
                      <img src="/Logo/LogoBlum160.webp" alt="Blum" className="" aria-label="Logo Blum" width={80} height={80} style={{filter: 'drop-shadow(0px 2px 3px rgba(12, 52, 60, 1))',}}/>
                    </Link>
                  </div>
                  <div className="hidden md:flex md:ml-6">
                    <div className="flex space-x-5 items-center">
                      {Links.map((item) => {
                        const href = generateHref(null, item.href);
                        if (!href) return null; // Don't render if href is undefined
                        return (
                          <Link 
                            key={item.name} 
                            href={href} 
                            className={classNames(
                              activeLink === item.href 
                              ? "relative inline-block group text-lg font-semibold text-text-secondary"
                              : "relative inline-block group text-text-link font-bold"
                            )} 
                            aria-current={activeLink === item.href ? "page" : undefined} 
                            onClick={() => handleLinkClick(item.href)} 
                            aria-label={item.name}
                          >
                            <span className={classNames(
                              "absolute bottom-[-1px] h-[1.5px] bg-white transition-transform duration-300 ease-out", 
                              activeLink === item.href ? "scale-x-100 inset-x-0 " : "scale-x-0 group-hover:scale-x-100 inset-x-1"
                            )}></span>
                            {item.name.toLocaleUpperCase()}
                          </Link>
                        );
                      })}
                      <Contactusform className="text-navbar-style font-bold" contacto={contacto}/>

                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-1">
                      <span className="sr-only">Open main menu</span>
                      {open 
                        ? (<XMarkIcon className={classNames("block h-6 w-6 text-text-link" )} aria-label="close menu" />) 
                        : (<Bars3Icon className={classNames("block h-6 w-6 text-text-link" )} aria-label="open menu" />)}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden z-50">
              <div className="space-y-1 px-4 pt-2 pb-3 min-h-screen border-t border-[#807f6c] bg-primary">
                {Links.map((item) => {
                  const href = generateHref(null, item.href);
                  if (!href) return null; // Don't render if href is undefined
                  return (
                    <Disclosure.Button 
                      key={item.name} 
                      as={Link} 
                      href={href} 
                      className={classNames(
                        "block p-4 text-base font-medium border-b border-[#807f6c] hover:text-text-secondary",
                        activeLink === item.href ? " text-text-secondary" : ""
                      )} 
                      aria-current={activeLink === item.href ? "page" : undefined} 
                      onClick={() => handleLinkClick(item.href)} 
                      aria-label={item.name}
                    >
                      {item.name.toLocaleUpperCase()}
                    </Disclosure.Button>
                  );
                })}
                <div className="flex w-full text-start font-bold ">
                  <Contactusform className="text-navbar-style-menu" contacto={contacto} />
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
