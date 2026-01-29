<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
import { ref } from 'vue'

import bgDefault from "@/assets/img/slider-bg-2.jpg"

const slides = ref([
  {
    src: bgDefault, // Tu imagen original
    title: "DE LA PLANIFICACIÓN A LA ENTREGA: CONFIANZA GARANTIZADA",
    subtitle: "CONSTRUCCIÓN SEGURA, EFICIENTE Y DE CALIDAD"
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
    title: "INFRAESTRUCTURA DE VANGUARDIA",
    subtitle: "SOLUCIONES INTEGRALES PARA TU PROYECTO"
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    title: "COMPROMISO CON LA EXCELENCIA",
    subtitle: "CONSTRUYENDO EL FUTURO DE MÉXICO"
  }
])

</script>

<!--<template>
<div id="container">
  <v-parallax :src="bg" class="h-screen w-full pa-0 mt-[-80px]">
    <div class="absolute inset-0 bg-black/40"></div>

    <v-container class="fill-height relative">
      <v-row
        class="justify-start align-center flex-column-reverse flex-md-row"
      >
        <v-col cols="12" md="9">
          <h4 class="text-h4 mb-5">DE LA PLANIFICACIÓN A LA ENTREGA: CONFIANZA GARANTIZADA</h4>
          <h4 class="text-h4 mb-5">CONSTRUCCIÓN SEGURA,EFICIENTE Y DE CALIDAD</h4>
          <v-btn class="elevation-4 rounded-xl mb-4" color="primary">
            LEER MAS
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</div>


</template>-->

<template>
  <div id="container">
    <v-parallax class="h-screen w-full pa-0 mt-[-80px]">

      <v-carousel :show-arrows="true" cycle hide-delimiters interval="7000" height="100vh" class="absolute inset-0">
        <v-carousel-item v-for="(item, i) in slides" :key="i" :src="item.src" cover>
          <div class="absolute inset-0 bg-black/40"></div>

          <v-container class="fill-height relative">
            <v-row class="justify-start align-center flex-column-reverse flex-md-row">
              <v-col cols="12" md="9" class="text-white">
                <h4 class="text-h4 mb-2 font-weight-bold">
                  {{ item.title }}
                </h4>
                <h4 class="text-h4 mb-5 text-primary">
                  {{ item.subtitle }}
                </h4>
                <v-btn class="elevation-4 rounded-xl mb-4" color="primary" size="large">
                  LEER MÁS
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>

    </v-parallax>
  </div>
</template>

<style scoped>

.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}
</style>
