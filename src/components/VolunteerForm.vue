<template>
  <section id="voluntarios" class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-navidad-green mb-4">
          Únete como Voluntario
        </h2>
        <p class="text-xl text-gray-700">
          Completa el formulario y te contactaremos con todos los detalles
        </p>
        <div class="w-24 h-1 bg-navidad-gold mx-auto mt-4"></div>
      </div>

      <form @submit.prevent="enviarFormulario" class="bg-navidad-cream p-8 rounded-2xl shadow-xl" data-aos="fade-up">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-navidad-green font-semibold mb-2">
              Nombre Completo *
            </label>
            <input 
              v-model="formData.nombre"
              type="text" 
              required
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-navidad-green focus:outline-none transition"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label class="block text-navidad-green font-semibold mb-2">
              Email *
            </label>
            <input 
              v-model="formData.email"
              type="email" 
              required
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-navidad-green focus:outline-none transition"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label class="block text-navidad-green font-semibold mb-2">
              Teléfono *
            </label>
            <input 
              v-model="formData.telefono"
              type="tel" 
              required
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-navidad-green focus:outline-none transition"
              placeholder="+56 9 1234 5678"
            />
          </div>

          <div>
            <label class="block text-navidad-green font-semibold mb-2">
              Edad
            </label>
            <input 
              v-model="formData.edad"
              type="number" 
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-navidad-green focus:outline-none transition"
              placeholder="Tu edad"
            />
          </div>

          <div class="md:col-span-2">
            <label class="block text-navidad-green font-semibold mb-2">
              ¿En qué te gustaría ayudar? *
            </label>
            <div class="space-y-2">
              <label class="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="formData.areas" 
                  value="servir_cena"
                  class="w-5 h-5 text-navidad-green rounded focus:ring-navidad-green"
                />
                <span>Servir la cena</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="formData.areas" 
                  value="entregar_regalos"
                  class="w-5 h-5 text-navidad-green rounded focus:ring-navidad-green"
                />
                <span>Entregar regalos a niños</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="formData.areas" 
                  value="logistica"
                  class="w-5 h-5 text-navidad-green rounded focus:ring-navidad-green"
                />
                <span>Apoyo en logística</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="formData.areas" 
                  value="otro"
                  class="w-5 h-5 text-navidad-green rounded focus:ring-navidad-green"
                />
                <span>Otro (especificar en mensaje)</span>
              </label>
            </div>
          </div>

          <div class="md:col-span-2">
            <label class="block text-navidad-green font-semibold mb-2">
              Mensaje adicional
            </label>
            <textarea 
              v-model="formData.mensaje"
              rows="4"
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-navidad-green focus:outline-none transition"
              placeholder="¿Algo que quieras contarnos?"
            ></textarea>
          </div>
        </div>

        <div class="mt-8 text-center">
          <button 
            type="submit" 
            :disabled="enviando"
            class="btn-primary px-12 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ enviando ? 'Enviando...' : 'Quiero ser Voluntario' }}
          </button>
        </div>

        <div v-if="mensajeExito" class="mt-6 bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg text-center">
          ✓ ¡Gracias por inscribirte! Te contactaremos pronto.
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
  enviando.value = true
  
  try {
    // Aquí puedes integrar con Formspree, EmailJS o tu backend
    // Ejemplo con Formspree:
    /*
    await fetch('https://formspree.io/f/TU_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData.value)
    })
    */
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    mensajeExito.value = true
    formData.value = {
      nombre: '',
      email: '',
      telefono: '',
      edad: '',
      areas: [],
      mensaje: ''
    }
    
    setTimeout(() => {
      mensajeExito.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Error al enviar:', error)
    alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.')
  } finally {
    enviando.value = false
  }
}
</script>