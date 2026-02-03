<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { AlertCircle, Building2, Phone, Mail, Clock } from "lucide-vue-next";

interface ContactFormeProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const contactForm = reactive<ContactFormeProps>({
  firstName: "",
  lastName: "",
  email: "",
  subject: "Web Development",
  message: "",
});

const invalidInputForm = ref<boolean>(false);

const handleSubmit = () => {
  const { firstName, lastName, email, message } = contactForm;
  console.log(contactForm);

  const mailToLink = `mailto:contacto@pegsa.com?subject=Contacto&body=Hola mi nombre es: ${firstName} ${lastName}, mi correo es: ${email}. %0D%0A${message}`;

  window.location.href = mailToLink;
};
</script>

<template>
  <section id="contact" class="container py-24 sm:py-32">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="mb-4">
          <h2 class="text-lg text-primary mb-2 tracking-wider">CONTACTO</h2>

          <h2 class="text-3xl md:text-4xl font-bold">Contactate con nosotros</h2>
        </div>
        <p class="mb-8 text-muted-foreground lg:w-5/6">
          Estamos listos para impulsar tu próximo proyecto. Nuestro equipo de expertos está disponible para resolver tus dudas y ofrecerte la asesoría técnica que necesitas.
        </p>

        <div class="flex flex-col gap-4">
          <div>
            <div class="flex gap-2 mb-1">
              <Building2 />
              <div class="font-bold">Dirección</div>
            </div>

            <div>AV. Tiburón No. 508, Fracc. Costa de Oro Boca del Río, Ver. C.P. 94299</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Phone />
              <div class="font-bold">Telefono</div>
            </div>

            <div>+52 229 935 0923</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Mail />
              <div class="font-bold">Correo</div>
            </div>

            <div>contacto@pegsa.com</div>
          </div>

          <div>
            <div class="flex gap-2">
              <Clock />
              <div class="font-bold">Horario</div>
            </div>

            <div>
              <div>Lunes - Sabado</div>
              <div>9AM - 6PM</div>
            </div>
          </div>
        </div>
      </div>

      <!-- form -->
      <Card class="bg-muted/60 dark:bg-card">
        <CardHeader class="text-primary text-2xl"> </CardHeader>
        <CardContent>
          <form @submit.prevent="handleSubmit" class="grid gap-4">
            <div class="flex flex-col md:flex-row gap-8">
              <div class="flex flex-col w-full gap-1.5">
                <Label for="first-name">Nombre</Label>
                <Input id="first-name" type="text" placeholder="Tu nombre" v-model="contactForm.firstName" />
              </div>

              <div class="flex flex-col w-full gap-1.5">
                <Label for="last-name">Apellido</Label>
                <Input id="last-name" type="text" placeholder="Tu apellido" v-model="contactForm.lastName" />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">Correo</Label>
              <Input id="email" type="email" placeholder="micorreo@gmail.com" v-model="contactForm.email" />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="message">Mensaje</Label>
              <Textarea id="message" placeholder="Tu mensaje..." rows="5" v-model="contactForm.message" />
            </div>

            <Alert v-if="invalidInputForm" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Hay un error en el formulario. Por favor, revisa los datos introducidos.
              </AlertDescription>
            </Alert>

            <Button class="mt-4">Enviar</Button>
          </form>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </section>
  </section>
</template>
