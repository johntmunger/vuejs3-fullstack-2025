<script setup lang="ts">
import AuthLayout from '@/components/Layout/main/AuthLayout.vue';
import { useErrorStore } from './stores/error';
import { storeToRefs } from 'pinia';
import { supabase } from './lib/supabaseClient';
import { useAuthStore } from './stores/auth';

const { activeError } = storeToRefs(useErrorStore());
const errorStore = useErrorStore();

onErrorCaptured((error) => {
  errorStore.setError({ error });
});

onMounted(async () => {
  useAuthStore().trackAuthChanges();
});
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="activeError" />

    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name"></Component>

        <template #fallback>
          <span>Loading ..</span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
