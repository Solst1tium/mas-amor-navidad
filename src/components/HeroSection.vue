<script setup>
const irASeccion = (idSeccion) => {
  const seccion = document.getElementById(idSeccion)
  if (seccion) {
    seccion.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navidad-red via-red-700 to-navidad-green">
    
    <!-- Capa oscura para que el texto resalte -->
    <div class="absolute inset-0 bg-black/30 z-0 pointer-events-none" aria-hidden="true"></div>

    <!-- Franja decorativa superior -->
    <div class="absolute top-0 left-0 right-0 z-20 pointer-events-none overflow-hidden h-24 md:h-44">
      <img 
        src="/images/esquina-navidad.webp" 
        alt="" 
        aria-hidden="true"
        class="w-full h-full object-cover object-top"
        style="mask-image: linear-gradient(to bottom, black 50%, transparent 100%);"
      />
    </div>
    
<!-- Decoraciones navideñas de fondo (Estáticas, elegantes y sin ruido visual) -->
    <div class="absolute inset-x-0 top-36 bottom-24 pointer-events-none overflow-hidden hidden md:block z-10" aria-hidden="true">
      <div class="absolute top-10 left-20 text-5xl drop-shadow-lg opacity-40">❄️</div>
      <div class="absolute top-16 right-24 text-5xl drop-shadow-lg opacity-40">⭐</div>
      <div class="absolute bottom-12 left-24 text-6xl drop-shadow-lg opacity-40">🎄</div>
      <div class="absolute bottom-16 right-20 text-5xl drop-shadow-lg opacity-40">🎁</div>
    </div>

    <!-- Contenido principal del Hero -->
    <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-28 pb-32 md:pt-36" data-aos="fade-up">
      
      <!-- Título Principal -->
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 drop-shadow-lg leading-tight" data-aos="fade-down">
        Más Amor en<br />
        <span class="text-navidad-gold">Navidad</span>
      </h1>

      <!-- Subtítulo - Ubicación -->
      <p class="text-xl md:text-2xl mb-4 font-light text-gray-200" data-aos="fade-up" data-aos-delay="300">
        San Pedro, Quillota
      </p>

      <!-- Descripción -->
      <p class="text-lg md:text-xl font-subtitle text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md leading-relaxed" data-aos="fade-up" data-aos-delay="400">
        Únete a nosotros para llevar esperanza, alegría y amor a las familias que más lo necesitan en esta Navidad.
      </p>

      <!-- 📍 Cápsulas de Fecha y Ubicación (Glassmorphism mejorado) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mx-auto mb-12" data-aos="zoom-in" data-aos-delay="500">
        
        <!-- Fecha -->
        <div class="flex items-center justify-center gap-3 bg-white/25 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/40 shadow-xl">
          <span class="text-3xl" aria-hidden="true">📅</span>
          <div class="text-left">
            <p class="text-xs uppercase tracking-wider text-white font-semibold">Cuándo</p>
            <p class="font-bold font-subtitle text-sm md:text-base text-white">Sábado 19 de Diciembre, 17:30 hrs</p>
          </div>
        </div>
        
        <!-- Ubicación -->
        <div class="flex items-center justify-center gap-3 bg-white/25 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/40 shadow-xl">
          <span class="text-3xl" aria-hidden="true">📍</span>
          <div class="text-left">
            <p class="text-xs uppercase tracking-wider text-white font-semibold">Dónde</p>
            <p class="font-bold font-subtitle text-sm md:text-base text-white">Centro Cultural, Av. Dueñas 134</p>
          </div>
        </div>

      </div>

      <!-- Botones de Acción (CTAs con ancho simétrico y balanceados) -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="600">
        <a 
          @click.prevent="irASeccion('ayudar')"
          href="#ayudar" 
          class="w-full sm:w-60 bg-white text-navidad-red px-6 py-4 rounded-full font-bold text-lg hover:bg-navidad-cream transition-all duration-300 transform hover:scale-105 shadow-xl text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-700"
        >
          Quiero Ayudar 🙋🏽‍♀️
        </a>
        <a 
          @click.prevent="irASeccion('evento')"
          href="#evento"
          class="w-full sm:w-60 border-2 border-white text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-navidad-red transition-all duration-300 transform hover:scale-105 shadow-xl text-center bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-700"
        >
          Conocer Más
        </a>
      </div>

    </div>

    <!-- Onda de transición inferior -->
    <div class="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
      <svg viewBox="0 0 1440 120" class="w-full block" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#F5F0E8" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
      </svg>
    </div>
  </section>
</template>