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
    <div class="absolute inset-0 bg-black/30 z-0"></div>

   <!-- 🎄 NUEVO: Franja decorativa superior completa -->
    <div class="absolute top-0 left-0 right-0 z-20 pointer-events-none overflow-hidden h-20 md:h-40">
      <img 
        src="/images/esquina-navidad.webp" 
        alt="" 
        aria-hidden="true"
        class="w-full h-full object-cover object-top"
        style="mask-image: linear-gradient(to bottom, black 60%, transparent 100%);"
      />
    </div>
    
    <!-- Decoraciones navideñas (con aria-hidden para accesibilidad) -->
    <div class="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
      <div class="absolute top-10 left-10 text-6xl animate-bounce hidden md:block">❄️</div>
      <div class="absolute top-20 right-20 text-5xl animate-pulse hidden md:block">⭐</div>
      <div class="absolute bottom-20 left-20 text-6xl animate-bounce hidden md:block">🎄</div>
      <div class="absolute bottom-10 right-10 text-5xl animate-pulse hidden md:block">🎁</div>
    </div>

    <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto py-20 mt-20 md:mt-20" data-aos="fade-up">
      
      <!-- Emoji decorativo principal -->
      <div class="mb-6" data-aos="zoom-in" data-aos-delay="200">
        <span class="text-6xl inline-block"></span>
      </div>

      <!-- Título Principal -->
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 drop-shadow-lg leading-tight" data-aos="fade-down">
        Más Amor en<br />
        <span class="text-navidad-gold">Navidad</span>
      </h1>

      <!-- Subtítulo - Ubicación -->
      <p class="text-xl md:text-2xl mb-4 font-light text-gray-200" data-aos="fade-up" data-aos-delay="400">
        San Pedro, Quillota
      </p>

      <!-- Descripción -->
      <p class="text-lg md:text-xl font-subtitle text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md" data-aos="fade-up" data-aos-delay="600">
        Únete a nosotros para llevar esperanza, alegría y amor a familias
        que más lo necesitan en esta Navidad
      </p>

      <!-- 📍 Cápsulas de Fecha y Ubicación -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mx-auto mb-12" data-aos="zoom-in" data-aos-delay="800">
        <div class="flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 shadow-lg w-full md:w-auto justify-center">
          <span class="text-3xl" aria-hidden="true">📅</span>
          <div class="text-left">
            <p class="text-xs uppercase tracking-wider text-gray-200">Cuándo</p>
            <p class="font-bold font-subtitle text-base md:text-lg">Sábado 19 de Diciembre, <br> 17:30 hrs</p>
          </div>
        </div>
        
        <div class="flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 shadow-lg w-full md:w-auto justify-center">
          <span class="text-3xl" aria-hidden="true">📍</span>
          <div class="text-left">
            <p class="text-xs uppercase tracking-wider text-gray-200">Dónde</p>
            <p class="font-bold font-subtitle text-base md:text-lg">Centro Cultural, <br> Avenida Dueñas 134</p>
          </div>
        </div>
      </div>

      <!-- Botones de Acción -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="1000">
        <a @click.prevent="irASeccion('ayudar')"
          href="#ayudar" 
          class="bg-white text-navidad-red px-8 py-4 rounded-full font-bold text-lg hover:bg-navidad-cream transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
        >
          Quiero Ayudar 🙋🏽‍♀️
        </a>
        <a  @click.prevent="irASeccion('evento')"
          href="#voluntarios"
          class="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-navidad-red transition-all duration-300 transform hover:scale-105 shadow-xl text-center bg-transparent"
        >
          Conocer Más 
        </a>
      </div>

    </div>

    <!-- Onda de transición -->
    <div class="absolute bottom-0 left-0 right-0 z-20">
      <svg viewBox="0 0 1440 120" class="w-full" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#F5F0E8" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
      </svg>
    </div>
  </section>
</template>