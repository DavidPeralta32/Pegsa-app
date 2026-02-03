<script setup lang="ts">
import { ref } from "vue";
// 1. Importar el componente del visor
import VueEasyLightbox from 'vue-easy-lightbox';
import {
  Card,
  CardHeader,
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
  { imageUrl: proyecto1, firstName: "", lastName: "Estadio" },
  { imageUrl: proyecto2, firstName: "", lastName: "Gradas" },
  { imageUrl: proyecto3, firstName: "", lastName: "Rompeolas" },
  { imageUrl: proyecto4, firstName: "", lastName: "Imagen" },
  { imageUrl: proyecto5, firstName: "", lastName: "Edificio" },
  { imageUrl: proyecto6, firstName: "", lastName: "Imagen" },
  { imageUrl: proyecto7, firstName: "", lastName: "Estadio" },
  { imageUrl: proyecto8, firstName: "", lastName: "Rompeolas" },
];

// --- LÓGICA DEL VISOR ---
const visibleRef = ref(false);
const indexRef = ref(0);
// Extraemos solo las URLs para el visor
const imgsRef = teamList.map(item => item.imageUrl);

const showImg = (index: number) => {
  indexRef.value = index;
  visibleRef.value = true;
};

const onHide = () => (visibleRef.value = false);
</script>

<template>
  <section id="proyectos" class="container lg:w-[75%] py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">NUESTROS PROYECTOS</h2>
      <h2 class="text-3xl md:text-4xl text-center font-bold">
        TRABAJOS DE CONSTRUCCIÓN
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <Card
        v-for="({ imageUrl }, index) in teamList"
        :key="imageUrl"
        @click="showImg(index)"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg cursor-pointer transition-transform active:scale-95"
      >
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img
              :src="imageUrl"
              alt=""
              draggable="false"
              class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01] select-none pointer-events-none"
            />
          </div>
        </CardHeader>
      </Card>
    </div>

    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
      :move-disabled="true"
      :mask-closable="true"
    />
  </section>
</template>