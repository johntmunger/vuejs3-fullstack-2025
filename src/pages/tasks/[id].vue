<script setup lang="ts">
import { useCollabs } from "@/composables/collabs";
import { useTasksStore } from "@/stores/loaders/tasks";
import { usePageStore } from "@/stores/page";
import { storeToRefs } from "pinia";

const { id } = useRoute("/tasks/[id]").params;

const tasksLoader = useTasksStore()
const { task } = storeToRefs(tasksLoader)
const { getTask } = tasksLoader

watch(
  () => task.value?.name,
  () => {
    usePageStore().pageData.title = `Task: ${task.value?.name || ''}`
  }
)

await getTask(id);

const { getProfilesByIds } = useCollabs();

const collabs = task.value?.collaborators ? await getProfilesByIds(task.value.collaborators) : []
</script>

<template>
  <Table v-if="task">
    <TableRow>
      <TableHead>Name: </TableHead>
      <TableCell>{{ task.name }}</TableCell>
    </TableRow>
    <TableRow>
      <TableHead>Description: </TableHead>
      <TableCell> {{ task.name }}: &nbsp; {{ task.description }} </TableCell>
    </TableRow>
    <TableRow>
      <TableHead>Assignee: </TableHead>
      <TableCell> Lorem ipsum </TableCell>
    </TableRow>
    <TableRow>
      <TableHead>Project: </TableHead>
      <TableCell>
        {{ task.projects?.name }}
      </TableCell>
    </TableRow>
    <TableRow>
      <TableHead>Status: </TableHead>
      <TableCell>{{ task.status }}</TableCell>
    </TableRow>
    <TableRow>
      <TableHead>Collaborators: </TableHead>
      <TableCell>
        <div class="flex">
          <Avatar
            class="-mr-4 border border-primary hover:scale-110 transition-transform"
            v-for="collab in collabs"
            :key="collab.id"
          >
            <RouterLink
              class="w-full h-full flex items-center justify-center"
              :to="{ name: '/users/[username]', params: {username: collab.username} }"
            >
              <AvatarImage :src="collab.avatar_url || ''" alt="" />
              <AvatarFallback> </AvatarFallback>
            </RouterLink>
          </Avatar>
        </div>
      </TableCell>
    </TableRow>

    <TableRow class="hover:bg-transparent">
      <TableHead class="align-top pt-4"> Comments </TableHead>

      <TableCell>
        Comments cards goes in here..

        <div class="flex flex-col justify-between p-3 bg-muted my-2 rounded-md">
          <textarea
            placeholder="Add your comment.."
            class="w-full max-w-full overflow-y-auto prose-sm prose border rounded dark:prose-invert hover:border-muted bg-background border-muted p-3"
          >
          </textarea>
          <div class="flex justify-between mt-3">
            <Button> Comment </Button>
            <div class="flex gap-4">
              <button variant="ghost" @click.prevent>
                <iconify-icon icon="lucide:paperclip"></iconify-icon>
                <span class="sr-only">Attach file</span>
              </button>
              <button variant="ghost" @click.prevent>
                <iconify-icon icon="lucide:image-up"></iconify-icon>

                <span class="sr-only">Upload image</span>
              </button>
            </div>
          </div>
        </div>
      </TableCell>
    </TableRow>
  </Table>
</template>
