
import React from "react";

const Testimonio = ({ testimonio }) => {
  return (
    <div className="relative border border-[#cccccc1a] shadow-2xl shadow-[#021d28] bg-gradient-to-r from-primary to-[#021d28] rounded-lg p-8 text-center md:w-1/3">
      <div className="absolute top-4 left-4">
        <svg
          className="h-8 text-gray-300 mr-2"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <p className="font-bold uppercase text-tertiary underline underline-offset-4">{testimonio.nombre}</p>
      <p className="text-xl mt-2 font-light italic text-gray-300 items-center">
        {testimonio.comentario}
      </p>
      <div className="flex items-center justify-center space-x-2 mt-4">
        {[...Array(testimonio.rating)].map((_, index) => (
          <svg
            key={index}
            className="text-yellow-500 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default Testimonio;
