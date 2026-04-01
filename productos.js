/**
 * ==========================================
 * 📋 DATOS DE LA TIENDITA (productos.js)
 * ==========================================
 * Este archivo SOLO contiene la información.
 */

const CONFIG_TIENDA = {
    whatsapp: "50762852414",
    escuela: "Buen Pastor Golden Haven",
    nombreTienda: "La Tiendita Escolar",
    eslogan: "Sabores que me encantan",
    logoUrl: "img/img/productos/imglogo-escuela.jpg"
};

/**
 * AQUÍ DEFINES:
 * - cuántas categorías hay
 * - el orden en que salen
 * - el título visible
 */
const CATEGORIAS_MENU = [
    { id: "Desayunos", titulo: "Desayunos" },
    { id: "Bebidas", titulo: "Bebidas" },
    { id: "Postres frios", titulo: "Postres Fríos" },
    { id: "snacks", titulo: "snacks" },
    { id: "Delicias Orientales", titulo: "Delicias Orientales" },
    { id: "Útiles Escolares", titulo: "Útiles Escolares" },
    
];

const LISTA_PRODUCTOS = [
    
    {
        id: "p1",
        name: "Malta Vigor chica",
        price: 0.65,
        img: "img/img/productos/malta-vigor-chica.png",
        categoria: "Bebidas",
        agotado: false
    },
    {
        id: "p2",
        name: "Malta Vigor",
        price: 1.00,
        img: "img/img/productos/malta-vigor.png",
        categoria: "Bebidas",
        agotado: true
    },
    {
        id: "p3",
        name: "Jugo de Lata",
        price: 1.00,
        img: "img/img/productos/jugos-lata-del-monte.png",
        categoria: "Bebidas",
        agotado: true
    },
    {
        id: "p24",
        name: "Jugo Surtido Petit",
        price: 0.55,
        img: "img/img/productos/jugos_petit.png",
        categoria: "Bebidas",
        agotado: false
    },
    {
        id: "p4",
        name: "Jugo del monte surtido",
        price: 0.60,
        img: "img/img/productos/jugo-del-monte-surtido.png",
        categoria: "Bebidas",
        agotado: false
    },
    {
        id: "p5",
        name: "Pancake con huevo frutas y te canela",
        price: 0.00,
        img: "img/img/productos/pancake-huevo-frutas-te-canela.png",
        categoria: "Desayunos",
        agotado: true
    },
    {
        id: "p6",
        name: "Duros De Frutas",
        price: 0.50,
        img: "img/img/productos/duros-frutas.png",
        categoria: "Postres frios",
        agotado: false
    },
    {
        id: "p7",
        name: "Duros De Frutas grandes",
        price: 1.00,
        img: "img/img/productos/duros-frutas_1_.png",
        categoria: "Postres frios",
        agotado: false
    },
    {
        id: "p8",
        name: "Gelatina",
        price: 0.00,
        img: "img/img/productos/gelatina.png",
        categoria: "Postres frios",
        agotado: true
    },
    {
        id: "p9",
        name: "Arroz con Leche",
        price: 0.00,
        img: "img/img/productos/arroz-con-leche.png",
        categoria: "Postres frios",
        agotado: true
    },
    {
        id: "p10",
        name: "bollo con huevo revuelto guineo y té",
        price: 0.00,
        img: "img/img/productos/bollo-huevo-hervido-guineo-te.png",
        categoria: "Desayunos",
        agotado: true
    },
    {
        id: "p11",
        name: "Empanadas",
        price: 0.00,
        img: "img/img/productos/empanadas.jpg",
        categoria: "Desayunos",
        agotado: true
    },
    {
        id: "p12",
        name: "Burritos fruta té ó jugo",
        price: 0.00,
        img: "img/img/productos/burritos-fruta-te.png",
        categoria: "Desayunos",
        agotado: true
    },
    {
        id: "p13",
        name: "Emparedado de Atún con frutas y té",
        price: 0.00,
        img: "img/img/productos/emparedado-atun-frutas.png",
        categoria: "Desayunos",
        agotado: true
    },
    {
        id: "p14",
        name: "Emparedado de Jamón y Queso con frutas y té",
        price: 0.00,
        img: "img/img/productos/emparedado-jamon-queso.png",
        categoria: "Desayunos",
        agotado: true
    },
    {
        id: "p15",
        name: "Siu Mai",
        price: 0.60,
        img: "img/img/productos/siumai.png",
        categoria: "Delicias Orientales",
        agotado: false
    },
    {
        id: "p16",
        name: "Rollito De Primavera",
        price: 0.00,
        img: "img/img/productos/rollito_primavera.png",
        categoria: "Delicias Orientales",
        agotado: true

    },
    {
        id: "p17",
        name: "Hampao",
        price: 0.00,
        img: "img/img/productos/hampao.png",
        categoria: "Delicias Orientales",
        agotado: true
    },
    {
        id: "p18",
        name: "Galleta de Pasitas",
        price: 0.40,
        img: "img/img/productos/galleta-pasita.png",
        categoria: "snacks",
        agotado: true
    },
    {
        id: "p19",
        name: "Galleta pascual",
        price: 0.40,
        img: "img/img/productos/galleta-sal-pascual.png",
        categoria: "snacks",
        agotado: false
    },
    {
        id: "p32",
        name: "Galleta Rellena de Queso Blanco",
        price: 0.50,
        img: "img/img/productos/galletas-bokitas.png",
        categoria: "snacks",
        agotado: false
    },
    {
        id: "p20",
        name: "Platanitos",
        price: 0.35,
        img: "img/img/productos/platanito.png",
        categoria: "snacks",
        agotado: false
    },
    {
        id: "p23",
        name: "Galleta María",
        price: 0.25,
        img: "img/img/productos/galleta_maria.png",
        categoria: "snacks",
        agotado: false
    },
    {
        id: "p24",
        name: "Bolígrafos",
        price: 0.00,
        img: "img/img/productos/boligrafos_bic.png",
        categoria: "Útiles Escolares",
        agotado: true
    },
{
        id: "p25",
        name: "borrador blanco",
        price: 0.00,
        img: "img/img/productos/borrador.png",
        categoria: "Útiles Escolares",
        agotado: true
    },
    {
        id: "p26",
        name: "Copias Blanco y Negro",
        price: 0.10,
        img: "img/img/productos/copias_blanco_negro.png",
        categoria: "Útiles Escolares",
        agotado: true
    },
    {
        id: "p27",
        name: "Copias a Color",
        price: 0.25,
        img: "img/img/productos/copias_color.png",
        categoria: "Útiles Escolares",
        agotado: true
    },
    {
        id: "p28",
        name: "Lapices de Colores",
        price: 0.00,
        img: "img/img/productos/lapices_colores.png",
        categoria: "Útiles Escolares",
        agotado: true
    },
    {
        id: "p29",
        name: "Lapices Mongol",
        price: 0.00,
        img: "img/img/productos/lapiz_mongol.png",
        categoria: "Útiles Escolares",
        agotado: true
    },
    {
        id: "p30",
        name: "Papel de Construccion",
        price: 0.00,
        img: "img/img/productos/papel_construccion.png",
        categoria: "Útiles Escolares",
        agotado: true
    },
    {
        id: "p31",
        name: "Papel Foami",
        price: 0.00,
        img: "img/img/productos/papel_foami.png",
        categoria: "Útiles Escolares",
        agotado: true
    },
];