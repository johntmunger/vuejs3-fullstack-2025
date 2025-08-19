<script setup lang="ts">
import DataTable from "@/components/ui/data-table/DataTable.vue";
import { useCollabs } from "@/composables/collabs";
import { columns } from "@/utils/tableColumns/tasksColumns";
import { useTasksStore } from "@/stores/loaders/tasks";
import { usePageStore } from "@/stores/page";
import { storeToRefs } from "pinia";

usePageStore().pageData.title = "My Tasks";

const tasksLoader = useTasksStore();
const { tasks } = storeToRefs(tasksLoader);
const { getTasks } = tasksLoader;

await getTasks();

const { getGroupedCollabs, groupedCollabs } = useCollabs();

getGroupedCollabs(tasks.value ?? []);

const columnsWithCollabs = columns(groupedCollabs);
</script>

<template>
  <DataTable v-if="tasks" :columns="columnsWithCollabs" :data="tasks" />
</template>
