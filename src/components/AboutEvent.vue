<template>
  <section id="evento" class="py-20 bg-navidad-cream relative overflow-hidden">
    <div class="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 100 100" class="text-navidad-green">
        <path fill="currentColor" d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 50 L30 65 L35 45 L20 30 L40 30 Z" />
      </svg>
    </div>
    <div class="absolute bottom-0 right-0 w-24 h-24 opacity-20 pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 100 100" class="text-navidad-gold">
        <path fill="currentColor" d="M50 5 L61 35 L95 35 L68 57 L79 91 L50 70 L21 91 L32 57 L5 35 L39 35 Z" />
      </svg>
    </div>

    <div class="max-w-6xl mx-auto px-4 relative z-10">
      <!-- Encabezado de la sección estandarizado -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="inline-block mb-4" aria-hidden="true">
          <span class="text-6xl">🎄</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-display font-bold text-navidad-red mb-4">
          Sobre el Evento
        </h2>
        <p class="text-xl font-subtitle text-navidad-green italic">
          Pequeños gestos, grandes cambios en esta Navidad
        </p>
        <div class="w-24 h-1 bg-navidad-gold mx-auto mt-6" aria-hidden="true"></div>
      </div>

      <!-- Contenido en dos columnas -->
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Columna de texto descriptivo -->
        <div data-aos="fade-right">
          <h3 class="text-3xl font-display font-bold text-navidad-red mb-6">
            Tu amor puede cambiar<br />la Navidad de una familia
          </h3>
          <p class="text-lg text-gray-700 mb-6 leading-relaxed">
            En esta Navidad, la Iglesia Adventista del Séptimo Día Quillota
            se une para brindar un momento especial de celebración y amor a familias
            de nuestra comunidad.
          </p>
          <p class="text-lg text-gray-700 mb-6 leading-relaxed">
            Nuestro objetivo es compartir una cena navideña, entregar regalos a los niños
            y cajas de mercadería a las familias, recordándoles que no están solos.
          </p>
          <div class="flex items-center gap-4 text-navidad-green font-semibold">
            <span class="text-3xl" aria-hidden="true">❤️</span>
            <span class="font-subtitle">"Porque de tal manera amó Dios al mundo..."</span>
          </div>
        </div>

        <!-- Columna de tarjetas (Grid responsivo corregido: 1 col en mobile, 2 cols en sm+) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5" data-aos="fade-left">

          <!-- Card 1: Cena Navideña (Ícono de plato/comida más representativo) -->
          <div
            class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-navidad-red flex flex-col items-center text-center">
            <div class="mb-4 text-navidad-red">
              <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
              </svg>
            </div>
            <h4 class="font-display font-bold text-navidad-green mb-2">Cena Navideña</h4>
            <p class="text-sm text-gray-600">A las familias que más lo necesitan</p>
          </div>

          <!-- Card 2: Regalos -->
          <div
            class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-navidad-gold flex flex-col items-center text-center">
            <div class="mb-4 text-navidad-gold">
              <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h4 class="font-display font-bold text-navidad-green mb-2">Regalos</h4>
            <p class="text-sm text-gray-600">Para los niños</p>
          </div>

          <!-- Card 3: Mercadería -->
          <div
            class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-navidad-green flex flex-col items-center text-center">
            <div class="mb-4 text-navidad-green">
              <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h4 class="font-display font-bold text-navidad-green mb-2">Mercadería</h4>
            <p class="text-sm text-gray-600">Caja navideña para familias de San Pedro</p>
          </div>

          <!-- Card 4: Comunidad -->
          <div
            class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-navidad-red flex flex-col items-center text-center">
            <div class="mb-4 text-navidad-red">
              <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 class="font-display font-bold text-navidad-green mb-2">Comunidad</h4>
            <p class="text-sm text-gray-600">Unidos por el amor</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>