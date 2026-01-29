<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import proyecto1 from "@/assets/img/ESTADIO 1.jpeg";
import proyecto2 from "@/assets/img/ESTADIO 2.jpeg";
import proyecto3 from "@/assets/img/img_02.jpg";
import proyecto4 from "@/assets/img/img_03.jpg";
import proyecto5 from "@/assets/img/img_1.jpg";
import proyecto6 from "@/assets/img/CCTM.jpeg";
import proyecto7 from "@/assets/img/img_04.jpg";
import proyecto8 from "@/assets/img/imag_05.jpg";


interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  
}


const teamList: TeamProps[] = [
  {
    imageUrl: proyecto1,
    firstName: "",
    lastName: "Estadio",
    
  },
  {
    imageUrl: proyecto2,
    firstName: "",
    lastName: "Gradas",
    
  },
  {
    imageUrl:proyecto3,
    firstName: "",
    lastName: "Rompeolas",
    
  },
  {
    imageUrl: proyecto4,
    firstName: "",
    lastName: "Imagen",
    
  },
  {
    imageUrl: proyecto5,
    firstName: "",
    lastName: "Edificio",
    
  },
  {
    imageUrl: proyecto6,
    firstName: "",
    lastName: "Imagen",
   
  },
  {
    imageUrl:proyecto7,
    firstName: "",
    lastName: "Estadio",
    
  },
  {
    imageUrl: proyecto8,
    firstName: "",
    lastName: "Rompeolas",
    
  },
];


</script>

<template>
  <section
    id="team"
    class="container lg:w-[75%] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">NUESTROS PROYECTOS</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        TRABAJOS DE CONSTRUCCIÓN
      </h2>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <Card
        v-for="{
          imageUrl,
          firstName,
          lastName,
        } in teamList"
        :key="imageUrl"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
      >
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img
              :src="imageUrl"
              alt=""
              class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
            />
          </div>
          <CardTitle class="py-6 pb-4 px-6"
            >{{ firstName }}
            <span class="text-primary">{{ lastName }}</span>
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  </section>
</template>
