'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

const Regalos = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const cards = [
        { title: "Box 1", img: "products/regalos/box-1.webp", alt: "Box artesanal 1" },
        { title: "Box 2", img: "products/regalos/box-2.webp", alt: "Box artesanal 2" },
        { title: "Box 3", img: "products/regalos/box-3.webp", alt: "Box artesanal 3" },
        { title: "Box 4", img: "products/regalos/box-4.webp", alt: "Box artesanal 4" },
    ];

    return (
        <section className="bg-tertiary py-6 mt-16">
            <h2 className="text-3xl font-bold text-center mb-4 mt-4">Combos para regalos</h2>

            <div className="container mx-auto px-8 lg:px-0 h-auto relative">
                {/* Botones personalizados */}
                <button
                    ref={prevRef}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary p-2 rounded-full shadow hover:bg-primary/90 transition"
                >
                    <ArrowBigLeft className="text-white w-6 h-6" />
                </button>

                <button
                    ref={nextRef}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary p-2 rounded-full shadow hover:bg-primary/90 transition"
                >
                    <ArrowBigRight className="text-white w-6 h-6" />
                </button>

                <Swiper
                    loop={true}
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index} className="p-4">
                            <div className="bg-tertiary-foreground h-[60vh] rounded-2xl shadow-[2px_2px_0px_black] hover:scale-105 hover:shadow-none hover:ring-2 hover:ring-black transition-all duration-300">
                                <img
                                    src={card.img}
                                    alt={card.alt}
                                    className="w-full h-68 object-cover p-2 rounded-2xl"
                                />
                                <div className="p-4">
                                    <h3 className="text-2xl font-semibold text-center border-t pt-4">{card.title}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Regalos;
