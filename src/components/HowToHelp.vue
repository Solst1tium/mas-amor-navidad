<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Variables del contador
const dias = ref(0)
const horas = ref(0)
const minutos = ref(0)
const segundos = ref(0)

// 👇 Fecha del evento (Año-Mes-DíaT Hora:Minuto:Segundo)
const fechaEvento = new Date('2026-12-19T17:30:00').getTime()

let intervalo

const actualizarContador = () => {
  const ahora = new Date().getTime()
  const distancia = fechaEvento - ahora

  // Si la fecha ya pasó
  if (distancia < 0) {
    clearInterval(intervalo)
    dias.value = 0
    horas.value = 0
    minutos.value = 0
    segundos.value = 0
    return
  }

  // Cálculos matemáticos para días, horas, minutos y segundos
  dias.value = Math.floor(distancia / (1000 * 60 * 60 * 24))
  horas.value = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutos.value = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60))
  segundos.value = Math.floor((distancia % (1000 * 60)) / 1000)
}

onMounted(() => {
  actualizarContador()
  // Actualiza cada segundo
  intervalo = setInterval(actualizarContador, 1000)
})

onUnmounted(() => {
  // Limpia el intervalo cuando el componente se destruye para no consumir memoria
  clearInterval(intervalo)
})


</script>

