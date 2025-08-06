<script setup lang="ts">
import { usePageStore } from '@/stores/page';

usePageStore().pageData.title = 'Home page';
</script>

<template>
  <div>
    <!-- title inherited from pinia store -->
    <!-- <h1>Home page</h1> -->
  </div>
</template>
