<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import valores from "@/assets/img/quienesSomos/valores.png";
import vision from "@/assets/img/quienesSomos/vision.png";
import mision from "@/assets/img/quienesSomos/mision.png";
import objetivos from "@/assets/img/quienesSomos/objetivos.png";


interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "VALORES",
    title: "Los principios que guían cada uno de nuestros proyectos",
    description:
      "Confianza, respeto, cooperación, responsabilidad, trabajo en equipo, calidad, profesionalismo y honradez.",
    image: valores,
  },
  {
    badgeTitle: "VISIÓN",
    title: "Construir liderazgo y confianza a largo plazo",
    description:
      "Ser la empresa constructora veracruzana líder en infraestructura portuaria, urbana e industrial, reconocida a nivel nacional por su calidad, transparencia y compromiso con el desarrollo sostenible, generando confianza en cada obra que realizamos.",
    image: vision,
  },
  {
    badgeTitle: "MISIÓN",
    title: "Transformar ideas en obras que impulsan el desarrollo",
    description:
      "Diseñar, construir y ejecutar proyectos de infraestructura que fortalezcan el crecimiento económico y social de Veracruz y México, ofreciendo soluciones innovadoras y seguras, con un equipo altamente profesional y comprometido con la excelencia, la ética y la responsabilidad social.",
    image: mision,
  },
  {
    badgeTitle: "OBJETIVO GENERAL",
    title: "Crecimiento sostenido con resultados medibles",
    description:
      "Brindar servicios de construcción de alta calidad, seguros y sostenibles, cumpliendo con plazos y requerimientos establecidos, logrando un índice de satisfacción del cliente ≥ 90%, y aumentar en 20% la participación en licitaciones públicas y privadas para 2026, consolidando el crecimiento competitivo de la empresa.",
    image: objetivos,
  },
];
</script>

<template>
  <section
    id="features"
    class="container py-20 sm:py-20"
  >
    <div class="text-center mb-2">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Nosotros
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        PROCESOS PASO A PASO
      </h2>
    </div>

    <div class="lg:w-[80%] mx-auto relative contenedor-movil">
      <div
        v-for="(
          { badgeTitle, title, description, image }, index
        ) in HowItWorksList"
        :key="title"
        :class="[
          'flex mb-8 items-center',
          { ' flex-row-reverse': index % 2 !== 0 },
        ]"
      >
        <Card class="h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div class="pb-4">
              <Badge>{{ badgeTitle }}</Badge>
            </div>

            <CardTitle>
              {{ title.toUpperCase() }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground w-[80%] text-justify">
            {{ description }}
          </CardContent>
        </Card>

        <img
          :src="image"
          :alt="`Descripcion de la imagen ${title} `"
          class="hidden sm:block w-[150px] md:w-[250px] lg:w-[300px] mx-auto"
        />
        <div
          :class="[
            '-z-10 absolute right-0 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl',
            {
              'left-0': index % 2 !== 0,
            },
          ]"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>

/* Media Query para móviles (Pantallas menores a 768px) */
@media (max-width: 767px) {
  .contenedor-movil {
    width: 95% !important;
    margin: 0 auto; /* Para que quede centrado */
  }

  .text-2xl{
    font-size: 1.3rem !important;
  }

  .p-6{
    padding: 0.5rem !important;
  }
}

</style>
