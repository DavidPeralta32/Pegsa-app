<script setup lang="ts">
import Separator from "./ui/separator/Separator.vue";
import logoCircular from "@/assets/log-pegsa.jpeg";
import logo from "@/assets/logo-pegsa-circular.png";

import ic_facebook from "@/assets/img/ic_facebook.png";
import ic_instagram from "@/assets/img/ic_instagram.png";
</script>

<template>
  <footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">

        <div class="col-span-full xl:col-span-2">
          <a href="#" class="flex font-bold items-center gap-3">
            <div class="w-50 h-30 rounded-full overflow-hidden border-2 border-primary/20 text-center"
              style="margin-top: 20px;text-align: center !important;">
              <img :src="logoCircular" alt="PEGSA Logo" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-2xl tracking-tighter"></h3>
          </a>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="font-bold text-lg">Redes sociales</h3>
          <a href="https://www.facebook.com/profile.php?id=61581863360361" target="_blank"
            class="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity w-fit">
            <img :src="ic_facebook" alt="Facebook" class="w-6 h-6 object-contain" />
            <span>Facebook</span>
          </a>
          <a href="https://www.instagram.com/pegsaconstrucciones?igsh=N3diejZ5Y3FndmI3" target="_blank"
            class="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity w-fit">
            <img :src="ic_instagram" alt="Instagram" class="w-6 h-6 object-contain" />
            <span>Instagram</span>
          </a>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="font-bold text-lg">Plataformas</h3>
          <a href="#" class="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity w-fit">
            <img :src="logo" alt="Instagram" class="w-6 h-6 object-contain" />
            <span>Web</span>
          </a>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Servicios</h3>
          <a href="#" class="opacity-60 hover:opacity-100">Edificaciones</a>
          <a href="#" class="opacity-60 hover:opacity-100">Obras civil</a>
          <a href="#" class="opacity-60 hover:opacity-100">Obras de protección portuaria</a>
          <a href="#" class="opacity-60 hover:opacity-100">Acabados</a>
          <a href="#" class="opacity-60 hover:opacity-100">Tramos carreteros</a>
        </div>
      </div>

      <Separator class="my-6" />

      <section>
        <h3 class="text-sm opacity-70">
          &copy; 2026 All Rights Reserved by
          <a href="#" class="text-primary transition-all border-primary hover:border-b-2 font-medium">
            Pegsa - Construcciones
          </a>
        </h3>
      </section>
    </div>
  </footer>
</template>