'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-auto lg:h-[92vh] lg:min-h-[600px] flex items-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sections/hero/hero.webp"
          alt="Productos artesanales"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Contenido del Hero */}
      <div className="container mx-auto px-4 relative z-10 py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Texto y botones */}
          <div className="max-w-3xl text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Más que un Mate, un Compañero de Historias
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Nuestros mates, cuencos, tablas y platos de caldén son piezas artesanales únicas. Ideales para quienes buscan productos resistentes y con diseño exclusivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/productos"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Ver Productos
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg flex items-center justify-center transition-colors"
              >
                Conócenos
              </Link>
            </div>

            {/* Imágenes para móvil - Orden: 1 y 2 en la izquierda, 3 a la derecha */}
            <div className="lg:hidden flex justify-between mt-8">
              {/* Columna izquierda: Imagen 1 y 2 */}
              <div className="flex flex-col justify-between space-y-8 mr-4 sm:ml-4 md:ml-8">
                <div className="relative w-44 sm:w-64 md:w-72 h-40 sm:h-52">
                  <Image
                    src="/sections/hero/hero-item-1.webp"
                    alt="Mate artesanal"
                    fill
                    className="object-cover rounded-4xl shadow-xl"
                  />
                </div>
                <div className="relative w-44 sm:w-64 md:w-72 h-40 sm:h-52">
                  <Image
                    src="/sections/hero/hero-item-2.webp"
                    alt="Cuencos artesanales"
                    fill
                    className="object-cover rounded-4xl shadow-xl"
                  />
                </div>
              </div>

              {/* Imagen 3 centrada verticalmente a la derecha */}
              <div className="relative w-44 sm:w-64 md:w-72 h-40 sm:h-52 self-center ml-2 sm:mr-4 md:mr-8">
                <Image
                  src="/sections/hero/hero-item-3.webp"
                  alt="Tablas artesanales"
                  fill
                  className="object-cover rounded-4xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Imágenes para desktop */}
          <div className="relative hidden lg:block h-[400px] md:h-[500px]">
            <div className="absolute top-5 md:top-10 left-20 md:left-5 xl:left-30 w-32 md:w-48 h-40 md:h-50 transform -translate-x-4">
              <Image
                src="/sections/hero/hero-item-1.webp"
                alt="Mate artesanal"
                fill
                className="object-cover rounded-4xl shadow-xl"
              />
            </div>

            <div className="absolute top-0 md:top-0 right-12 md:right-0 xl:right-30 w-40 md:w-64 h-40 md:h-64 transform translate-x-4">
              <Image
                src="/sections/hero/hero-item-2.webp"
                alt="Cuencos artesanales"
                fill
                className="object-cover rounded-4xl shadow-xl"
              />
            </div>

            <div className="absolute bottom-0 left-40 md:left-60 xl:left-80 w-40 md:w-64 h-36 md:h-56 transform -translate-x-1/2">
              <Image
                src="/sections/hero/hero-item-3.webp"
                alt="Tablas artesanales"
                fill
                className="object-cover rounded-4xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
