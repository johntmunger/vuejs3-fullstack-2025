<script setup lang="ts">
import DataTable from "@/components/ui/data-table/DataTable.vue";
import { useTasksStore } from "@/stores/loaders/tasks";
import { usePageStore } from "@/stores/page";
import { columns } from "@/utils/tableColumns/tasksColumns";
import { storeToRefs } from "pinia";

usePageStore().pageData.title = "My Tasks";

const tasksLoader = useTasksStore()
const { tasks } = storeToRefs(tasksLoader);
const { getTasks } = tasksLoader;

await getTasks();
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
