<template>
  <section id="voluntarios" class="py-20 bg-navidad-cream relative overflow-hidden">
    <!-- Decoración sutil de fondo -->
    <div class="absolute top-0 right-0 text-8xl opacity-5 pointer-events-none">🎄</div>
    <div class="absolute bottom-0 left-0 text-8xl opacity-5 pointer-events-none">⭐</div>

    <div class="max-w-4xl mx-auto px-4 relative z-10">
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-navidad-green mb-4">
          Únete como Voluntario
        </h2>
        <p class="text-xl text-gray-700 max-w-2xl mx-auto">
          Tu tiempo y energía son el mejor regalo. Completa el formulario y te contactaremos con todos los detalles.
        </p>
        <div class="w-24 h-1 bg-navidad-gold mx-auto mt-6"></div>
      </div>

      <!-- Recordatorio del evento -->
      <div class="bg-white/60 backdrop-blur-sm border border-navidad-green/20 rounded-xl p-4 mb-8 text-center" data-aos="fade-up">
        <p class="text-navidad-dark font-semibold flex items-center justify-center gap-2 flex-wrap">
          <span>📅</span> Sábado 19 de Diciembre, 17:30 hrs 
          <span class="hidden sm:inline">|</span> 
          <span>📍</span> Centro Cultural, Avenida Dueñas 134, Quillota
        </p>
      </div>

      <form @submit.prevent="enviarFormulario" class="bg-white p-8 md:p-10 rounded-2xl shadow-2xl" data-aos="fade-up">
        <div class="grid md:grid-cols-2 gap-6">
          
          <!-- Nombre -->
          <div>
            <label for="nombre" class="block text-navidad-green font-semibold mb-2">
              Nombre Completo <span class="text-navidad-red">*</span>
            </label>
            <input 
              id="nombre"
              v-model="formData.nombre"
              type="text" 
              required
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-navidad-green focus:ring-2 focus:ring-navidad-green/20 focus:outline-none transition bg-gray-50 focus:bg-white"
              placeholder="Ej: María Pérez"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-navidad-green font-semibold mb-2">
              Correo Electrónico <span class="text-navidad-red">*</span>
            </label>
            <input 
              id="email"
              v-model="formData.email"
              type="email" 
              required
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-navidad-green focus:ring-2 focus:ring-navidad-green/20 focus:outline-none transition bg-gray-50 focus:bg-white"
              placeholder="tu@email.com"
            />
          </div>

          <!-- Teléfono -->
          <div>
            <label for="telefono" class="block text-navidad-green font-semibold mb-2">
              Teléfono / WhatsApp <span class="text-navidad-red">*</span>
            </label>
            <input 
              id="telefono"
              v-model="formData.telefono"
              type="tel" 
              required
              pattern="[0-9+\s\-]+"
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-navidad-green focus:ring-2 focus:ring-navidad-green/20 focus:outline-none transition bg-gray-50 focus:bg-white"
              placeholder="+56 9 1234 5678"
            />
          </div>

          <!-- Edad -->
          <div>
            <label for="edad" class="block text-navidad-green font-semibold mb-2">
              Edad
            </label>
            <input 
              id="edad"
              v-model="formData.edad"
              type="number" 
              min="14"
              max="99"
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-navidad-green focus:ring-2 focus:ring-navidad-green/20 focus:outline-none transition bg-gray-50 focus:bg-white"
              placeholder="Ej: 25"
            />
          </div>

          <!-- Áreas de ayuda -->
          <div class="md:col-span-2">
            <label class="block text-navidad-green font-semibold mb-3">
              ¿En qué te gustaría ayudar? <span class="text-navidad-red">*</span>
            </label>
            <div class="grid sm:grid-cols-2 gap-3">
              <label class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-navidad-green hover:bg-green-50 transition group">
                <input type="checkbox" v-model="formData.areas" value="servir_cena" class="w-5 h-5 text-navidad-green rounded focus:ring-navidad-green cursor-pointer" />
                <span class="text-gray-700 group-hover:text-navidad-green font-medium">🍽️ Servir la cena</span>
              </label>
              <label class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-navidad-green hover:bg-green-50 transition group">
                <input type="checkbox" v-model="formData.areas" value="entregar_regalos" class="w-5 h-5 text-navidad-green rounded focus:ring-navidad-green cursor-pointer" />
                <span class="text-gray-700 group-hover:text-navidad-green font-medium">🎁 Entregar regalos</span>
              </label>
              <label class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-navidad-green hover:bg-green-50 transition group">
                <input type="checkbox" v-model="formData.areas" value="logistica" class="w-5 h-5 text-navidad-green rounded focus:ring-navidad-green cursor-pointer" />
                <span class="text-gray-700 group-hover:text-navidad-green font-medium">📦 Apoyo en logística</span>
              </label>
              <label class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-navidad-green hover:bg-green-50 transition group">
                <input type="checkbox" v-model="formData.areas" value="otro" class="w-5 h-5 text-navidad-green rounded focus:ring-navidad-green cursor-pointer" />
                <span class="text-gray-700 group-hover:text-navidad-green font-medium">💡 Otro (especificar en mensaje)</span>
              </label>
            </div>
          </div>

          <!-- Mensaje -->
          <div class="md:col-span-2">
            <label for="mensaje" class="block text-navidad-green font-semibold mb-2">
              Mensaje adicional
            </label>
            <textarea 
              id="mensaje"
              v-model="formData.mensaje"
              rows="4"
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-navidad-green focus:ring-2 focus:ring-navidad-green/20 focus:outline-none transition bg-gray-50 focus:bg-white resize-none"
              placeholder="¿Algo que quieras contarnos?"
            ></textarea>
          </div>
        </div>

        <!-- Botón de envío -->
        <div class="mt-8 text-center">
          <button 
            type="submit" 
            :disabled="enviando"
            class="w-full md:w-auto bg-navidad-red text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 mx-auto"
          >
            <span v-if="enviando" class="animate-spin">⏳</span>
            {{ enviando ? 'Enviando...' : 'Quiero ser Voluntario 🙋‍♀️' }}
          </button>
        </div>

        <!-- Mensaje de éxito -->
        <div v-if="mensajeExito" class="mt-6 bg-green-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-xl text-center flex items-center justify-center gap-3 animate-pulse" role="alert">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span class="font-semibold">¡Gracias por inscribirte! Te contactaremos pronto.</span>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  nombre: '',
  email: '',
  telefono: '',
  edad: '',
  areas: [],
  mensaje: ''
})

