'use client';

import Image from 'next/image';
import { Truck } from 'lucide-react';

const Wholesalers = () => {
  return (
    <div className="h-auto bg-white mt-82 md:mt-8">
      <div className="max-w-6xl mx-auto p-4">
        {/* Versión mobile (una debajo de otra) */}
        <div className="flex flex-col gap-8 md:hidden">
          {/* Bloque Combos Emprendedores */}
          <div className="flex flex-col items-center">
            <Image
              alt="Wooden bowls"
              className="border-4 rounded-4xl"
              width={400}
              height={200}
              src="/sections/wholesalers/wholesalers-1.webp"
            />
            <h2 className="text-3xl font-bold mt-4">Combos emprendedores</h2>
            <p className="text-center mt-2 text-xl">
              5 combos emprendedores diseñados exclusivamente para vos
            </p>
            <button className="mt-4 bg-primary text-white py-3 px-6 rounded-full hover:bg-primary/80 transition-colors">
              VER MÁS
            </button>
          </div>

          {/* Bloque Mayoristas */}
          <div className="flex flex-col items-center">
            <Image
              alt="Wooden cups"
              className="rounded-4xl"
              width={400}
              height={200}
              src="/sections/wholesalers/wholesalers-2.webp"
            />
            <h2 className="text-3xl font-bold mt-4">Mayoristas</h2>
            <p className="text-center mt-2 text-xl">
              Precios especiales para compra superiores a 10, 50 y 100 unidades
            </p>
            <button className="mt-4 bg-primary text-white py-3 px-6 rounded-full hover:bg-primary/80 transition-colors">
              VER MÁS
            </button>
          </div>
        </div>

        {/* Versión desktop (dos columnas) */}
        <div className="hidden md:grid grid-cols-2 gap-4">
          {/* Columna Combos Emprendedores */}
          <div className="flex flex-col items-center">
            <Image
              alt="Wooden bowls"
              className="border-4 rounded-4xl"
              width={400}
              height={200}
              src="/sections/wholesalers/wholesalers-1.webp"
            />
            <h2 className="text-3xl font-bold mt-4">Combos emprendedores</h2>
            <p className="text-center mt-2 text-xl">
              5 combos emprendedores diseñados exclusivamente para vos
            </p>
            <button className="mt-4 bg-primary text-white py-3 px-6 rounded-full hover:bg-primary/80 transition-colors">
              VER MÁS
            </button>
          </div>

          {/* Columna Mayoristas */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold">Mayoristas</h2>
            <p className="text-center mt-2 text-xl">
              Precios especiales para compra superiores a 10, 50 y 100 unidades
            </p>
            <button className="mt-4 bg-primary text-white py-3 px-6 rounded-full hover:bg-primary/80 transition-colors">
              VER MÁS
            </button>
            <Image
              alt="Wooden cups"
              className="mt-4 rounded-4xl"
              width={400}
              height={200}
              src="/sections/wholesalers/wholesalers-2.webp"
            />
          </div>
        </div>
      </div>

      {/* Sección de Envíos */}
      <div className="bg-primary text-white text-center py-4 mt-4 flex items-center justify-center gap-2">
        <Truck className="w-8 h-8 md:w-10 md:h-10" />
        <p className="text-lg md:text-2xl font-bold">
          ENVIOS MAYORISTAS A TODO EL PAÍS
        </p>
      </div>
    </div>
  );
};

export default Wholesalers;
