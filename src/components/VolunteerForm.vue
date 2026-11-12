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
const errorMensaje = ref('')

const enviarFormulario = async () => {
  // Limpiar mensajes previos cada vez que intentan enviar
  errorMensaje.value = ''
  mensajeExito.value = false

  // 1. Validación: asegurar que al menos un área esté seleccionada
  if (formData.value.areas.length === 0) {
    errorMensaje.value = 'Por favor, selecciona al menos un área en la que te gustaría ayudar.'
    ocultarErrorDespuesDe(5000)
    return
  }

 // 2. Validación de "Otro" (Sin alert)
  if (formData.value.areas.includes('otro') && !formData.value.mensaje.trim()) {
    errorMensaje.value = 'Seleccionaste "Otro". Por favor, especifica en el mensaje cómo te gustaría ayudar.'
    ocultarErrorDespuesDe(5000)
    return
  }

  enviando.value = true

  try {
    // URL DE FORMSPREE
    const FORMSPREE_URL = 'https://formspree.io/f/xgakelzk'

    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        // 🎯 TRUCOS PARA QUE EL CORREO SE VEA PROFESIONAL:
        _subject: `🎄 Nuevo Voluntario: ${formData.value.nombre}`, // Asunto del correo personalizado
        _replyto: formData.value.email, // Te permite responderle directo desde tu Gmail/Outlook

        'Nombre': formData.value.nombre,
        'Email': formData.value.email,
        'Teléfono': formData.value.telefono,
        'Edad': formData.value.edad ? `${formData.value.edad} años` : 'No especificada', // Se lee mejor

        // Convierte los códigos en texto legible con emojis
        'Áreas de ayuda': formData.value.areas.map(area => {
          const etiquetas = {
            'servir_cena': '🍽️ Servir la cena',
            'entregar_regalos': '🎁 Entregar regalos',
            'logistica': '📦 Apoyo en logística',
            'otro': '💡 Otro (ver mensaje)'
          }
          return etiquetas[area] || area
        }).join(', '),

        'Mensaje': formData.value.mensaje || 'Sin mensaje adicional' // Evita que llegue el campo vacío
      })
    })

    if (response.ok) {
      // Éxito
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
       setTimeout(() => { mensajeExito.value = false }, 6000)
    } else {
      // Errores de Formspree
      const data = await response.json()
      errorMensaje.value = data.errors ? data.errors.map(e => e.message).join(', ') : 'Hubo un error al enviar. Intenta nuevamente.'
      ocultarErrorDespuesDe(5000)
    }

  } catch (error) {
    console.error('Error al enviar:', error)
    errorMensaje.value = 'Error de conexión. Por favor revisa tu internet e intenta de nuevo.'
    ocultarErrorDespuesDe(5000)
  } finally {
    enviando.value = false
  }
}

// Función auxiliar para que el error desaparezca solo
const ocultarErrorDespuesDe = (tiempo) => {
  setTimeout(() => {
    errorMensaje.value = ''
  }, tiempo)
}



