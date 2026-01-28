<script setup lang="ts">
import { ChevronsDown } from "lucide-vue-next";
import Separator from "./ui/separator/Separator.vue";
import logoCircular from "@/assets/log-pegsa.jpeg";
</script>

<template>
  <footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div class="col-span-full xl:col-span-2">
          <a href="#" class="flex font-bold items-center">

            <h3 class="text-2xl">PEGSA</h3>
          </a>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Redes sociales</h3>
          <div>
            <a href="https://www.facebook.com/profile.php?id=61581863360361" class="opacity-60 hover:opacity-100">
              Facebook
            </a>
          </div>

          <div>
            <a href="https://www.instagram.com/pegsaconstrucciones?igsh=N3diejZ5Y3FndmI3"
              class="opacity-60 hover:opacity-100">
              Instagram
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Plataformas</h3>
          <div>
            <a href="#" class="opacity-60 hover:opacity-100">
              Web
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Servicios</h3>
          <div>
            <a href="#" class="opacity-60 hover:opacity-100">
              Edificaciones
            </a>
          </div>

          <div>
            <a href="#" class="opacity-60 hover:opacity-100">
              Obras civil
            </a>
          </div>

          <div>
            <a href="#" class="opacity-60 hover:opacity-100">
              Obras de protección portuaria
            </a>
          </div>

          <div>
            <a href="#" class="opacity-60 hover:opacity-100">
              Acabados
            </a>
          </div>

          <div>
            <a href="#" class="opacity-60 hover:opacity-100">
              Tramos carreteros
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="font-bold text-lg"></h3>
          <div class="flex items-center justify-start">
            <div class="relative group">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200">
              </div>

              <img :src="logoCircular" alt="Pegsa Construcciones"
                class="relative w-55 h-57 rounded-full border-2 border-white dark:border-zinc-900 object-cover shadow-lg" />
            </div>
          </div>
        </div>
    </div>

    <Separator class="my-6" />
    <section className="">
      <h3 class="">
        &copy; 2026 Designed and developed by
        <a href="#" className="text-primary transition-all border-primary hover:border-b-2">
          Pegsa - Construcciones
        </a>
      </h3>
    </section>
    </div>
  </footer>
</template>
