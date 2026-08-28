const baseDatosPromos = [
    // ==========================================
    // 1. PAYWAY (3, 6 y 12 Cuotas) - UNIFICADO
    // ==========================================
    {
        plataforma: "payway",
        cuotas: 3,
        recargo_porcentaje: 3.64, 
        recargo_minimo: 0.00      
    },
    {
        plataforma: "payway",
        cuotas: 6,
        recargo_porcentaje: 7.01, 
        recargo_minimo: 0.00 
    },
    {
        plataforma: "payway",
        cuotas: 12,
        recargo_porcentaje: 13.29, 
        recargo_minimo: 0.00 
    },

    // ==========================================
    // 2. GETNET (3 y 6 Cuotas)
    // ==========================================
    {
        plataforma: "getnet",
        cuotas: 3,
        recargo_porcentaje: 4.85, 
        recargo_minimo: 0.00 
    },
    {
        plataforma: "getnet",
        cuotas: 6,
        recargo_porcentaje: 8.40, 
        recargo_minimo: 0.00 
    },

    // ==========================================
    // 3. NAVE - GALICIA (3, 6, 9 y 12 Cuotas)
    // ==========================================
    {
        plataforma: "nave",
        cuotas: 3,
        recargo_porcentaje: 4.90, 
        recargo_minimo: 0.00 
    },
    {
        plataforma: "nave",
        cuotas: 6,
        recargo_porcentaje: 8.40, 
        recargo_minimo: 0.00 
    },
    {
        plataforma: "nave",
        cuotas: 9,
        recargo_porcentaje: 12.40, 
        recargo_minimo: 0.00 
    },
    {
        plataforma: "nave",
        cuotas: 12,
        recargo_porcentaje: 15.60, 
        recargo_minimo: 0.00 
    },
];

// ==========================================
// BASE DE DATOS DE NOVEDADES
// ==========================================
const baseDatosNovedades = [
    {
        fecha: "20/08/2026",
        titulo: "Payway",
        descripcion: "Se unificaron todos los bancos en un solo botón de Payway y se actualizaron las tasas para 3, 6 y 12 cuotas.",
    },
    {
        fecha: "05/08/2026",
        titulo: "Nave",
        descripcion: "Nave aumento las tasas de recargo para 3, 6, 9 y 12 cuotas.",
    },
];