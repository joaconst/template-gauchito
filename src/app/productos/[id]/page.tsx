'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import productosSimulados from '@/data/productosSimulados';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

const ProductoDetalle = () => {
    const params = useParams();
    const id = params.id as string;
    const producto = productosSimulados[id];
    const [cantidad, setCantidad] = useState<number>(1);
    const [imagenPrincipal, setImagenPrincipal] = useState<string>(`/products/mates/mate-${id}.webp`);
    const { addToCart } = useCart();

    if (!producto) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 p-8 text-center">
                <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full">
                        <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800">Producto no encontrado</h1>
                    <p className="text-lg text-gray-600">Lo sentimos, no podemos encontrar el producto que buscas</p>
                </div>
                
                <div className="flex gap-4">
                    <Link
                        href="/"
                        className="mt-6 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium flex items-center gap-2"
                    >
                        <ArrowLeft size={18} />
                        Volver al inicio
                    </Link>
                    <Link
                        href="/productos"
                        className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center gap-2"
                    >
                        <ArrowLeft size={18} />
                        Ver productos
                    </Link>
                </div>
            </div>
        );
    }

    const handleAgregarAlCarrito = () => {
        addToCart({
            id,
            nombre: producto.nombre,
            cantidad,
            precio: producto.precio,
            imagen: `/products/mates/mate-${id}.webp`
        });
    };

    return (
        <div className="container mx-auto p-4">
            {/* Botón Volver arriba del breadcrumb */}
            <div className="mb-4">
                <Link
                    href="/productos"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                >
                    <ArrowLeft size={16} />
                    Volver a los productos
                </Link>
            </div>

            <article className="border-b">
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
                            loading="lazy"
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
                                    loading="lazy"
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
                                        aria-label="Reducir cantidad"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 w-12 text-center">{cantidad}</span>
                                    <button
                                        onClick={() => setCantidad(cantidad + 1)}
                                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                                        aria-label="Aumentar cantidad"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleAgregarAlCarrito}
                                className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <ShoppingCart size={20} />
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
                        {Object.entries(productosSimulados)
                            .filter(([key]) => key !== id)
                            .slice(0, 4)
                            .map(([key, producto]) => (
                                <div
                                    key={key}
                                    className="w-56 lg:w-64 flex-shrink-0 bg-white p-4 rounded-xl shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] transition-shadow"
                                >
                                    <Link
                                        href={`/productos/${key}`}
                                        className="block"
                                    >
                                        <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                                            <img
                                                src={`/products/mates/${producto.imagenes[0]}.webp`}
                                                alt={producto.nombre}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform"
                                                loading="lazy"
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

            {/* Botón Volver al final */}
            <div className="mt-12 text-center">
                <Link
                    href="/productos"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                    <ArrowLeft size={18} className="mr-2" />
                    Volver a todos los productos
                </Link>
            </div>
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