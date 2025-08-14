// Efecto binario mejorado para el menú
document.addEventListener('DOMContentLoaded', function() {
    inicializarEfectoBinario();
});

function inicializarEfectoBinario() {
    const menuItems = document.querySelectorAll('.menu li');
    
    menuItems.forEach(item => {
        // Generar código binario aleatorio para cada elemento
        generarCodigoBinarioAleatorio(item);
        
        // Agregar efecto de sonido (opcional)
        item.addEventListener('mouseenter', function() {
            reproducirSonidoBinario();
        });
        
        // Efecto de distorsión al hacer click
        item.addEventListener('click', function() {
            efectoDistorsion(this);
        });
    });
}

function generarCodigoBinarioAleatorio(elemento) {
    const patronesBinarios = [
        '1010101010101010',
        '1100110011001100',
        '1001100110011001',
        '1111000011110000',
        '1011011010110110',
        '1100001111000011',
        '1001011001101001',
        '1111111100000000'
    ];
    
    // Seleccionar patrón aleatorio
    const patronAleatorio = patronesBinarios[Math.floor(Math.random() * patronesBinarios.length)];
    
    // Aplicar el patrón al elemento
    elemento.style.setProperty('--binary-pattern', `'${patronAleatorio}'`);
}

function reproducirSonidoBinario() {
    // Crear un beep simple usando Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
        // Si no se puede reproducir sonido, no hacer nada
        console.log('Audio no disponible');
    }
}

function efectoDistorsion(elemento) {
    // Agregar clase para efecto de distorsión
    elemento.classList.add('binary-distortion');
    
    // Remover la clase después de la animación
    setTimeout(() => {
        elemento.classList.remove('binary-distortion');
    }, 500);
}

// Función para generar código binario en tiempo real
function actualizarCodigoBinario() {
    const menuItems = document.querySelectorAll('.menu li');
    
    menuItems.forEach(item => {
        if (!item.matches(':hover')) {
            // Generar nuevo código binario aleatorio
            const nuevoCodigo = generarCodigoAleatorio();
            item.style.setProperty('--binary-pattern', `'${nuevoCodigo}'`);
        }
    });
}

function generarCodigoAleatorio() {
    let codigo = '';
    for (let i = 0; i < 16; i++) {
        codigo += Math.random() > 0.5 ? '1' : '0';
    }
    return codigo;
}

// Actualizar código binario cada 2 segundos
setInterval(actualizarCodigoBinario, 2000);

// Efecto de partículas binarias flotantes
function crearParticulasBinarias() {
    const header = document.querySelector('header');
    if (!header) return;
    
    // Crear contenedor de partículas
    let particulasContainer = document.getElementById('binary-particles');
    if (!particulasContainer) {
        particulasContainer = document.createElement('div');
        particulasContainer.id = 'binary-particles';
        particulasContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        `;
        header.style.position = 'relative';
        header.appendChild(particulasContainer);
    }
    
    // Crear partículas
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            crearParticula(particulasContainer);
        }, i * 100);
    }
}

function crearParticula(container) {
    const particula = document.createElement('div');
    particula.textContent = Math.random() > 0.5 ? '1' : '0';
    particula.style.cssText = `
        position: absolute;
        color: #00ffff;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        opacity: 0.7;
        pointer-events: none;
        animation: float-up 3s linear forwards;
    `;
    
    // Posición aleatoria
    particula.style.left = Math.random() * 100 + '%';
    particula.style.top = '100%';
    
    container.appendChild(particula);
    
    // Remover partícula después de la animación
    setTimeout(() => {
        if (particula.parentNode) {
            particula.parentNode.removeChild(particula);
        }
    }, 3000);
}

// Crear partículas cada 5 segundos
setInterval(crearParticulasBinarias, 5000);

// Agregar estilos CSS dinámicamente
const estilosBinarios = `
@keyframes float-up {
    0% {
        transform: translateY(0px);
        opacity: 0.7;
    }
    100% {
        transform: translateY(-100px);
        opacity: 0;
    }
}

.binary-distortion {
    animation: binary-distortion-effect 0.5s ease-in-out;
}

@keyframes binary-distortion-effect {
    0% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.1) rotate(1deg); }
    50% { transform: scale(0.9) rotate(-1deg); }
    75% { transform: scale(1.05) rotate(0.5deg); }
    100% { transform: scale(1) rotate(0deg); }
}

.menu li::before {
    content: var(--binary-pattern, '1010101010101010');
}
`;

// Insertar estilos en el head
const styleSheet = document.createElement('style');
styleSheet.textContent = estilosBinarios;
document.head.appendChild(styleSheet); 