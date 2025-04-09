'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

const Cuencos = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const cards = [
        { title: "Cuencos Vírgenes", img: "products/cuencos/cuenco-1.webp", alt: "Cuenco artesanal 1" },
        { title: "Cuencos Lijados y Barnizados", img: "products/cuencos/cuenco-2.webp", alt: "Cuenco artesanal 2" },
    ];

    return (
        <section className="bg-primary py-6 mt-16">
            <h2 className="text-3xl font-bold text-center mb-4 mt-4">Cuencos</h2>

            <div className="container mx-auto px-8 lg:px-0 h-auto relative">
                <button
                    ref={prevRef}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary p-2 rounded-full border shadow hover:bg-primary/90 transition"
                >
                    <ArrowBigLeft className="text-white w-6 h-6" />
                </button>

                <button
                    ref={nextRef}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary p-2 rounded-full border shadow hover:bg-primary/90 transition"
                >
                    <ArrowBigRight className="text-white w-6 h-6" />
                </button>

                <Swiper
                    className="custom-swiper"
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
                        1024: { slidesPerView: 2 },
                    }}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index} className="p-4">
                            <div className="bg-primary-foreground h-[60vh] rounded-2xl shadow-[2px_2px_0px_black] hover:scale-105 hover:shadow-none hover:ring-2 hover:ring-black transition-all duration-300">
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
            <style>
                {`
                    .custom-swiper .swiper-wrapper {
                        margin-left: auto;
                        margin-right: auto;
                    }
                `}
            </style>
        </section>
    );
};

export default Cuencos;