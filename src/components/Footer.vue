<template>
  <footer class="bg-navidad-green text-white pt-16 pb-8 relative overflow-hidden">
    <!-- Línea decorativa superior -->
    <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navidad-red via-navidad-gold to-navidad-red">
    </div>

    <div class="max-w-6xl mx-auto px-4 relative z-10">
      <div class="grid md:grid-cols-3 gap-12 mb-12">

        <!-- Columna 1: Sobre el proyecto -->
        <div>
          <h3 class="text-2xl font-display font-bold mb-4 text-navidad-gold">🎄 Más Amor en Navidad</h3>
          <p class="text-gray-300 leading-relaxed mb-6">
            Un proyecto solidario de la Iglesia Adventista del Séptimo Día de San Pedro, Quillota. Juntos llevamos
            esperanza y alegría a quienes más lo necesitan.
          </p>
          <div class="flex gap-4">
            <a href="#"
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-navidad-gold transition">📘</a>
            <a href="#"
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-navidad-gold transition">📷</a>
          </div>
        </div>

        <!-- Columna 2: Ubicación y Hora -->
        <div>
          <h4 class="text-xl font-display font-bold mb-6 text-white flex items-center gap-2">
            📍 ¿Dónde y Cuándo?
          </h4>

          <div class="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10 mb-4">
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <span class="text-2xl">📅</span>
                <div>
                  <p class="font-bold text-white">Sábado 19 de Diciembre</p>
                  <p class="text-sm text-gray-300">17:30 hrs</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-2xl">⛪</span>
                <div>
                  <p class="font-bold text-white">Centro Cultural </p>
                  <p class="text-sm text-gray-300">Avenida Dueñas 134, San Pedro</p>
                  <p class="text-sm text-gray-300">Quillota.</p>
                </div>
              </div>
            </div>
          </div>

          <a href="https://www.google.com/maps/search/?api=1&query=Centro+Cultural+Avenida+Dueñas+134+Quillota"
            target="_blank" rel="noopener noreferrer"
            class="w-full inline-flex items-center justify-center gap-2 bg-navidad-gold text-white px-4 py-3 rounded-full font-semibold hover:bg-yellow-600 transition shadow-lg transform hover:-translate-y-1">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Ver en Google Maps
          </a>
        </div>

        <!-- Columna 3: Enlaces Rápidos -->
        <div>
          <h4 class="text-xl font-display font-bold mb-6 text-white">Enlaces Rápidos</h4>
          <ul class="space-y-3 text-gray-300">
            <li><a href="#evento" class="hover:text-navidad-gold transition flex items-center gap-2"><span
                  class="text-navidad-gold">›</span> Sobre el Evento</a></li>
            <li><a href="#ayudar" class="hover:text-navidad-gold transition flex items-center gap-2"><span
                  class="text-navidad-gold">›</span> Cómo Ayudar</a></li>
            <li><a href="#voluntarios" class="hover:text-navidad-gold transition flex items-center gap-2"><span
                  class="text-navidad-gold">›</span> Ser Voluntario</a></li>
          </ul>
        </div>
      </div>

      <!-- Copyright con crédito -->
      <div class="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
        <p class="mb-2">&copy; 2026 Más Amor en Navidad. Hecho con ❤️ para la comunidad de Quillota.</p>
        <p class="text-xs text-gray-500">
          Desarrollado por
          <a href="https://solst1tium.github.io/portafolio-sol/" target="_blank"
            class="text-navidad-gold hover:text-white transition font-semibold">
            Solst1tium
          </a>
          ·
          <a href="https://github.com/Solst1tium/mas-amor-navidad" target="_blank"
            class="text-navidad-gold hover:text-white transition">
            Ver código en GitHub
          </a>
        </p>
      </div>
    </div>




  </footer>
</template>