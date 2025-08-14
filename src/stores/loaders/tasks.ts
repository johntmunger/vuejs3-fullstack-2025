import {
    taskQuery,
    tasksWithProjectsQuery,
  } from '@/utils/supaQueries'
import type { Task, TasksWithProjects } from "@/utils/supaQueries";
import { useErrorStore } from "../error";
import { defineStore } from "pinia";
import { useMemoize } from "@vueuse/core";

export const useTasksStore = defineStore('tasks-store', () => {
    const tasks = ref<TasksWithProjects | null>(null);
    const task = ref<Task | null>(null);

    // use memoize for caching purposes
    const loadTasks = useMemoize (async (key: string) => await tasksWithProjectsQuery) 
    const loadTask = useMemoize (async (id: string) => await taskQuery(id)
    )

    const getTasks = async () => {
    const { data, error, status } = await loadTasks('tasks');

    if (error) useErrorStore().setError({ error, customCode: status });

    tasks.value = data;
    };

    const getTask = async (id: string) => {
        task.value = null

        const { data, error, status } = await loadTask(id)

        if (error) useErrorStore().setError({ error, customCode: status })

        if (data) task.value = data

        // validateCache({
        //   ref: project,
        //   query: projectQuery,
        //   key: slug,
        //   loaderFn: loadProject
        // })
    }

    return {
        task,
        tasks,
        getTask,
        getTasks,
    }
});

