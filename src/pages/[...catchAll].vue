<script setup lang="ts">
import AppErrorPage from "@/components/AppError/AppErrorPage.vue";
import { useErrorStore } from "@/stores/error";

useErrorStore().setError({ error: "Page not found", customCode: 404 });
</script>

<template>
  <div></div>
</template>
