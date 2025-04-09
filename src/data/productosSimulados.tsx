interface Producto {
    nombre: string;
    tipo: string;
    caracteristicas?: string;
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
        imagenes: ['mate-1', 'mate-1', 'mate-1', 'mate-1']
    },
    '2': {
        nombre: 'Mate Lijado y Barnizado',
        tipo: 'Mates',
        caracteristicas: 'Mate con tratamiento superficial listo para usar',
        altura: '10cm de altura',
        profundidad: '8cm de profundidad',
        diametro: '9cm de diámetro',
        alerta: 'Todos nuestros artículos son 100% artesanales por lo que las medidas son aproximadas',
        precio: 3800,
        imagenes: ['mate-2', 'mate-2', 'mate-2', 'mate-2']
    },
    '3': {
        nombre: 'Mate Pintado',
        tipo: 'Mates',
        caracteristicas: 'Mate con diseños artesanales pintados a mano',
        altura: '11cm de altura',
        profundidad: '9cm de profundidad',
        diametro: '10cm de diámetro',
        alerta: 'Todos nuestros artículos son 100% artesanales por lo que las medidas son aproximadas',
        precio: 4500,
        imagenes: ['mate-3', 'mate-3', 'mate-3', 'mate-3']
    },
    '4': {
        nombre: 'Mate Grabado',
        tipo: 'Mates',
        caracteristicas: 'Mate con grabados láser personalizados',
        altura: '12cm de altura',
        profundidad: '10cm de profundidad',
        diametro: '11cm de diámetro',
        alerta: 'Todos nuestros artículos son 100% artesanales por lo que las medidas son aproximadas',
        precio: 5200,
        imagenes: ['mate-4', 'mate-4', 'mate-4', 'mate-4']
    },
};

export default productosSimulados;
