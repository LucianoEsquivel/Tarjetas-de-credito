// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. REGISTRO DEL SERVICE WORKER (PWA)
    // ==========================================
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(registration => {
                    console.log('PWA: Service Worker registrado con éxito:', registration.scope);
                })
                .catch(error => {
                    console.log('PWA: Falló el registro del Service Worker:', error);
                });
        });
    }

    // ==========================================
    // 2. REFERENCIAS A LA INTERFAZ (DOM)
    // ==========================================
    
    // Pantallas principales
    const screenPromo = document.querySelector('.promo-selection');
    const screenCalc = document.getElementById('calculator-screen');
    const calcTitle = document.getElementById('calc-title');
    const btnBack = document.getElementById('btn-back');

    // Botones de Promos (Pantalla 1)
    const btnPayway = document.getElementById('btn-payway');
    const btnGetnet = document.getElementById('btn-getnet');
    const btnNave = document.getElementById('btn-nave');

    // Controles Calculadora (Pantalla 2)
    const inputMonto = document.getElementById('monto-input');
    const cuotasContainer = document.getElementById('cuotas-container');
    const tasaGroup = document.getElementById('tasa-group');
    const tasaSlider = document.getElementById('tasa-slider');
    const tasaDisplay = document.getElementById('tasa-display');
    const tasaOriginalDisplay = document.getElementById('tasa-original-display');
    const resultCard = document.getElementById('result-card');

    // Resultados en Pantalla 2
    const resCuota = document.getElementById('res-cuota');
    const resTotalCliente = document.getElementById('res-total-cliente');
    const resCostoAbsorbido = document.getElementById('res-costo-absorbido');
    const costoAbsorbidoContainer = document.getElementById('costo-absorbido-container');

    // ==========================================
    // 3. VARIABLES DE ESTADO
    // ==========================================
    let currentPromos = []; 
    let selectedPromo = null; 
    let montoAFiltrar = 0;
    let currentPorcentaje = 0;

    // ==========================================
    // 4. NAVEGACIÓN
    // ==========================================

    function abrirCalculadora(plataformaNombre, tituloAMostrar) {
        // 1. Filtrar datos (asegurate que base.js defina baseDatosPromos globalmente)
        if (typeof baseDatosPromos !== 'undefined') {
            currentPromos = baseDatosPromos.filter(p => p.plataforma === plataformaNombre);
        } else {
            console.error("Error: baseDatosPromos no está definido. Revisa base.js");
            return;
        }
        
        // 2. Cambiar Título y Pantalla
        calcTitle.textContent = `Simulador ${tituloAMostrar}`;
        screenPromo.style.display = 'none';
        screenCalc.style.display = 'block';
        
        // 3. Reset de la calculadora
        inputMonto.value = '';
        montoAFiltrar = 0;
        selectedPromo = null;
        resultCard.style.display = 'none';
        tasaGroup.style.display = 'none';

        // 4. Armar botones
        generarBotonesCuotas();
    }

    btnPayway.addEventListener('click', () => abrirCalculadora('payway', 'Payway'));
    btnGetnet.addEventListener('click', () => abrirCalculadora('getnet', 'Getnet'));
    btnNave.addEventListener('click', () => abrirCalculadora('nave', 'Galicia Nave'));

    btnBack.addEventListener('click', () => {
        screenCalc.style.display = 'none';
        screenPromo.style.display = 'block'; 
    });

    // ==========================================
    // 5. LÓGICA DE LA CALCULADORA
    // ==========================================

    function generarBotonesCuotas() {
        cuotasContainer.innerHTML = ''; 
        
        currentPromos.forEach(promo => {
            const btn = document.createElement('button');
            btn.className = 'btn-cuota';
            btn.textContent = `${promo.cuotas} Cuotas`;
            
            btn.addEventListener('click', () => {
                document.querySelectorAll('.btn-cuota').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                selectedPromo = promo;
                configurarSliderTasa(promo);
                calcularCuota();
            });
            cuotasContainer.appendChild(btn);
        });
    }

    function configurarSliderTasa(promo) {
        tasaGroup.style.display = 'block';
        currentPorcentaje = promo.recargo_porcentaje;
        
        tasaSlider.max = promo.recargo_porcentaje;
        tasaSlider.min = promo.recargo_minimo; 
        tasaSlider.step = 0.01;
        tasaSlider.value = promo.recargo_porcentaje;
        
        tasaOriginalDisplay.textContent = `Lista: ${promo.recargo_porcentaje.toFixed(2)}%`;
        actualizarDisplayTasa();
    }

    function actualizarDisplayTasa() {
        tasaDisplay.textContent = `${currentPorcentaje.toFixed(2)}%`;
    }

    // Input con formato moneda mejorado
    inputMonto.addEventListener('input', (e) => {
        let valorLimpio = e.target.value.replace(/\D/g, '');

        if (valorLimpio === '') {
            e.target.value = '';
            montoAFiltrar = 0;
        } else {
            montoAFiltrar = parseInt(valorLimpio, 10);
            e.target.value = '$ ' + montoAFiltrar.toLocaleString('es-AR');
        }
        calcularCuota();
    });

    tasaSlider.addEventListener('input', (e) => {
        currentPorcentaje = parseFloat(e.target.value);
        actualizarDisplayTasa();
        calcularCuota();
    });

    // ==========================================
    // 6. MATEMÁTICA FINANCIERA
    // ==========================================
    function calcularCuota() {
        if (!selectedPromo || montoAFiltrar <= 0) {
            resultCard.style.display = 'none';
            return;
        }

        const coeficienteBase = 1 + (selectedPromo.recargo_porcentaje / 100);
        const coeficienteAplicado = 1 + (currentPorcentaje / 100);

        const totalCliente = montoAFiltrar * coeficienteAplicado;
        const valorCuotaMensual = totalCliente / selectedPromo.cuotas;

        const totalMatriz = montoAFiltrar * coeficienteBase;
        const costoAbsorbido = totalMatriz - totalCliente;

        resCuota.textContent = formatearMoneda(valorCuotaMensual);
        resTotalCliente.textContent = formatearMoneda(totalCliente);
        
        if (costoAbsorbido > 0.01) { 
            costoAbsorbidoContainer.style.display = 'block';
            resCostoAbsorbido.textContent = formatearMoneda(costoAbsorbido);
        } else {
            costoAbsorbidoContainer.style.display = 'none';
        }

        resultCard.style.display = 'block';
    }

    function formatearMoneda(numero) {
        return numero.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
    }


    
    // ==========================================
    // 7. LÓGICA DEL MODAL DE NOVEDADES
    // ==========================================
    const btnNovedades = document.getElementById('btn-novedades');
    const modalNovedades = document.getElementById('novedades-modal');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const novedadesContainer = document.getElementById('novedades-container');

    // Función para dibujar las novedades desde base.js
    function renderizarNovedades() {
        novedadesContainer.innerHTML = ''; // Limpiamos contenedor
        
        if (typeof baseDatosNovedades !== 'undefined' && baseDatosNovedades.length > 0) {
            baseDatosNovedades.forEach(novedad => {
                const item = document.createElement('div');
                item.className = 'novedad-item';
                item.innerHTML = `
                    <div class="novedad-fecha">${novedad.fecha}</div>
                    <div class="novedad-titulo">${novedad.titulo}</div>
                    <div class="novedad-texto">${novedad.descripcion}</div>
                `;
                novedadesContainer.appendChild(item);
            });
        } else {
            novedadesContainer.innerHTML = '<p style="text-align:center; color:#666;">No hay novedades por el momento.</p>';
        }
    }

    // Abrir modal
    btnNovedades.addEventListener('click', () => {
        renderizarNovedades(); // Las generamos en el momento por si hubo cambios
        modalNovedades.style.display = 'flex';
    });

    // Cerrar modal con la X
    btnCloseModal.addEventListener('click', () => {
        modalNovedades.style.display = 'none';
    });

    // Cerrar modal al hacer clic afuera de la caja blanca
    modalNovedades.addEventListener('click', (e) => {
        if (e.target === modalNovedades) {
            modalNovedades.style.display = 'none';
        }
    });
});