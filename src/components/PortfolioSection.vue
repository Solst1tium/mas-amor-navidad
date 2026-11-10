<template>
  <section id="portafolio" class="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Sobre el Desarrollador
        </h2>
        <div class="w-24 h-1 bg-navidad-gold mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <div class="bg-gradient-to-br from-navidad-red to-navidad-green p-1 rounded-2xl">
            <div class="bg-gray-900 p-8 rounded-2xl">
              <h3 class="text-3xl font-bold mb-4">¡Hola! 👋</h3>
              <p class="text-lg mb-6 text-gray-300">
                Soy desarrollador frontend apasionado por crear experiencias web 
                que hagan la diferencia. Este proyecto fue desarrollado con amor 
                para apoyar una causa solidaria.
              </p>
              
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <span class="text-2xl">💻</span>
                  <div>
                    <p class="font-semibold">Especialidades</p>
                    <p class="text-sm text-gray-400">Vue.js, Angular, HTML/CSS</p>
                  </div>
                </div>
                
                <div class="flex items-center gap-3">
                  <span class="text-2xl">🎯</span>
                  <div>
                    <p class="font-semibold">Enfoque</p>
                    <p class="text-sm text-gray-400">UX/UI, Responsive Design, Performance</p>
                  </div>
                </div>
                
                <div class="flex items-center gap-3">
                  <span class="text-2xl">❤️</span>
                  <div>
                    <p class="font-semibold">Motivación</p>
                    <p class="text-sm text-gray-400">Usar la tecnología para impactar positivamente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left">
          <h3 class="text-2xl font-bold mb-6">Tecnologías utilizadas</h3>
          
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition">
              <div class="text-3xl mb-2">⚡</div>
              <p class="font-semibold">Vue.js 3</p>
              <p class="text-xs text-gray-400">Composition API</p>
            </div>
            
            <div class="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition">
              <div class="text-3xl mb-2">🎨</div>
              <p class="font-semibold">Tailwind CSS</p>
              <p class="text-xs text-gray-400">Utility-first</p>
            </div>
            
            <div class="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition">
              <div class="text-3xl mb-2">🚀</div>
              <p class="font-semibold">Vite</p>
              <p class="text-xs text-gray-400">Build tool</p>
            </div>
            
            <div class="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition">
              <div class="text-3xl mb-2">✨</div>
              <p class="font-semibold">AOS</p>
              <p class="text-xs text-gray-400">Animaciones</p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://github.com/tu-usuario" 
              target="_blank"
              class="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-center hover:bg-navidad-gold transition"
            >
              🔗 GitHub
            </a>
            <a 
              href="https://linkedin.com/in/tu-usuario" 
              target="_blank"
              class="bg-navidad-green text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-green-700 transition"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>