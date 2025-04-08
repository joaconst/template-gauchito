'use client';

import React, { useRef, useState, useEffect } from 'react';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';

const Info = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      icon: <CreditCard className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
      title: 'Tarjetas bancarizadas',
      description: 'Múltiples métodos de pago',
    },
    {
      icon: <Truck className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
      title: 'Envíos a todo el país',
      description: 'Rastreo en tiempo real',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
      title: 'Sitio seguro',
      description: 'Protegemos tus datos',
    },
  ];

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childElement = child as HTMLElement;
      const childRect = childElement.getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener('scroll', handleScroll, { passive: true });
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 py-8 md:py-12 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div
          ref={sliderRef}
          className="flex md:grid md:grid-cols-3 gap-4 lg:gap-8 xl:gap-12
            overflow-x-auto scroll-smooth snap-x snap-mandatory
            md:overflow-visible hidden-scrollbar md:divide-x divide-primary/50"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 items-center gap-3 lg:gap-4 
                min-w-[80%] sm:min-w-[60%] md:min-w-0 w-auto max-w-md
                hover:opacity-80 transition-opacity pb-4 md:pb-0 
                snap-center px-2 md:px-0"
            >
              {card.icon}
              <div>
                <h3 className="font-semibold text-lg md:text-lg lg:text-xl">{card.title}</h3>
                <p className="text-gray-600 text-base lg:text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores para mobile */}
        <div className="md:hidden flex justify-center mt-4 gap-2">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-primary' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
