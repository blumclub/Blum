import { userinfo } from "@/app/Constants/userinfo";
import React from "react";

export default function Nosotros() {

  return (
    <section id="ElClub" className="relative z-10 bg-primary py-12 scroll-mt-10 lg:scroll-mt-20"> 
      <article className="px-4 max-w-5xl mx-auto">
        <h1 className="text-secondary text-3xl m-4 font-aileron items-center text-center">{userinfo.nosotrosTitle}</h1>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col items-center text-start md:text-start md:items-start">
            <p className="text-white text-lg font-aileron indent-6">{userinfo.nosotrosText1}</p>
            <br />
            <p className="text-white text-lg font-aileron indent-6">{userinfo.nosotrosText2}</p>
          </div>
          <h2 className="hidden md:block md:text-9xl place-self-center text-transparent leading-none font-oxanium tracking-wider bg-bgTitle bg-clip-text bg-fixed drop-shadow-secondary font-black rounded-sm bg-right md:bg-contain lg:bg-left">{userinfo.nosotrosSub}</h2>
        </div>
        <div>
          <h2 className="text-secondary text-3xl m-4 font-aileron items-center text-center">{userinfo.nosotrosTitle2}</h2>
          <br />
          <ol className="space-y-4">
            <li className="flex space-x-4 text-lg font-aileron align-middle items-center">
              <img src="/icons/icon-48x48.png" alt="icono" className="w-12 h-12" width={40} height={40} />
              <span className="text-white">{userinfo.nosotrosText3()}</span>
            </li>
            <li className="flex items-center space-x-4 text-lg font-aileron">
              <img src="/icons/icon-48x48.png" alt="icono" className="w-12 h-12" width={48} height={48}/>
              <span className="text-white">{userinfo.nosotrosText4}</span>
            </li>
            <li className="flex items-center space-x-4 text-lg font-aileron">
              <img src="/icons/icon-48x48.png" alt="icono" className="w-12 h-12" width={40} height={40}/>
              <span className="text-white">{userinfo.nosotrosText5}</span>
            </li>
            <li className="flex items-center space-x-4 text-lg font-aileron align-middle">
              <img src="/icons/icon-48x48.png" alt="icono" className="w-12 h-12" width={40} height={40}/>
              <span className="text-white">{userinfo.nosotrosText6}</span>
            </li>
          </ol>
        </div>

      </article>
    </section>
  );
}
