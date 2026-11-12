<script setup>
import HeroSection from '../components/HeroSection.vue'
import AboutEvent from '../components/AboutEvent.vue'
import HowToHelp from '../components/HowToHelp.vue'
import VolunteerForm from '../components/VolunteerForm.vue'

import Footer from '../components/Footer.vue'
import SnowFall from '@/components/SnowFall.vue'
import NavidadDivider from '@/components/NavidadDivider.vue'
import PastGallery from '@/components/PastGallery.vue'
</script>

<template>
  <main>
    <SnowFall/>
    <HeroSection />
    <AboutEvent />
    <NavidadDivider/>
    <PastGallery/>
    <HowToHelp />
        <NavidadDivider/>
    <VolunteerForm />

    <Footer />
  </main>
</template>
