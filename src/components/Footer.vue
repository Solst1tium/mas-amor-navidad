<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mostrarBoton = ref(false)

// Detecta el scroll para mostrar el botón solo después de bajar 300px
const manejarScroll = () => {
  mostrarBoton.value = window.scrollY > 300
}
// Función para hacer scroll suave hacia la parte superior de la página
const volverAlInicio = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', manejarScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', manejarScroll)
})
</script>

<template>
  <footer class="bg-navidad-green text-white pt-16 pb-8 relative z-30 overflow-hidden">
    <!-- Línea decorativa superior -->
    <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navidad-red via-navidad-gold to-navidad-red">
    </div>

    <!-- Capa de copos de nieve internos -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div class="absolute top-10 left-10 text-2xl opacity-30 animate-pulse">❄️</div>
      <div class="absolute top-20 right-20 text-xl opacity-20 animate-bounce" style="animation-duration: 3s;">❄️</div>
      <div class="absolute bottom-32 left-1/4 text-3xl opacity-25 animate-pulse" style="animation-duration: 4s;">❄️
      </div>
      <div class="absolute top-40 right-1/3 text-2xl opacity-20 animate-bounce" style="animation-duration: 5s;">❄️</div>
      <div class="absolute bottom-20 right-10 text-xl opacity-30 animate-pulse">❄️</div>
      <div class="absolute top-1/2 left-20 text-2xl opacity-15 animate-bounce" style="animation-duration: 6s;">❄️</div>
    </div>


    <div class="max-w-6xl mx-auto px-4 relative z-20">
      <!-- Grid de 2 columnas -->
      <div class="grid md:grid-cols-2 gap-12 mb-12">

        <!-- Columna 1: Sobre el proyecto -->
        <div class="relative z-20">
          <h3 class="text-2xl font-display font-bold mb-4 text-navidad-gold">🎄 Más Amor en Navidad</h3>
          <p class="text-gray-200 leading-relaxed mb-6">
            Un proyecto solidario de la Iglesia Adventista del Séptimo Día, Quillota. Juntos llevamos
            esperanza y alegría a quienes más lo necesitan.
          </p>

          <!-- Redes Sociales con SVGs limpios y accesibilidad -->
          <div class="flex gap-4">
            <a href="#" aria-label="Visitar página de Facebook"
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-navidad-gold hover:text-emerald-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navidad-gold">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="Visitar perfil de Instagram"
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-navidad-gold hover:text-emerald-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navidad-gold">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Columna 2: Ubicación y Hora -->
        <div class="relative z-20">
          <h4 class="text-xl font-display font-bold mb-6 text-white flex items-center gap-2">
            📍 ¿Dónde y Cuándo?
          </h4>

          <!-- Tarjeta de información con efecto cristal -->
          <div class="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10 mb-6">
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <span class="text-2xl" aria-hidden="true">📅</span>
                <div>
                  <p class="font-bold text-white">Sábado 19 de Diciembre</p>
                  <p class="text-sm text-gray-200">17:30 hrs</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-2xl" aria-hidden="true">⛪</span>
                <div>
                  <p class="font-bold text-white">Centro Cultural</p>
                  <p class="text-sm text-gray-200">Avenida Dueñas 134, San Pedro, Quillota</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Botón de Google Maps -->

          <a href="https://www.google.com/maps/search/?api=1&query=Centro+Cultural+Avenida+Dueñas+134+Quillota"
           target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 bg-navidad-gold text-emerald-950 font-bold hover:brightness-110 px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navidad-green">
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Ver en Google Maps
          </a>
        </div>
      </div>

      <!-- Copyright con contraste WCAG corregido -->
      <div class="border-t border-white/15 pt-8 text-center text-gray-200 text-sm">
        <p class="mb-2">&copy; 2026 Más Amor en Navidad. Hecho con ❤️ para la comunidad de Quillota.</p>
        <p class="text-xs text-gray-300/90">
          Desarrollado por
          <a href="https://solst1tium.github.io/portafolio-sol/" target="_blank" rel="noopener noreferrer"
            class="text-navidad-gold hover:text-white transition font-semibold underline decoration-dotted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-navidad-gold rounded">
            Solst1tium
          </a>
          ·
          <a href="https://github.com/Solst1tium/mas-amor-navidad" target="_blank" rel="noopener noreferrer"
            class="text-navidad-gold hover:text-white transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-navidad-gold rounded">
            Ver código en GitHub
          </a>
        </p>
      </div>
    </div>

  <!-- Acción Secundaria: Botón Flotante (Cristal oscuro discreto) -->

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <button
        v-show="mostrarBoton"
        @click="volverAlInicio"
        aria-label="Volver al inicio de la página"
        title="Volver al inicio"
        class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/25 text-white hover:border-navidad-gold hover:text-navidad-gold flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navidad-gold focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
      >
        <svg class="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" fill="none"
          stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </Transition>


  </footer>
</template>
