<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navidad-red via-red-700 to-navidad-green">
    <!-- Decoraciones navideñas -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 text-6xl animate-bounce">❄️</div>
      <div class="absolute top-20 right-20 text-5xl animate-pulse">⭐</div>
      <div class="absolute bottom-20 left-20 text-6xl animate-bounce">🎄</div>
      <div class="absolute bottom-10 right-10 text-5xl animate-pulse">🎁</div>
    </div>

    <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto" data-aos="fade-up">
      <div class="mb-6" data-aos="zoom-in" data-aos-delay="200">
        <span class="text-6xl">🎄</span>
      </div>
      
      <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-aos="fade-up" data-aos-delay="400">
        Más Amor en<br/>
        <span class="text-navidad-gold">Navidad</span>
      </h1>
      
      <p class="text-xl md:text-2xl mb-4 font-light" data-aos="fade-up" data-aos-delay="600">
        San Pedro, Quillota
      </p>
      
      <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="800">
        Únete a nosotros para llevar esperanza, alegría y amor a familias 
        que más lo necesitan en esta Navidad
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="1000">
        <a href="#ayudar" class="btn-primary bg-white text-navidad-red hover:bg-navidad-cream">
          Quiero Ayudar
        </a>
        <a href="#evento" class="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-navidad-red">
          Conocer Más
        </a>
      </div>
      
      <div class="mt-12 text-sm opacity-80" data-aos="fade-up" data-aos-delay="1200">
        <p>📅 19 de Diciembre 2026</p>
      </div>
    </div>

    <!-- Ondas decorativas -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" class="w-full">
        <path fill="#F5F0E8" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
      </svg>
    </div>
  </section>
</template>