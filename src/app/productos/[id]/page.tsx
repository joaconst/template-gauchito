'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

interface Producto {
    nombre: string;
    tipo: string;
    caracteristicas?: string;
    descripcion?: string;
    altura?: string;
    profundidad?: string;
    diametro?: string;
    alerta?: string;
    precio: number;
    imagenes: string[];
}

const productosSimulados: { [key: string]: Producto } = {
    '1': {
        nombre: 'Mates pintados meme',
        tipo: 'Mates',
        caracteristicas: 'Mate pintado meme. Elegí el flork que más te guste o inspírate en uno de nuestros diseños.',
        altura: '9cm de altura',
        profundidad: '7cm de profundidad',
        diametro: '8cm de diámetro',
        alerta: 'Todos nuestros artículos son 100% artesanales por lo que las medidas son aproximadas',
        precio: 5000,
        imagenes: ['mate-1', 'mate-2', 'mate-3', 'mate-4']
    },
    '2': {
        nombre: 'Mate Lijado y Barnizado',
        tipo: 'Mates',
        descripcion: 'Mate con tratamiento superficial listo para usar',
        altura: '10cm de altura',
        profundidad: '8cm de profundidad',
        diametro: '9cm de diámetro',
        precio: 3800,
        imagenes: ['mate-1', 'mate-2', 'mate-3', 'mate-4']
    },
    '3': {
        nombre: 'Mate Pintado',
        tipo: 'Mates',
        descripcion: 'Mate con diseños artesanales pintados a mano',
        altura: '11cm de altura',
        profundidad: '9cm de profundidad',
        diametro: '10cm de diámetro',
        precio: 4500,
        imagenes: ['mate-1', 'mate-2', 'mate-3', 'mate-4']
    },
    '4': {
        nombre: 'Mate Grabado',
        tipo: 'Mates',
        descripcion: 'Mate con grabados láser personalizados',
        altura: '12cm de altura',
        profundidad: '10cm de profundidad',
        diametro: '11cm de diámetro',
        precio: 5200,
        imagenes: ['mate-1', 'mate-2', 'mate-3', 'mate-4']
    },
};

const ProductoDetalle = () => {
    const params = useParams();
    const id = params.id as string;
    const producto = productosSimulados[id];
    const [cantidad, setCantidad] = useState<number>(1);
    const [imagenPrincipal, setImagenPrincipal] = useState<string>(`/products/mates/mate-${id}.webp`);

    if (!producto) {
        return <div className="p-4 text-red-500">Producto no encontrado</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <article className='border-b'>
                <Breadcrumb
                    items={[
                        { label: 'Inicio', href: '/' },
                        { label: 'Productos', href: '/productos' },
                        { label: producto.nombre },
                    ]}
                />

                <div className="grid lg:grid-cols-[120px_2fr_2fr] gap-6 p-6">
                    {/* Imagen principal */}
                    <div className="order-1 lg:order-2 h-[400px] lg:h-[528px] flex items-center justify-center p-4">
                        <img
                            src={imagenPrincipal}
                            alt={producto.nombre}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className="order-2 lg:order-1 flex flex-row lg:flex-col gap-4 lg:h-[528px] overflow-x-auto lg:overflow-y-auto pb-4 md:items-center md:justify-center">
                        {producto.imagenes.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setImagenPrincipal(`/products/mates/${img}.webp`)}
                                className="w-32 lg:w-full lg:h-[120px] flex-shrink-0 overflow-hidden rounded-lg border-2 hover:border-primary transition-all"
                            >
                                <img
                                    src={`/products/mates/${img}.webp`}
                                    alt={`Vista ${index + 1} de ${producto.nombre}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                                />
                            </button>
                        ))}
                    </div>

                    {/* Detalles de compra */}
                    <div className="order-3 space-y-6">
                        <div className="border-b pb-8">
                            <h2 className="text-xl text-gray-500 mb-2">{producto.tipo}</h2>
                            <h1 className="text-4xl font-bold text-gray-800">{producto.nombre}</h1>
                        </div>

                        <div className="text-3xl font-semibold text-primary border-b pb-8">
                            ${producto.precio.toLocaleString('es-AR')}
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b pb-8">
                                <span className="text-lg font-medium">Cantidad:</span>
                                <div className="flex items-center border">
                                    <button
                                        onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 w-12 text-center">{cantidad}</span>
                                    <button
                                        onClick={() => setCantidad(cantidad + 1)}
                                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg shadow-lg hover:shadow-lg"
                                onClick={() => alert(`Agregado al carrito: ${cantidad} unidades`)}
                            >
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Características y medidas */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 text-center">
                <article className="p-4">
                    <h3 className="text-2xl font-bold mb-3">Características</h3>
                    <p className="text-gray-600 text-lg">{producto.caracteristicas}</p>
                </article>

                <article className="p-4">
                    <h3 className="text-2xl font-bold mb-3">Medidas</h3>
                    <div className="text-gray-600 text-lg space-y-2 flex flex-col items-center justify-center">
                        <article className="text-left">
                            <p>{producto.altura}</p>
                            <p>{producto.profundidad}</p>
                            <p>{producto.diametro}</p>
                        </article>
                        <p className="text-sm text-gray-500 mt-4">{producto.alerta}</p>
                    </div>
                </article>
            </section>

            {/* Productos relacionados */}
            <section className="mt-16 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-8 text-center">Productos relacionados</h2>
                
                <div className="w-full overflow-x-auto pb-4">
                    <div className="flex gap-4 px-4 w-max lg:w-full lg:justify-center">
                        {Object.values(productosSimulados).map((producto) => (
                            <div
                                key={producto.nombre}
                                className="w-56 lg:w-64 flex-shrink-0 bg-white p-4 rounded-xl shadow-[2px_2px_0px_black] transition-shadow"
                            >
                                <Link
                                    href={`/productos/${Object.keys(productosSimulados).find(key => productosSimulados[key] === producto)}`}
                                    className="block"
                                >
                                    <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                                        <img
                                            src={`/products/mates/${producto.imagenes[0]}.webp`}
                                            alt={producto.nombre}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{producto.nombre}</h3>
                                    <p className="text-xl font-bold text-primary">
                                        ${producto.precio.toLocaleString('es-AR')}
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const Breadcrumb = ({ items }: { items: Array<{ label: string; href?: string }> }) => (
    <nav aria-label="Migajas de pan" className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
            {items.map((item, index) => (
                <li key={item.label} className="flex items-center">
                    {item.href ? (
                        <Link href={item.href} className="hover:text-primary transition-colors">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="font-medium text-primary">{item.label}</span>
                    )}
                    {index < items.length - 1 && <span className="ml-2">/</span>}
                </li>
            ))}
        </ol>
    </nav>
);

export default ProductoDetalle;