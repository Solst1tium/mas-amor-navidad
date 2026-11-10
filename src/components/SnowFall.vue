<template>
  <div class="fixed inset-0 pointer-events-none z-50 overflow-hidden">
    <div 
      v-for="i in 90" 
      :key="i"
      class="absolute text-white opacity-60 animate-fall"
      :style="{
        left: Math.random() * 100 + '%',
        animationDuration: (Math.random() * 5 + 5) + 's',
        animationDelay: Math.random() * 5 + 's',
        fontSize: (Math.random() * 20 + 10) + 'px'
      }"
    >
      ❄
    </div>
  </div>
</template>

<style scoped>
@keyframes fall {
  0% {
    transform: translateY(-100px) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
  }
}
.animate-fall {
  animation: fall linear infinite;
}
</style>