
import Link from "next/link";

const BtnInstagram = () => {
  return (
    <article className="fixed bottom-24 right-5 z-50">
      <Link href="https://www.instagram.com/blum.club/" target="_blank" rel="noopener noreferrer" title="Ir a instagram">
        <button 
          className="flex items-center justify-center font-bold rounded-full bg-white shadow-lg p-2 transition-transform duration-300 hover:scale-110" 
          aria-label="Contact via Instagram" 
          role="button"
          data-client={true}
        >
          <img src='/redesSociales/insta.svg' alt="Instagram logo" className="w-12 h-12" width={48} height={48} title="Logo de Instagram"/>
        </button>
      </Link>
    </article>
  );
};

export default BtnInstagram;
