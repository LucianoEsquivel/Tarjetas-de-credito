
const baseDatosPromos = [
    // ==========================================
    // 1. PAYWAY (3, 6 y 12 Cuotas)
    // ==========================================
    {
        plataforma: "payway",
        cuotas: 3,
        recargo_porcentaje: 3.05, //
        recargo_minimo: 0.00      // 
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
        recargo_porcentaje: 11.27, 
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
    // 3. NAVE - GALICIA (3 y 6 Cuotas)
    // ==========================================
    {
        plataforma: "nave",
        cuotas: 3,
        recargo_porcentaje: 4.40, 
        recargo_minimo: 0.00 
    },

    {
        plataforma: "nave",
        cuotas: 6,
        recargo_porcentaje: 7.30, 
        recargo_minimo: 0.00 
    },

    {
        plataforma: "nave",
        cuotas: 9,
        recargo_porcentaje: 10.40, 
        recargo_minimo: 0.00 
    },

    {
        plataforma: "nave",
        cuotas: 12,
        recargo_porcentaje: 12.80, 
        recargo_minimo: 0.00 
    },
];

// ==========================================
// BASE DE DATOS DE NOVEDADES
// ==========================================
const baseDatosNovedades = [
    {
        fecha: "29/06/2026",
        titulo: "Payway",
        descripcion: "Payway bajo su tasa directa en todos sus plazos"
    },
    
    {
        fecha: "29/06/2026",
        titulo: "Getnet",
        descripcion: "Getnet bajo su tasa directa en todos sus plazos"
    }
];