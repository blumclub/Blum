'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { IoClose } from 'react-icons/io5';
import { MdArrowDropDown } from 'react-icons/md';
import Link from 'next/link';
import { userinfo } from '@/app/Constants/userinfo';
import { userData } from '@/app/Constants/userinfo';


const Contactusform = ({ className= '', text, estilo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);
    const [showConsulta, setShowConsulta] = useState(false)
    const selectedOption = watch('Motivo', 'Consulta');

    const alert = (Nombre) => {
        Swal.fire({
            title: `${Nombre}, tu mensaje ha sido enviado correctamente.`,
            confirmButtonAriaLabel: `Pronto se comunicarán contigo al whatsApp`,
            text: `Pronto se comunicarán contigo al whatsApp`,
            icon: 'success',
            timer: 3100,
        });
    };

    const alertLoading = () => {
        Swal.fire({
            title: 'Aguarde un momento',
            icon: 'info',
            text: 'Tu mensaje se está enviando...',
            showConfirmButton: false,
        });
    };

    const alertError = (Email) => {
        Swal.fire({
            text: `${Email}, No es un correo electrónico válido`,
            icon: 'error',
            confirmButtonAriaLabel: `${Email}, No es un correo electrónico válido`,
            confirmButtonText: 'Ok',
        });
    };

    const formatMessage = (data) => {
        return (
            `${data.Nombre ? `*Hola soy  ${data.Nombre} y estos son mis datos:*\n`: ''}`+
            `${data.Email ? `*Email:* ${data.Email}\n`: ''}`+
            `${data.Telefono ? `*Telefono:* ${data.Telefono}\n`: ''}`+
            `${data.Motivo ? `*Motivo:* ${data.Motivo}\n`: ''}`+
            `${data.Mensaje ? `*Mensaje:* ${data.Mensaje}\n`: ''}`+
            `${data.Domicilio ? `*Domicilio:* ${data.Domicilio}\n`: ''}`+
            `${data.Edad ? `*Edad:* ${data.Edad}\n`: ''}`+
            `${data.Lugar ? `*Lugar:* ${data.Lugar}\n`: ''}`+
            `${data.Referido ? `*Referido:* ${data.Referido}\n`: ''}`+
            `${data.inscripto ? `*inscripto:* ${data.inscripto}\n `: ''}`
        );
    };
    
    
    const onSubmit = async (data) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!data.Email.match(emailPattern)) {
            alertError(data.Email);
        } else {
            try {
                alertLoading();
                const response = await axios.post('/api/contact', {
                    ...data,
                    motivo: selectedOption,
                });
                console.log('hola data:',data);                
                Swal.close();
                console.log('public');
                
                if (response.status === 200) {
                    const whatsappMessage = formatMessage(data);
                    const whatsappURL = `https://wa.me/+${userData.codigoPais}${userData.contact}?text=${encodeURIComponent(whatsappMessage)}`;
                    window.open(whatsappURL, '_blank');
                    alert(data.Nombre, data.Email);
                    reset();
                    setIsOpen(false);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const selectedMotivo = watch('Motivo');

    if (selectedMotivo === 'Turno 1ª vez' && !showAdditionalFields) {
      setShowAdditionalFields(true);
      
    } else if (selectedMotivo !== 'Turno 1ª vez' && showAdditionalFields) {
        setShowAdditionalFields(false);
    }

    if (selectedMotivo === 'Consulta' && !showConsulta) {
        setShowConsulta(true);
        
      } else if (selectedMotivo !== 'Consulta' && showConsulta) {
        setShowConsulta(false);
      }

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <>
            <div className={`flex items-center ${className}`}>
                <button type="button" className={estilo?`${estilo} md:hidden font-aileron`:"flex justify-center font-aileron text-base w-full rounded-full bg-transparent text-pink py-2 px-4 md:hidden lg:px-8 navbutton hover:text-tertiary text-gray-200 "} onClick={openModal} aria-label="Abrir formulario de contacto" >
                    {text}
                </button>
                <div className="hidden md:block">
                    <button type="button" className={estilo?`${estilo} hidden md:block font-aileron`:"text-15px space-links border font-aileron px-2 py-1 rounded-md hover:border-tertiary hover:text-tertiary text-gray-200 transform transition-transform duration-200 hover:scale-110 "} onClick={openModal} aria-label="Abrir formulario de contacto" >
                        {text}
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-primary bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"           leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-secondary p-6 text-left align-middle shadow-xl transition-all">
                                    <button type="button" onClick={closeModal} className="absolute top-5 right-6" aria-label="Cerrar formulario de contacto">
                                        <IoClose size={32} style={{ color: 'gray' }} />
                                    </button>
                                    <div className="py-2 px-4 mx-auto max-w-screen-md">
                                        <div className="flex flex-col items-center">
                                            <img className="lg:block border-none" src="/Logo/LogoBlumContacto.webp" alt="Blum Logo" width={200} height={200} />
                                            <p className={`mb-6 lg:mb-10 mt-4 font-light text-center ${className}`}>Completa tus datos y continuamos por WhatsApp</p>
                                        </div>
                                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                                            <div>
                                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-text-primary">Nombre y Apellido</label>
                                                <input
                                                id="text"
                                                {...register('Nombre', { required: true })}
                                                type="text"
                                                className="relative block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Jhon Black"
                                                aria-label="Ingresar nombre"
                                                />
                                                {errors.Nombre && <span className="text-red">Nombre y Apellido es requerido</span>}
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-text-primary">Email</label>
                                                <input
                                                id="email"
                                                {...register('Email', { required: true })}
                                                type="email"
                                                className="relative block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="email@email.com"
                                                aria-label="Ingresar correo electrónico"
                                                />
                                                {errors.Email && <span className="text-red">Email es requerido</span>}
                                            </div>

                                            <div>
                                                <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-text-primary">Celular</label>
                                                <input
                                                id="telefono"
                                                {...register('Telefono', { required: true })}
                                                type="text"
                                                className="relative block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Celular"
                                                aria-label="Ingresar teléfono"
                                                />
                                                {errors.Telefono && <span className="text-red">Celular es requerido</span>}
                                            </div>

                                            <div className="relative">
                                                <label htmlFor="options" className="block mb-2 text-sm font-medium text-text-primary">Motivo</label>
                                                <div className="relative">
                                                    <select
                                                    id="options"
                                                    {...register('Motivo')}
                                                    className="block w-full appearance-none rounded-md border px-3 py-2 pr-10 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    aria-label="Seleccionar motivo de contacto"
                                                    defaultValue="Contacto"
                                                    >
                                                    <option value="Contacto" disabled hidden>Contacto</option>
                                                    <option value="Turno 1ª vez">Turno 1ª vez</option>
                                                    <option value="Consulta">Consulta</option>
                                                    </select>
                                                    {/* Icono de flecha dentro del select */}
                                                    <div className="absolute right-3 top-2 h-5 w-5 text-primary text-xl pointer-events-none">
                                                        <MdArrowDropDown />
                                                    </div>
                                                </div>
                                                {errors.Motivo && <span className="text-red">Seleccione un motivo</span>}
                                            </div>
                                            {showConsulta && (
                                                <div>
                                                    <label htmlFor="Mensaje" className="block mb-2 text-sm     text-text-primary">Mensaje</label>
                                                    <textarea
                                                        id="Mensaje"
                                                        {...register('Mensaje', { required: true })}
                                                        type="text"
                                                        className="relative block w-full appearance-none rounded-md     py-2 text-gray-900 placeholder-gray-500 focus:border    focus:ring-indigo-500 sm:text-sm"
                                                        placeholder=" Mensaje"
                                                        aria-label="Ingresar edad"
                                                        />
                                                    {errors.Edad && <span className="text-red">Edad es requerida</span>}
                                                </div>
                                            
                                            )}
                                            {/* Conditional fields */}
                                            {showAdditionalFields && (
                                                <>
                                                <div>
                                                    <label htmlFor="edad" className="block mb-2 text-sm font-medium text-text-primary">Edad</label>
                                                    <input
                                                    id="edad"
                                                    {...register('Edad', { required: true })}
                                                    type="text"
                                                    className="relative block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Edad"
                                                    aria-label="Ingresar edad"
                                                    />
                                                    {errors.Edad && <span className="text-red">Edad es requerida</span>}
                                                </div>

                                                <div>
                                                    <label htmlFor="domicilio" className="block mb-2 text-sm font-medium text-text-primary">Localidad de Residencia</label>
                                                    <input
                                                    id="domicilio"
                                                    {...register('Domicilio', { required: true })}
                                                    type="text"
                                                    className="relative block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Quilmes"
                                                    aria-label="Ingresar domicilio"
                                                    />
                                                    {errors.Domicilio && <span className="text-red">Localidad de Residencia es requerido</span>}
                                                </div>

                                                <div>
                                                    <label htmlFor="referido" className="block mb-2 text-sm font-medium text-text-primary">Persona que lo refirió</label>
                                                    <input
                                                    id="referido"
                                                    {...register('Referido')}
                                                    type="text"
                                                    className="relative block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Nombre y Apellido de quien lo refirió"
                                                    aria-label="Ingresar nombre de la persona que lo refirió"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="inscripto" className="block mb-2 text-sm font-medium text-text-primary">¿Estas inscripto al Reprocann? </label>
                                                    <input
                                                        id="inscripto"
                                                        {...register('inscripto')}
                                                        type="text"
                                                        className="relative block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="Si - No"
                                                        aria-label="Ingresar nombre de la persona que lo refirió"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <label htmlFor="lugar" className="block mb-2 text-sm font-medium text-text-primary">¿Qué Dispensario prefiere?</label>
                                                    <div className="relative">
                                                        <select
                                                        id="lugar"
                                                        {...register('Lugar')}
                                                        className="block w-full appearance-none rounded-md border px-3 py-2 pr-10 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        aria-label="Seleccionar lugar preferido"
                                                        >
                                                        <option value="Bernal">Bernal</option>
                                                        <option value="CABA" disabled>CABA.<small>{'(proximamente)'}</small></option>
                                                        </select>
                                                        <div className="absolute right-3 top-2 h-5 w-5 text-primary text-xl pointer-events-none">
                                                            <MdArrowDropDown />
                                                        </div>
                                                    </div>
                                                    {errors.Lugar && <span className="text-red">Lugar es requerido</span>}
                                                </div>
                                                </>
                                            )}

                                            <button type="submit" className="py-2 px-5 text-sm bg-primary font-medium w-full text-center text-text-tertiary rounded-lg hover:bg-primary-hover hover:text-primary hover:font-semibold" aria-label="Enviar formulario">
                                                Enviar
                                            </button>
                                        </form>
                                        <div className="flex flex-col gap-5 items-center justify-center pt-4">
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
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Contactusform;
