'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { IoClose } from 'react-icons/io5';

const Contactusform = ({ className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const selectedOption = watch('Motivo', 'Consulta');

    const alert = (Nombre, Email) => {
        Swal.fire({
            title: `${Nombre}, tu mensaje ha sido enviado correctamente.`,
            confirmButtonAriaLabel: `Pronto se comunicarán contigo al siguiente email, ${Email}`,
            text: `Pronto se comunicarán contigo al siguiente email, ${Email}`,
            icon: 'success',
            confirmButtonText: 'Ok',
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

    const onSubmit = async (data) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!data.Email.match(emailPattern)) {
            alertError(data.Email);
        } else {
            try {
                alertLoading();
                console.log('data:', data)
                const response = await axios.post('/api/contact', {
                    ...data,
                    motivo: selectedOption,
                });
                Swal.close();
                if (response.status === 200) {
                    alert(data.Nombre, data.Email);
                    reset();
                    setIsOpen(false);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <>
            <div className={`flex items-center ${className}`}>
                <button type="button" className="flex justify-center text-base w-full rounded-full bg-transparent text-pink py-2 px-4 md:hidden lg:px-8 navbutton hover:text-white hover:bg-pink" onClick={openModal} aria-label="Abrir formulario de contacto" >
                    CONTACTO
                </button>
                <div className="hidden md:block">
                    <button type="button" className="text-15px space-links" onClick={openModal} aria-label="Abrir formulario de contacto" >
                        CONTACTO
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-primary bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-secondary p-6 text-left align-middle shadow-xl transition-all">
                                    <button type="button" onClick={closeModal} className="absolute top-5 right-6" aria-label="Cerrar formulario de contacto">
                                        <IoClose size={32} style={{ color: 'gray' }} />
                                    </button>
                                    <div className="py-6 lg:py-8 px-4 mx-auto max-w-screen-md">
                                        <div className="flex flex-col items-center">
                                            <img className="h-48px w-48px lg:block border-none" src="/Logo/LogoBlumContacto.webp" alt="Blum Logo" width={200} height={'auto'} />
                                            <p className={`mb-6 lg:mb-16 mt-4 font-light text-center ${className}`}>Contactanos por aca o comunícate por Whatsapp (+54)11 2396-0360</p>
                                        </div>
                                        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                                            <div>
                                                <label id='nombreForm' htmlFor="text" className="block mb-2 text-sm font-medium text-text-primary">Nombre</label>
                                                <input
                                                    id="text"
                                                    {...register('Nombre', { required: true })}
                                                    type="text"
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder='nombre'
                                                    aria-label="Ingresar nombre"
                                                />
                                                {errors.Nombre && <span className="text-red-500">Nombre es requerido</span>}
                                            </div>
                                            <div>
                                                <label id='emailForm' htmlFor="email" className="block mb-2 text-sm font-medium text-text-primary">Email</label>
                                                <input
                                                    id="email"
                                                    {...register('Email', { required: true })}
                                                    type="email"
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="email@email.com"
                                                    aria-label="Ingresar correo electrónico"
                                                />
                                                {errors.Email && <span className="text-red-500">Email es requerido</span>}
                                            </div>
                                            <div>
                                                <label id='telForm' htmlFor="telefono" className="block mb-2 text-sm font-medium text-text-primary">Telefono</label>
                                                <input
                                                    id="telefono"
                                                    {...register('Telefono', { required: true })}
                                                    type="text"
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder='Telefono'
                                                    aria-label="Ingresar teléfono"
                                                />
                                                {errors.Telefono && <span className="text-red-500">Teléfono es requerido</span>}
                                            </div>
                                            <div>
                                                <label htmlFor="options" className="block mb-2 text-sm font-medium text-text-primary">Motivo</label>
                                                <select
                                                    id="options"
                                                    {...register('Motivo')}
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    aria-label="Seleccionar motivo de contacto"
                                                >
                                                    <option value="Consulta">Consulta</option>
                                                    <option value="Turno 1ª vez">Turno 1ª vez</option>
                                                    <option value="Reprocam">Reprocam</option>
                                                </select>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-text-primary">Mensaje</label>
                                                <textarea
                                                    id="message"
                                                    {...register('Mensaje')}
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Dejar un comentario..."
                                                    aria-label="Escribir mensaje"
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="py-2 px-5 text-sm bg-primary font-medium w-full text-center text-text-tertiary rounded-lg hover:bg-primary-hover hover:text-primary hover:font-semibold" aria-label="Enviar formulario">
                                                Enviar
                                            </button>
                                        </form>
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