<template>
  <section id="ayudar" class="py-20 bg-navidad-cream relative">
    <!-- Decoraciones -->
    <div class="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">⭐</div>
    <div class="absolute top-20 right-20 text-5xl opacity-20">🎄</div>
    <div class="absolute bottom-10 left-20 text-5xl opacity-20">❄️</div>

    <div class="max-w-6xl mx-auto px-4 relative z-10">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-5xl md:text-6xl font-display font-bold text-navidad-red mb-4">
          TRES MANERAS<br />DE COLABORAR
        </h2>
        <p class="text-xl font-subtitle text-navidad-green italic">
          Pequeños gestos, grandes cambios en esta Navidad
        </p>
        <div class="w-24 h-1 bg-navidad-gold mx-auto mt-6"></div>
      </div>

      <!-- 🎯 CONTADOR REGRESIVO AUTOMÁTICO -->
      <div
        class="bg-gradient-to-r from-navidad-red to-navidad-green rounded-2xl shadow-xl p-8 mb-16 max-w-3xl mx-auto text-white"
        data-aos="zoom-in">
        <div class="text-center mb-6">
          <h3 class="text-2xl font-display font-bold mb-2">
            🎄 ¡Falta poco para el evento!
          </h3>
          <p class="text-lg opacity-90 font-subtitle">Sábado 19 de Diciembre</p>
        </div>

        <div class="grid grid-cols-4 gap-2 md:gap-4 text-center">
          <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4">
            <div class="text-3xl md:text-4xl font-bold font-subtitle">{{ dias }}</div>
            <div class="text-xs md:text-sm uppercase mt-1 tracking-wider">Días</div>
          </div>
          <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4">
            <div class="text-3xl md:text-4xl font-bold font-subtitle">{{ horas }}</div>
            <div class="text-xs md:text-sm uppercase mt-1 tracking-wider">Horas</div>
          </div>
          <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4">
            <div class="text-3xl md:text-4xl font-bold font-subtitle">{{ minutos }}</div>
            <div class="text-xs md:text-sm uppercase mt-1 tracking-wider">Min</div>
          </div>
          <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-4">
            <div class="text-3xl md:text-4xl font-bold font-subtitle">{{ segundos }}</div>
            <div class="text-xs md:text-sm uppercase mt-1 tracking-wider">Seg</div>
          </div>
        </div>
      </div>
      <!-- FIN DEL CONTADOR -->



      <div class="grid md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="relative h-full" data-aos="fade-up" data-aos-delay="200">
          <div class="relative h-full">

            <!-- Círculo numérico (FUERA de la card, pero dentro del contenedor relativo) -->
            <div
              class="absolute -top-6 -left-6 w-16 h-16 bg-navidad-red rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg z-10 border-4 border-white">
              1
            </div>

            <!-- Card con overflow-hidden (ya no corta el círculo) -->
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden card-hover h-full flex flex-col">
              <div class="h-48 bg-gradient-to-br from-navidad-red to-red-800 flex items-center justify-center">
                <svg class="w-32 h-32 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div class="p-8 flex flex-col h-full">
                <h3 class="text-2xl font-display font-bold text-navidad-dark mb-2">
                  Caja de mercadería
                </h3>
                <div class="text-3xl font-bold text-navidad-red mb-4 font-subtitle">
                  1 Caja = 1 Familia
                </div>
                <p class="text-gray-600 mb-6 flex-grow">
                  Una caja completa con alimentos esenciales para que una familia
                  pueda celebrar la Navidad con dignidad.
                </p>
                <!-- ✅ BOTÓN ROJO -->
                <a href="https://wa.me/56912345678?text=Hola,%20quiero%20donar%20una%20caja%20de%20mercadería"
                  target="_blank"
                  class="w-full block text-center bg-navidad-red text-white py-3 rounded-full font-semibold hover:bg-red-800 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Quiero aportar
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="relative h-full" data-aos="fade-up" data-aos-delay="400">
          <div class="relative h-full">
            <div
              class="absolute -top-6 -left-6 w-16 h-16 bg-navidad-red rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg z-10 border-4 border-white">
              2
            </div>
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden card-hover  h-full flex flex-col">
              <div class="h-48 bg-gradient-to-br from-navidad-green to-green-800 flex items-center justify-center">
                <svg class="w-32 h-32 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h18v4H3V3zm0 6h18v12H3V9zm4 4h4v4H7v-4zm6 0h4v4h-4v-4z" />
                </svg>
              </div>

              <div class="p-8 flex flex-col h-full">
                <h3 class="text-2xl font-display font-bold text-navidad-dark mb-2">
                  Aporte para la cena navideña
                </h3>
                <div class="text-3xl font-bold text-navidad-gold mb-4 font-subtitle">
                  Aporte libre
                </div>
                <p class="text-gray-600 mb-6 flex-grow">
                  Ayúdanos a preparar una cena especial para quienes más lo necesitan. Cada aporte cuenta.
                </p>
                <!-- ✅ BOTÓN VERDE -->
                <a href="https://wa.me/56912345678?text=Hola,%20quiero%20aportar%20para%20la%20cena%20navideña"
                  target="_blank"
                  class="w-full block text-center bg-navidad-green text-white py-3 rounded-full font-semibold hover:bg-green-800 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Donar ahora
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="relative h-full" data-aos="fade-up" data-aos-delay="600">
          <div class="relative h-full">
            <div
              class="absolute -top-6 -left-6 w-16 h-16 bg-navidad-red rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg z-10 border-4 border-white">
              3
            </div>
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden card-hover h-full flex flex-col">
              <div class="h-48 bg-gradient-to-br from-navidad-gold to-yellow-600 flex items-center justify-center">
                <svg class="w-32 h-32 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div class="p-8 flex flex-col h-full">
                <h3 class="text-2xl font-display font-bold text-navidad-dark mb-2">
                  Voluntariado para servir en la cena
                </h3>
                <div class="text-3xl font-bold text-navidad-green mb-4 font-subtitle">
                  19 de Diciembre
                </div>
                <p class="text-gray-600 mb-6 flex-grow">
                  Únete como voluntario el día del evento. Tu tiempo y esfuerzo
                  pueden hacer la diferencia.
                </p>
                <!-- ✅ BOTÓN DORADO/AMARILLO -->
                <a href="#voluntarios"
                  class="w-full block text-center bg-navidad-gold text-white py-3 rounded-full font-semibold hover:bg-yellow-600 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Inscribirme
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>