<template>
 <div class="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
    
    <div 
      v-for="copo in copos" 
      :key="copo.id"
      class="absolute text-white opacity-60 animate-fall will-change-transform"
      :style="{
        left: copo.left,
        animationDuration: copo.duration,
        animationDelay: copo.delay,
        fontSize: copo.size
      }"
    >
      ❄
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const copos = ref([])

onMounted(() => {
  // Generamos 40 copos con valores precalculados (más performante)
  copos.value = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 5 + 5}s`, // Entre 5 y 10 segundos
    delay: `${Math.random() * 5}s`, // Delay inicial entre 0 y 5 segundos
    size: `${Math.random() * 15 + 10}px` // Entre 10px y 25px
  }))
})
</script>

<style scoped>
@keyframes fall {
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(100vh) rotate(180deg);
    opacity: 0;
  }
}

.animate-fall {
  animation: fall linear infinite;
  will-change: transform; /* Optimización de rendimiento */
}
</style>