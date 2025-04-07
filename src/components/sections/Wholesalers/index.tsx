'use client';

import Image from 'next/image';
import {Truck} from 'lucide-react';

const Wholesalers = () => {
  return (
    <div className="h-[75%] bg-white mt-82 md:mt-8">
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <Truck size={40} />
        <p className='text-2xl font-bold'>ENVIOS MAYORISTAS A TODO EL PAÍS</p>
      </div>
    </div>
  );
};

export default Wholesalers;