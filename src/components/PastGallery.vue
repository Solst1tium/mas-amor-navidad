<script setup>
const irASeccion = (idSeccion) => {
    const seccion = document.getElementById(idSeccion)
    if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<template>
    <section class="py-20 bg-navidad-cream relative overflow-hidden">
        <!-- Decoración sutil de fondo -->
        <div class="absolute top-10 left-10 text-7xl opacity-5 pointer-events-none select-none" aria-hidden="true">🎄
        </div>
        <div class="absolute bottom-10 right-10 text-7xl opacity-5 pointer-events-none select-none" aria-hidden="true">⭐
        </div>

        <div class="max-w-6xl mx-auto px-4 relative z-10">

            <!-- Título de la sección -->
            <div class="text-center mb-14" data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl font-display font-bold text-navidad-green mb-4">
                    Así vivimos la Navidad el año pasado
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Momentos reales de alegría, comunidad y esperanza que este año queremos multiplicar contigo.
                </p>
                <div class="w-24 h-1 bg-navidad-gold mx-auto mt-6" aria-hidden="true"></div>
            </div>

            <!-- Grid asimétrico equilibrado (3 columnas) -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

                <!-- 1️ COCINA — Todo comienza aquí (Ocupa 2 columnas en desktop) -->
                <figure
                    class="group relative overflow-hidden rounded-2xl shadow-xl md:col-span-2 h-[280px] md:h-[380px] bg-emerald-950"
                    data-aos="fade-right" data-aos-delay="100">
                    <img src="/images/cocina-voluntarios.webp"
                        alt="Voluntarios preparando la cena navideña en la cocina comunitaria" loading="lazy"
                        class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                        aria-hidden="true"></div>
                    <figcaption class="absolute bottom-0 left-0 right-0 text-white px-6 py-5">
                        <p class="font-display font-bold text-lg md:text-xl drop-shadow-md">Todo comienza en la cocina
                        </p>
                        <p class="text-sm text-gray-200 mt-1 drop-shadow">Voluntarios preparando con amor cada plato</p>
                    </figcaption>
                </figure>

                <!-- 2️ COMEDOR (1 columna) -->
                <figure
                    class="group relative overflow-hidden rounded-2xl shadow-xl h-[280px] md:h-[380px] bg-emerald-950"
                    data-aos="fade-left" data-aos-delay="200">
                    <img src="/images/comedor-lleno.webp"
                        alt="Familias compartiendo la cena navideña en el salón decorado" loading="lazy"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style="object-position: 2% center;" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                        aria-hidden="true"></div>
                    <figcaption class="absolute bottom-0 left-0 right-0 text-white px-5 py-4">
                        <p class="font-display font-bold drop-shadow-md">Una mesa para todos</p>
                        <p class="text-xs text-gray-200 mt-1 drop-shadow">Compartiendo en comunidad</p>
                    </figcaption>
                </figure>

                <!-- 3️ EQUIPO — Ancho completo (3 columnas) para que NO corte a nadie de los bordes -->
                <figure
                    class="group relative overflow-hidden rounded-2xl shadow-xl md:col-span-3 h-[260px] sm:h-[340px] md:h-[420px] bg-emerald-950"
                    data-aos="zoom-in" data-aos-delay="300">
                    <img src="/images/equipo-voluntario.webp"
                        alt="Equipo completo de voluntarios del evento navideño sonriendo" loading="lazy"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style="object-position: center 30%;" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent"
                        aria-hidden="true"></div>
                    <figcaption class="absolute bottom-0 left-0 right-0 text-white px-6 py-5 text-center">
                        <p class="font-display font-bold text-lg md:text-xl drop-shadow-md">Nuestro equipo de
                            voluntarios</p>
                        <p class="text-sm text-gray-200 mt-1 drop-shadow">Corazón de esta obra — ¿Te unes este año?</p>
                    </figcaption>
                </figure>

                <!-- 4️ REGALO — Con fondo difuminado de la misma foto para mostrarla completa y "más de lejos" -->
                <figure
                    class="group relative overflow-hidden rounded-2xl shadow-xl md:col-span-3 h-[340px] md:h-[480px] bg-emerald-950"
                    data-aos="fade-up" data-aos-delay="400">
                    <!-- Capa 1: La misma imagen ampliada y desenfocada para rellenar los lados de forma natural -->
                    <img src="/images/regalo-familia.webp" alt="" aria-hidden="true" loading="lazy"
                        class="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-55" />

                    <!-- Capa 2: La imagen real completa (object-contain) sin zoom excesivo -->
                    <img src="/images/regalo-familia.webp"
                        alt="Voluntario entregando un regalo navideño a una familia sonriente" loading="lazy"
                        class="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]" />

                    <div class="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"
                        aria-hidden="true"></div>
                    <figcaption class="absolute bottom-0 left-0 right-0 z-30 text-white px-6 py-6 text-center">
                        <p class="font-display font-bold text-xl md:text-2xl drop-shadow-md">El momento que lo cambia
                            todo</p>
                        <p class="text-base text-gray-200 mt-1 drop-shadow">Entregando esperanza a cada familia</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
</template>