<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import HowItWorks from "./components/HowItWorks.vue";
import Sponsors from "./components/Sponsors.vue";
import Testimonials from "./components/Testimonials.vue";
import Team from "./components/Team.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import mapaPegsa from "@/components/Mapa.vue";
</script>

<template>
  <Navbar />
  <Hero />
  <HowItWorks />
  <Testimonials />
  <Sponsors />
  <Team />

  <Contact />
  <mapaPegsa/>
  <Footer />
</template>
