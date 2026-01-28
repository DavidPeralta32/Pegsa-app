<script setup lang="ts">

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import Autoplay from "embla-carousel-autoplay";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import acabados from "@/assets/img/que_hacemos/acabados.jpeg";
import edificacion from "@/assets/img/que_hacemos/edificacion-1.jpeg"
import estadio from "@/assets/img/que_hacemos/estadio-piranta-fuentes.jpeg"
import obraCivil from "@/assets/img/que_hacemos/obra-civil.jpeg"
import tramosCarreteros from "@/assets/img/que_hacemos/tramos-carreteros.jpeg"

interface ReviewProps {
  image: string;
  title: string;
  comment: string;
}




const reviewList: ReviewProps[] = [
  {
    title: "EDIFICACIONES",
    comment: "Transformamos visiones en estructuras sólidas. Desarrollamos proyectos integrales de edificación residencial, comercial e industrial",
    image: edificacion,
  },
  {
    title: "OBRA CIVIL",
    comment: "Infraestructura que impulsa el desarrollo. Ejecutamos proyectos de gran escala con precisión técnica, desde cimentaciones profundas hasta estructuras complejas",
    image: estadio,
  },

  {
    title: "OBRAS DE PROTECCIÓN PORTUARIA",
    comment: "Ingeniería frente al mar. Especialistas en el diseño y construcción, utilizando tecnología avanzada para proteger las zonas portuarias contra el impacto del oleaje y la erosión",
    image: obraCivil,
  },
  {
    title: "ACABADOS",
    comment: "El detalle que marca la diferencia. Ofrecemos soluciones estéticas y duraderas en interiores y exteriores",
    image: acabados,
  },
  {
    title: "TRAMOS CARRETEROS",
    comment: "Conectando caminos, acercando destinos. Construcción y mantenimiento de vialidades y carreteras con pavimentos de alta resistencia",
    image: tramosCarreteros,
  },
];

const autoplay = Autoplay({
  delay: 3000,      // tiempo entre slides (ms)
  stopOnMouseEnter: true, // se pausa al pasar el mouse
  stopOnInteraction: false, // sigue aunque el usuario interactúe
});

</script>

<template>
  <section id="testimonials" class="container py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        QUE HACEMOS
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        NUESTROS SERVICIOS DE CONSTRUCCIÓN
      </h2>

      <h3 class="text-1xl md:text-1xl text-center mb-4">
        Tenemos la confianza y la seguridad de que seremos su mejor opción en la realización de sus proyectos como:
      </h3>
    </div>


    <Carousel :plugins="[autoplay]" :opts="{ align: 'start', loop:true }" class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto">
      <CarouselContent>
        <CarouselItem v-for="review in reviewList" :key="review.title" class="md:basis-1/2 lg:basis-1/3 flex">
          <Card class="overflow-hidden bg-muted/50 dark:bg-card">
            <!-- IMAGEN -->
            <div class="relative h-48 w-full">
              <img :src="review.image" alt="cover" loading="lazy" class="h-full w-full object-cover" />

              <!-- TÍTULO SOBRE LA IMAGEN -->
              <div class="absolute inset-0 bg-black/40 flex items-end p-4">
                <h3 class="text-white text-lg font-semibold">
                  {{ review.title }}
                </h3>
              </div>
            </div>

            <!-- CONTENIDO -->
            <CardContent class="flex-1 pt-4">
              <p class="text-sm text-muted-foreground">
                "{{ review.comment }}"
              </p>
            </CardContent>
           
          </Card>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

  </section>
</template>
