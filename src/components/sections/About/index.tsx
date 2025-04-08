'use client';

import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    return (
        <section id='nosotros' className='relative h-screen flex flex-col items-center justify-center overflow-hidden'>
            {/* Fondo con círculo estirado */}
            <div className="hidden md:block absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[275%] h-[130%] bg-white rounded-[75%] transform scale-x-[0.4] origin-center" />
            </div>

            {/* Card central */}
            <div className="relative z-10 bg-primary p-4 md:p-8 rounded-4xl border-4 border-black shadow-lg max-w-6xl h-[90%] md:h-[80%] mx-4 flex flex-col md:flex-row items-center text-white">
                
                {/* Contenedor de imagen con separadores */}
                <div className='w-full md:w-[50%] h-[200px] md:h-full relative flex items-center justify-center order-1 md:order-2'>
                    {/* Separador desktop (izquierda) */}
                    <div className='hidden md:block absolute left-0 h-full w-[4px] bg-white rounded-full -ml-4'></div>
                    
                    {/* Imagen */}
                    <div className='relative w-full h-full overflow-hidden rounded-4xl md:ml-8 mb-4 md:mb-0'>
                        <Image
                            src="/sections/about/about.webp"
                            alt="About"
                            fill
                            className='object-cover object-center'
                        />
                    </div>
                    
                    {/* Separador mobile */}
                    <div className='md:hidden absolute bottom-0 w-full h-[4px] bg-white rounded-full -mb-4'></div>
                </div>

                {/* Contenedor de texto */}
                <article className='flex flex-col items-center justify-center w-full md:w-[50%] p-4 md:pe-8 order-2 md:order-1 mt-4 md:mt-0'>
                    <h2 className="text-4xl lg:text-6xl font-bold text-center mb-4 md:mb-8">¿Qué hacemos?</h2>
                    <p className="text-xl lg:text-2xl text-center md:text-left">
                        Diseñamos piezas únicas de madera de caldén, un árbol nativo de la región pampeana argentina, reconocido por su resistencia y elegantes vetas.
                        <br /><br />
                        Cada producto es elaborado a mano que realzando la belleza natural de la madera, ofreciendo calidad, durabilidad y un diseño exclusivo.
                    </p>
                </article>
            </div>

            {/* Botón de Comprar Ahora */}
            <Link
                href="/productos"
                className="z-20 mt-4 md:mt-8 bg-secondary hover:bg-secondary/80 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-full text-xl md:text-3xl shadow-[4px_4px_0px_#000]"
            >
                Comprar Ahora
            </Link>
        </section>
    );
};

export default About;