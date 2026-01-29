<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
import bg from "@/assets/img/slider-bg-2.jpg"

// Puedes cambiar esta URL por tu imagen local o una externa
const bgImage = bg;
</script>

<template>
  <!--<v-parallax 
    :src="mode === 'light' ? 'tu-fondo-claro.jpg' : bgImage" 
    scale="0.5"
    class="min-vh-100"
  >
    <div id="container" class="container">
      <div class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div class="text-center space-y-8">
          
          <Badge variant="outline" class="text-sm py-2 bg-background/50 backdrop-blur-sm">
            <span class="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Design is out now! </span>
          </Badge>

          <div class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold">
            <h1 class="drop-shadow-sm">
              Experience the
              <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Shadcn/Vue
              </span>
              landing page
            </h1>
          </div>

          <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground bg-background/20 rounded-lg p-2">
            We're more than just a tool, we're a community of passionate creators.
          </p>

          <div class="flex flex-col md:flex-row justify-center gap-4">
            <Button class="font-bold group/arrow">
              Get Started
              <ArrowRight class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button as-child variant="secondary" class="font-bold">
              <a href="https://github.com/..." target="_blank">Github repository</a>
            </Button>
          </div>
        </div>

        <div class="relative group mt-14">
          <div class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"></div>
          
          <img
            class="w-full md:w-[1200px] mx-auto rounded-lg relative border border-t-2 border-t-primary/30 img-border-animation shadow-2xl"
            :src="mode == 'light' ? 'hero-image-light.jpg' : 'hero-image-dark.jpg'" 
            alt="dashboard" 
          />
        </div>
      </div>
    </div>
  </v-parallax>-->


  <v-parallax :src="bg" class="h-screen w-full pa-0 mt-[-80px]">
    <div class="absolute inset-0 bg-black/40"></div>

    <v-container class="fill-height relative">
      <v-row
        class="justify-center align-center flex-column-reverse flex-md-row"
      >
        <v-col cols="12" md="9">
          <h3 class="text-h3 mb-5">DE LA PLANIFICACIÓN A LA ENTREGA:</h3>
          <h3 class="text-h3 mb-5">CONFIANZA GARANTIZADA</h3>
          <h3 class="text-h3 mb-8 font-weight-thin">Web Developer</h3>
          <v-btn class="elevation-4 rounded-xl mb-4" color="primary">
            LEER MAS
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>

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