</script>

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
      <div class="bg-white/60 backdrop-blur-sm border border-navidad-green/20 rounded-xl p-4 mb-8 text-center"
        data-aos="fade-up">
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
            <input id="nombre" v-model="formData.nombre" type="text" required
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-navidad-green focus:ring-2 focus:ring-navidad-green/20 focus:outline-none transition bg-gray-50 focus:bg-white"
              placeholder="Ej: María Pérez" />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-navidad-green font-semibold mb-2">
              Correo Electrónico <span class="text-navidad-red">*</span>
            </label>
            <input id="email" v-model="formData.email" type="email" required
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-navidad-green focus:ring-2 focus:ring-navidad-green/20 focus:outline-none transition bg-gray-50 focus:bg-white"
              placeholder="tu@email.com" />
          </div>

          <!-- Teléfono -->
          <div>
            <label for="telefono" class="block text-navidad-green font-semibold mb-2">
              Teléfono / WhatsApp <span class="text-navidad-red">*</span>
            </label>
            <input id="telefono" v-model="formData.telefono" type="tel" required pattern="[0-9+\s\-]+"
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-navidad-green focus:ring-2 focus:ring-navidad-green/20 focus:outline-none transition bg-gray-50 focus:bg-white"
              placeholder="+56 9 1234 5678" />
          </div>

          <!-- Edad -->
          <div>
            <label for="edad" class="block text-navidad-green font-semibold mb-2">
              Edad
            </label>
            <input id="edad" v-model="formData.edad" type="number" min="14" max="99"
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-navidad-green focus:ring-2 focus:ring-navidad-green/20 focus:outline-none transition bg-gray-50 focus:bg-white"
              placeholder="Ej: 25" />
          </div>

          <!-- Áreas de ayuda -->
          <div class="md:col-span-2">
            <label class="block text-navidad-green font-semibold mb-3">
              ¿En qué te gustaría ayudar? <span class="text-navidad-red">*</span>
            </label>
            <div class="grid sm:grid-cols-2 gap-3">
              <label
                class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-navidad-green hover:bg-green-50 transition group">
                <input type="checkbox" v-model="formData.areas" value="servir_cena"
                  class="w-5 h-5 text-navidad-green rounded focus:ring-navidad-green cursor-pointer" />
                <span class="text-gray-700 group-hover:text-navidad-green font-medium">🍽️ Servir la cena</span>
              </label>
              <label
                class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-navidad-green hover:bg-green-50 transition group">
                <input type="checkbox" v-model="formData.areas" value="entregar_regalos"
                  class="w-5 h-5 text-navidad-green rounded focus:ring-navidad-green cursor-pointer" />
                <span class="text-gray-700 group-hover:text-navidad-green font-medium">🎁 Entregar regalos</span>
              </label>
              <label
                class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-navidad-green hover:bg-green-50 transition group">
                <input type="checkbox" v-model="formData.areas" value="logistica"
                  class="w-5 h-5 text-navidad-green rounded focus:ring-navidad-green cursor-pointer" />
                <span class="text-gray-700 group-hover:text-navidad-green font-medium">📦 Apoyo en logística</span>
              </label>
              <label
                class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-navidad-green hover:bg-green-50 transition group">
                <input type="checkbox" v-model="formData.areas" value="otro"
                  class="w-5 h-5 text-navidad-green rounded focus:ring-navidad-green cursor-pointer" />
                <span class="text-gray-700 group-hover:text-navidad-green font-medium">💡 Otro (especificar en
                  mensaje)</span>
              </label>
            </div>
          </div>

          <!-- Mensaje -->
          <div class="md:col-span-2">
            <label for="mensaje" class="block text-navidad-green font-semibold mb-2">
              Mensaje adicional
              <span v-if="formData.areas.includes('otro')"
                class="text-navidad-red text-sm font-normal">(Obligatorio)</span>
            </label>

            <textarea id="mensaje" v-model="formData.mensaje" rows="4"
              :class="formData.areas.includes('otro') && !formData.mensaje.trim() ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-navidad-green focus:ring-navidad-green/20'"
              class="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:outline-none transition bg-gray-50 focus:bg-white resize-none"
              placeholder="Ej: Tengo auto para transporte o especifica aquí si elegiste 'Otro'..."></textarea>
            <p v-if="formData.areas.includes('otro')" class="text-xs text-navidad-red mt-1 flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Debes especificar cómo quieres ayudar en este campo.
            </p>
          </div>
        </div>


        <!-- MENSAJE DE ERROR (Aparece solo si hay error) -->
        <div 
          v-if="errorMensaje" 
          class="mb-6 bg-red-50 border-2 border-red-200 text-red-800 px-6 py-4 rounded-xl text-center flex items-center justify-center gap-3 animate-pulse" 
          role="alert"
        >
          <svg class="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="font-semibold">{{ errorMensaje }}</span>
        </div>

           <!-- Botón de envío -->
        <div class="text-center">
          <button 
            type="submit" 
            :disabled="enviando"
            class="w-full md:w-auto bg-navidad-red text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 mx-auto"
          >
            <span v-if="enviando" class="animate-spin">⏳</span>
            {{ enviando ? 'Enviando...' : 'Quiero ser Voluntario 🙋‍♀️' }}
          </button>
        </div>

        <!-- MENSAJE DE ÉXITO -->
        <div 
          v-if="mensajeExito" 
          class="mt-6 bg-green-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-xl text-center flex items-center justify-center gap-3" 
          role="alert"
        >
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="font-semibold">¡Gracias por inscribirte! Te contactaremos pronto.</span>
        </div>
      </form>
    </div>
  </section>
</template>
