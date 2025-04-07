'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Adivace = () => {
    return (
        <main className="flex flex-col items-center justify-center mt-8">
            <div className="flex flex-col items-center space-y-8 max-w-6xl w-full">
                <div className="flex flex-col md:flex-row gap-8 w-full justify-center p-4 md:p-0">
                    {/* Primera Card */}
                    <div className="bg-white rounded-4xl shadow-lg overflow-hidden w-full md:w-[400px]">
                        <div className="p-4 flex justify-between items-center">
                            <div className="flex gap-2">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-6 h-6 bg-primary rounded-full" />
                                ))}
                            </div>
                        </div>

                        <div className="relative h-48 w-full">
                            <Image
                                src="/sections/adivace/adivace-1.webp"
                                alt="A mate with some pastries"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Capa negra semi-transparente sobre la imagen */}
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Texto centrado en la imagen */}
                            <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                                <h2 className="text-white text-xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                    ¿Cómo curar tu mate?
                                </h2>
                            </div>
                        </div>

                        <div className="p-4 bg-white">
                            <div className="flex justify-between items-center hover:opacity-75 transition-opacity">
                                <a href="#" className="text-gray-900 font-semibold">
                                    Ver más
                                </a>
                                <ArrowRight size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Segunda Card */}
                    <div className="bg-white rounded-4xl shadow-lg overflow-hidden w-full md:w-[400px]">
                        <div className="p-4 flex justify-between items-center">
                            <div className="flex gap-2">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-6 h-6 bg-secondary rounded-full" />
                                ))}
                            </div>
                        </div>

                        <div className="relative h-48 w-full">
                            <Image
                                src="/sections/adivace/adivace-2.webp"
                                alt="A hand dipping food into a bowl"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Capa negra semi-transparente sobre la imagen */}
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Texto centrado en la imagen */}
                            <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                                <h2 className="text-white text-xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                    ¿Cómo curar tus platos, cuencos y tablas?
                                </h2>
                            </div>
                        </div>

                        <div className="p-4 bg-white">
                            <div className="flex justify-between items-center hover:opacity-75 transition-opacity">
                                <a href="#" className="text-gray-900 font-semibold">
                                    Ver más
                                </a>
                                <ArrowRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-gray-800 text-lg text-center">
                    Para más consejos seguinos en Instagram!
                </p>
            </div>
        </main>
    );
};

export default Adivace;