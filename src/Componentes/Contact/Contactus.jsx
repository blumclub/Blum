'use client'
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { IoClose } from 'react-icons/io5';

const Contactusform = ({ className = '' }) => {

    let [isOpen, setIsOpen] = useState(false);
    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: '',
        input5: '',
    });
    const [selectedOption, setSelectedOption] = useState('Consulta');

    const alert = () => {
        Swal.fire({
            title: `${inputValues.input1}, tu mensaje ha sido enviado correctamente.`,
            confirmButtonAriaLabel:`Pronto se comunicarán contigo al siguiente email, ${inputValues.input2}`,
            text: `Pronto se comunicarán contigo al siguiente email, ${inputValues.input2}`,
            icon: 'success',
            confirmButtonText: 'Ok',
        });
    };

    const alertLoading = () => {
        Swal.fire({
            title: 'Aguarde un momento',
            icon:'info',
            text: 'Tu mensaje se está enviando...',
            showConfirmButton: false,
        });
    };

    const alertError = () => {
        Swal.fire({
            text: `${inputValues.input2}, No es un correo electrónico válido`,
            icon: 'error',
            confirmButtonAriaLabel:`${inputValues.input2}, No es un correo electrónico válido`,
            confirmButtonText: 'Ok',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!inputValues.input2.match(emailPattern)) {
            alertError();
        } else {
            try {
                alertLoading();
                const response = await axios.post('/api/contact', {
                    ...inputValues,
                    input4: selectedOption,
                });
                Swal.close();
                if (response.status === 200) {
                    alert();
                    setInputValues({
                        input1: '',
                        input2: '',
                        input3: '',
                        input5: ''
                    });
                    setSelectedOption('');
                    setIsOpen(false);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const isDisabled = Object.values(inputValues).some((value) => value === '');

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <div className={`flex items-center ${className}`}>
                <button type="button" className="flex justify-center text-base w-full rounded-full bg-transparent text-pink py-2 px-4 md:hidden lg:px-8 navbutton hover:text-white hover:bg-pink" onClick={openModal} aria-label="Abrir formulario de contacto" >CONTACTO</button>
                <div className="hidden md:block">
                    <button type="button" className="text-15px space-links" onClick={openModal} aria-label="Abrir formulario de contacto">CONTACTO</button>
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
                    <div className="fixed inset-0 bg-black bg-opacity-75" />
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <button type="button" onClick={closeModal} className="absolute top-5 right-6" aria-label="Cerrar formulario de contacto" >
                                        <IoClose size={32} style={{ color: 'gray' }} />
                                    </button>
                                    <div className="py-6 lg:py-8 px-4 mx-auto max-w-screen-md">
                                        <div className="flex flex-col items-center">
                                            <img
                                                className="h-48px w-48px lg:block"
                                                src="images/logos/ocularFooter.webp"
                                                alt="Sermar Logo"
                                                width={200}
                                                height={'auto'}
                                            />
                                            <p className={`mb-6 lg:mb-16 mt-4 font-light text-center ${className}`}>Contacto</p>
                                        </div>
                                        <form className="space-y-8" onSubmit={handleSubmit}>
                                            <div>
                                                <label id='nombreForm' htmlFor="text" className="block mb-2 text-sm font-medium text-text-primary">Nombre</label>
                                                <input
                                                    id="text"
                                                    name="input1"
                                                    value={inputValues.input1}
                                                    onChange={handleChange}
                                                    type="text"
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder='nombre'
                                                    aria-label="Ingresar nombre"
                                                />
                                            </div>
                                            <div>
                                                <label id='emailForm' htmlFor="email" className="block mb-2 text-sm font-medium text-text-primary">Email</label>
                                                <input
                                                    id="email"
                                                    name="input2"
                                                    value={inputValues.input2}
                                                    onChange={handleChange}
                                                    type="email"
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder={`email@email.com`}
                                                    aria-label="Ingresar correo electrónico"
                                                />
                                            </div>
                                            <div>
                                                <label id='telForm' htmlFor="telefono" className="block mb-2 text-sm font-medium text-text-primary">Telefono</label>
                                                <input
                                                    id="telefono"
                                                    name="input5"
                                                    value={inputValues.input5}
                                                    onChange={handleChange}
                                                    type="text"
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder='Telefono'
                                                    aria-label="Ingresar correo electrónico"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="options"
                                                    className="block mb-2 text-sm font-medium text-text-primary"
                                                >
                                                    Motivo
                                                </label>
                                                <select
                                                    id="options"
                                                    name="options"
                                                    value={selectedOption}
                                                    onChange={(e) => setSelectedOption(e.target.value)}
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    aria-label="Seleccionar motivo de contacto"
                                                >
                                                    <option value='Seleccione una Opcion' disabled>Seleccione una Opcion</option>
                                                    <option value='Turno'>Turno</option>
                                                    <option value='Reprocam'>Reprocam</option>
                                                </select>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label
                                                    htmlFor="message"
                                                    className="block mb-2 text-sm font-medium text-text-primary"
                                                >
                                                    Mensaje
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="input3"
                                                    value={inputValues.input3}
                                                    onChange={handleChange}
                                                    className="relative block w-full appearance-none rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Dejar un comentario..."
                                                    aria-label="Escribir mensaje"
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isDisabled}
                                                className="py-2 px-5 text-sm bg-primary font-medium w-full text-center text-text-tertiary rounded-lg hover:bg-primary-hover"
                                                aria-label="Enviar formulario"
                                            >
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