"use client"
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import '../../app/globals.css';

const ButtonWsp = ({ text , contact }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const textoPredefinido = 'Hola, te escribo desde la web,  ';
  const enviar = `https://wa.me/54${contact}?text=${encodeURIComponent(textoPredefinido)}`;

  return (
    <article className="buttonWspPosition">
      <Link href={enviar} passHref target="_blank">
        <button
          rel="noopener noreferrer"
          className='buttonWspDesign'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Contact via WhatsApp"
          role="button"
          data-client={true}
        >
          <FaWhatsapp className='iconWhatsApp'/>
          {isHovered && <h2 className='textWhatsApp'>{text}</h2>}
        </button>
      </Link>
    </article>
  );
}

export default ButtonWsp;
