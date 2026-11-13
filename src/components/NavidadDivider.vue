<script setup>
defineProps({
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="w-full relative h-12 md:h-20 bg-[#D4AF37] overflow-hidden" aria-hidden="true">
    <svg 
      viewBox="0 0 1440 100" 
      class="absolute bottom-0 w-full h-full transition-transform" 
      :class="{ 'scale-x-[-1]': reverse }"
      preserveAspectRatio="none"
    >
      <polygon fill="#F5F0E8" points="0,100 1440,0 1440,100"></polygon>
    </svg>
  </div>
</template>