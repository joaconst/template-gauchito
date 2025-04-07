'use client';

import Image from 'next/image';
import Link from 'next/link';

const Buttons = () => {
  return (
    <section className="relative py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {/* Botón 1 - Mates */}
          <Link href="#" className="group flex flex-col items-center">
            <div className="relative w-24 h-24 md:w-44 md:h-44 shadow-[2px_3px_0px_#000] rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/buttons/button-1.webp"
                  alt="Mates"
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-secondary transition-colors -z-1 shadow-[4px_4px_0px_#000]" />
            </div>
            <span className="mt-4 text-2xl font-bold uppercase group-hover:text-secondary transition-colors">
              Mates
            </span>
          </Link>

          {/* Botón 2 - Cuencos */}
          <Link href="#" className="group flex flex-col items-center">
            <div className="relative w-24 h-24 md:w-44 md:h-44 shadow-[2px_3px_0px_#000] rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/buttons/button-2.webp"
                  alt="Cuencos"
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-primary transition-colors -z-1" />
            </div>
            <span className="mt-4 text-2xl font-bold uppercase group-hover:text-primary transition-colors">
              Cuencos
            </span>
          </Link>

          {/* Botón 3 - Tablas */}
          <Link href="#" className="group flex flex-col items-center">
            <div className="relative w-24 h-24 md:w-44 md:h-44 shadow-[2px_3px_0px_#000] rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/buttons/button-3.webp"
                  alt="Tablas"
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-tertiary transition-colors -z-1" />
            </div>
            <span className="mt-4 text-2xl font-bold uppercase group-hover:text-tertiary transition-colors">
              Tablas
            </span>
          </Link>

          {/* Botón 4 - Platos */}
          <Link href="#" className="group flex flex-col items-center">
            <div className="relative w-24 h-24 md:w-44 md:h-44 shadow-[2px_3px_0px_#000] rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/buttons/button-4.webp"
                  alt="Platos"
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-fourth transition-colors -z-1" />
            </div>
            <span className="mt-4 text-2xl font-bold uppercase group-hover:text-fourth transition-colors">
              Platos
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Buttons;
