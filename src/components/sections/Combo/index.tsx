import Image from 'next/image';

const Combo = () => {
    return (
        <section className='h-60 flex flex-wrap items-center justify-center mt-16 gap-8 px-4'>
            {/* Primer combo */}
            <article className='w-full md:w-1/3 h-full bg-secondary rounded-4xl flex overflow-hidden'>
                {/* Imagen */}
                <div className='w-1/2 h-full flex items-center justify-center p-2'>
                    <div className='relative w-full h-full rounded-3xl overflow-hidden'>
                        <Image
                            src='/sections/combos/combos-1.webp'
                            alt='Combo 1'
                            fill
                            className='object-cover object-center'
                            style={{ position: 'absolute' }}
                        />
                    </div>
                </div>

                {/* Separador */}
                <div className='h-[80%] w-[4px] bg-white self-center rounded-full'></div>

                {/* Texto */}
                <div className='w-1/2 flex items-center justify-center p-4 text-white'>
                    <h3 className='text-xl md:text-2xl font-bold text-center uppercase'>
                        Combos para picada
                    </h3>
                </div>
            </article>

            {/* Segundo combo */}
            <article className='w-full md:w-1/3 h-full bg-tertiary rounded-4xl flex overflow-hidden'>
                {/* Imagen */}
                <div className='w-1/2 h-full flex items-center justify-center p-2'>
                    <div className='relative w-full h-full rounded-3xl overflow-hidden'>
                        <Image
                            src='/sections/combos/combos-2.webp'
                            alt='Combo 2'
                            fill
                            className='object-cover object-center'
                            style={{ position: 'absolute' }}
                        />
                    </div>
                </div>

                {/* Separador */}
                <div className='h-[80%] w-[4px] bg-white self-center rounded-full'></div>

                {/* Texto */}
                <div className='w-1/2 flex items-center justify-center p-4 text-white'>
                    <h3 className='text-xl md:text-2xl font-bold text-center uppercase'>
                        Combos para picada
                    </h3>
                </div>
            </article>
        </section>
    );
};

export default Combo;
