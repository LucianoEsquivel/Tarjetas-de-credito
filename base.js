
const baseDatosPromos = [
    // ==========================================
    // 1. PAYWAY (3, 6 y 12 Cuotas)
    // ==========================================
    {
        plataforma: "payway",
        cuotas: 3,
        recargo_porcentaje: 3.05, 
        recargo_minimo: 0.00      
    },
    {
        plataforma: "payway",
        cuotas: 6,
        recargo_porcentaje: 5.90, 
        recargo_minimo: 0.00 
    },
    {
        plataforma: "payway",
        cuotas: 12,
        recargo_porcentaje: 8.64, 
        recargo_minimo: 0.00 
    },

    // ==============================================================================================================================
    // 1. PAYWAY2 (3, 6 y 12 Cuotas) (BBVA Francés, Santander, grupo Galicia, Nación, CMR, Mira, Nevada, Naranja y Macro)
    // ==============================================================================================================================
    {
        plataforma: "Payway",
        cuotas: 3,
        recargo_porcentaje: 3.64, 
        recargo_minimo: 0.00      
    },
    {
        plataforma: "Payway",
        cuotas: 6,
        recargo_porcentaje: 7.01, 
        recargo_minimo: 0.00 
    },
    {
        plataforma: "Payway",
        cuotas: 12,
        recargo_porcentaje: 11.77, 
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
        descripcion: "Payway bajo sus tasas en el plazo 9 y en Payway (BBVA, Santander, BNA, N, etc) bajo sus tasas en todos los plazos (3, 6 y 9).",
    },
    {
        fecha: "05/08/2026",
        titulo: "Nave",
        descripcion: "Nave aumento las tasas de recargo para 3, 6, 9 y 12 cuotas.",
    },
    
];