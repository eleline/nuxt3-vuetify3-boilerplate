<template>
  <v-app>
    <v-main>
      <v-text-field v-model="msg" />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const msg = ref('Hello World!');
</script>