const enviando = ref(false)
const mensajeExito = ref(false)

const enviarFormulario = async () => {
  // Validación extra: asegurar que al menos un área esté seleccionada
  if (formData.value.areas.length === 0) {
    alert('Por favor, selecciona al menos un área en la que te gustaría ayudar.')
    return
  }

  enviando.value = true
  
  try {
    // ==========================================================
    // OPCIÓN A: Simulación (Para probar que el diseño funciona)
    // ==========================================================
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    /*
    // ==========================================================
    // OPCIÓN B: Envío REAL con Formspree (Recomendado para producción)
    // 1. Ve a https://formspree.io y crea una cuenta gratis.
    // 2. Crea un nuevo formulario y copia tu URL (ej: https://formspree.io/f/xnq.....)
    // 3. Descomenta el bloque de abajo y reemplaza 'TU_FORM_ID'
    // ==========================================================
    
    const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })
    
    if (!response.ok) {
      throw new Error('Error en el envío')
    }
    */

    mensajeExito.value = true
    
    // Limpiar formulario
    formData.value = {
      nombre: '',
      email: '',
      telefono: '',
      edad: '',
      areas: [],
      mensaje: ''
    }
    
    // Ocultar mensaje de éxito después de 6 segundos
    setTimeout(() => {
      mensajeExito.value = false
    }, 6000)
    
  } catch (error) {
    console.error('Error al enviar:', error)
    alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente o contáctanos por WhatsApp.')
  } finally {
    enviando.value = false
  }
}
</script>