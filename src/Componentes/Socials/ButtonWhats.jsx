"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const ButtonWhats = ({ text, contact, textContact }) => {
  const [isHovered, setIsHovered] = useState(false);

  const enviar = `https://wa.me/54${contact}?text=${encodeURIComponent(textContact)}`;

  return (
    <article className="relative ">
      <Link href={enviar} passHref target="_blank" title="Contactar por WhatsApp" className="gap-2">
        <button
          className="flex items-center px-3 py-2 bg-green text-white rounded-lg shadow-md transition-all duration-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Contactar vía WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5" />
          {isHovered && <span className="ml-2">{text}</span>}
        </button>
      </Link>
    </article>
  );
};

export default ButtonWhats;
