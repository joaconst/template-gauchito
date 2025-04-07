'use client';

import React, { useRef, useState, useEffect } from 'react';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';

const Info = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      icon: <CreditCard className="w-10 h-10 text-primary" />,
      title: 'Tarjetas bancarizadas',
      description: 'Múltiples métodos de pago',
      extraClasses: 'md:pr-12 md:border-r',
    },
    {
      icon: <Truck className="w-10 h-10 text-primary" />,
      title: 'Envíos a todo el país',
      description: 'Rastreo en tiempo real',
      extraClasses: 'md:px-12 md:border-r',
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: 'Sitio seguro',
      description: 'Protegemos tus datos',
      extraClasses: 'md:pt-0',
    },
  ];

  // Calcula cuál es la tarjeta que está en el centro del contenedor
  const handleScroll = () => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      Array.from(container.children).forEach((child, index) => {
        const childRect = child.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndex(closestIndex);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="bg-gray-50 py-8 md:py-12 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Slider en mobile y layout normal en desktop */}
        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-12 overflow-x-auto snap-x snap-mandatory md:overflow-visible hidden-scrollbar"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 hover:opacity-80 transition-opacity pb-4 md:pb-0 ${card.extraClasses} border-primary/50 last:border-0 flex-shrink-0 w-[80%] md:w-auto snap-center`}
            >
              {card.icon}
              <div>
                <h3 className="font-semibold text-xl">{card.title}</h3>
                <p className="text-gray-600 text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Indicadores con puntos */}
        <div className="md:hidden flex justify-center mt-4 gap-2">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
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
