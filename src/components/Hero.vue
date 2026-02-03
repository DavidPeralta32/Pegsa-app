<script setup lang="ts">


import { ref } from 'vue'

import bgDefault from "@/assets/img/slider-bg-2.jpg"
import bg2 from "@/assets/img/slider-bg-1.jpg"
import bg3 from "@/assets/img/slider-bg-3.jpg"

const slides = ref([
  {
    src: bgDefault, // Tu imagen original
    title: "DE LA PLANIFICACIÓN A LA ENTREGA: CONFIANZA GARANTIZADA",
    subtitle: "CONSTRUCCIÓN SEGURA, EFICIENTE Y DE CALIDAD"
  },
  {
    src: bg2,
    title: "TU VISIÓN, NUESTRA CONSTRUCCIÓN",
    subtitle: "TRANSFORMAMOS IDEAS EN PROYECTOS SÓLIDOS Y EXITOSOS."
  },
  {
    src: bg3,
    title: "PROYECTOS A TU MEDIDA, CON LOS MÁS ALTOS ESTÁNDARES.",
    subtitle: "COMPROMISO, EXCELENCIA Y CONFIANZA EN CADA OBRA."
  }
])

</script>
<template>
  <div id="container">
    <v-parallax class="h-screen w-full pa-0 mt-[-80px]">

      <v-carousel class="absolute inset-0 z-10" show-arrows cycle hide-delimiters interval="7000"
        height="100vh">
        <template v-slot:prev="{ props }">
          <v-btn icon size="large" class="carousel-arrow" @click="props.onClick">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </template>

        <template v-slot:next="{ props }">
          <v-btn icon size="large" class="carousel-arrow" @click="props.onClick">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </template>
        <v-carousel-item v-for="(item, i) in slides" :key="i" :src="item.src" cover>
          <div class="absolute inset-0 bg-black/40 z-0"></div>

          <v-container class="fill-height relative">
            <v-row class="justify-start align-center flex-column-reverse flex-md-row">
              <v-col cols="12" md="9" class="text-white">
                <h4 class="animate__animated animate__backInDown text-h4 mb-2 font-weight-bold ">
                  {{ item.title }}
                </h4>
                <h4 class="text-h4 mb-5 text-primary animate__animated animate__backInUp animate__delay-1s">
                  {{ item.subtitle }}
                </h4>
                <v-btn class="animate__animated animate__backInUp animate__delay-1s elevation-4 rounded-xl mb-4" color="primary" size="large">
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
:deep(.carousel-arrow) {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 9999px;
  width: 52px;
  height: 52px;
  transition: all 0.3s ease;
}

:deep(.carousel-arrow:hover) {
  background-color: rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
}

:deep(.carousel-arrow .v-icon) {
  font-size: 32px;
}

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


@keyframes kenburns {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}

/* Aplicamos la animación a la imagen interna de Vuetify */
:deep(.v-window-item--active .v-img__img) {
  animation: kenburns 10s ease-out forwards;
}


@media (max-width: 767px) {
  .text-h4 {
    font-size: 1.5rem !important;
  }
}
</style>
