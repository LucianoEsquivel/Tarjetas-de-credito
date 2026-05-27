
const baseDatosPromos = [
    // ==========================================
    // 1. PAYWAY (3, 6 y 12 Cuotas)
    // ==========================================
    {
        plataforma: "payway",
        cuotas: 3,
        recargo_porcentaje: 3.83, //
        recargo_minimo: 0.00      // 
    },
    {
        plataforma: "payway",
        cuotas: 6,
        recargo_porcentaje: 6.66, 
        recargo_minimo: 0.00 
    },
    {
        plataforma: "payway",
        cuotas: 12,
        recargo_porcentaje: 11.98, 
        recargo_minimo: 0.00 
    },

    // ==========================================
    // 2. GETNET (3 y 6 Cuotas)
    // ==========================================
    {
        plataforma: "getnet",
        cuotas: 3,
        recargo_porcentaje: 5.72, 
        recargo_minimo: 0.00 
    },
    {
        plataforma: "getnet",
        cuotas: 6,
        recargo_porcentaje: 9.85, 
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
        fecha: "06/05/2026",
        titulo: "Nuevas Cuotas Nave",
        descripcion: "Se habilitó la opción de 9 cuotas sin interés para Galicia Nave con un recargo del 10.40%."
    },
    {
        fecha: "02/05/2026",
        titulo: "Actualización de Tasas",
        descripcion: "Se actualizaron los coeficientes de Payway para el mes en curso. Por favor verificar los topes de reintegro."
    }
];