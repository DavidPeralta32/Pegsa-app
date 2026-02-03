<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";

import cliente01 from "@/assets/img/clientes/Clientes Pegsa-01.png"
import cliente02 from "@/assets/img/clientes/Clientes Pegsa-02.png"
import cliente03 from "@/assets/img/clientes/Clientes Pegsa-03.png"
import cliente04 from "@/assets/img/clientes/Clientes Pegsa-04.png"
import cliente05 from "@/assets/img/clientes/Clientes Pegsa-05.png"
import cliente06 from "@/assets/img/clientes/Clientes Pegsa-06.png"
import cliente07 from "@/assets/img/clientes/Clientes Pegsa-07.png"
import cliente08 from "@/assets/img/clientes/Clientes Pegsa-08.png"
import cliente09 from "@/assets/img/clientes/Clientes Pegsa-09.png"
import cliente10 from "@/assets/img/clientes/Clientes Pegsa-10.png"



interface SponsorProps {
  name: string;
  logo: string;
}

const sponsors: SponsorProps[] = [
  {
    name: "DOS BOCAS",
    logo: cliente01, // Ejemplo: ruta en carpeta public
  },
  {
    name: "ENSENADA",
    logo: cliente02,
  },
  {
    name: "TAMPICO",
    logo: cliente03,
  },
  {
    name: "ESCUELA NÁUTICA MERCANTE",
    logo: cliente04,
  },
  {
    name: "HIDALGO",
    logo: cliente05,
  },
  {
    name: "SCT",
    logo: cliente06,
  },
  {
    name: "BANOBRAS",
    logo: cliente07,
  },
  {
    name: "SEFIPLAN",
    logo: cliente08,
  },
  {
    name: "PEMEX",
    logo: cliente09,
  },
  {
    name: "SINFRA",
    logo: cliente10,
  },
];


</script>

<template>
  <section
    id="empresas"
    class="max-w-[95%] mx-auto pb-5 sm:pb-5 px-4"
  >
    <h2 class="text-lg text-primary text-center mb-6 tracking-wider">
      EMPRESAS QUE CONFIAN EN NOSOTROS
    </h2>

    <div class="relative w-full">
      <Marquee
        class="py-10"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[4rem]"
      >
        <div
          v-for="{ logo, name } in sponsors"
          :key="name"
          class="group flex flex-col items-center justify-center"
        >
          <div class="flex items-center justify-center bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm rounded-2xl p-4 w-[250px] h-[160px] transition-all duration-500 group-hover:shadow-xl dark:group-hover:shadow-primary/10 group-hover:border-primary/20 group-hover:-translate-y-2">
            <img 
              :src="logo" 
              :alt="name" 
              class="max-h-full max-w-full object-contain grayscale  group-hover:grayscale-0 group-hover:opacity-100 group-hover:invert-0 transition-all duration-500"
            />
          </div>
          
          <span class="mt-4 text-xs font-semibold text-slate-400 dark:text-zinc-500 opacity-0 group-hover:!opacity-100 transition-opacity duration-500 uppercase tracking-widest">
            {{ name }}
          </span>
        </div>
      </Marquee>

      <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
      <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
    </div>
  </section>
</template>
