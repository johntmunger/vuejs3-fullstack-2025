<script setup lang="ts">
import Input from "@/components/ui/input/Input.vue";
import { useDark, useToggle } from '@vueuse/core'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <nav
    class="h-16 border-b bg-muted/40 flex gap-2 justify-between px-6 items-center"
  >
    <form class="relative h-fit w-full max-w-96">
      <iconify-icon
        class="absolute top-[50%] translate-y-[-50%] left-2.5 text-muted-foreground"
        icon="lucide:search"
      ></iconify-icon>
      <Input
        class="w-full pl-8 bg-background"
        type="text"
        placeholder="Search ..."
      />
    </form>

    <div class="flex justify-center items-center gap-1">
      <Button @click="toggleDark()" class="w-8 h-8">
        <Transition name="scale" mode="out-in">
          <iconify-icon v-if="isDark" icon="lucide:sun"></iconify-icon>
          <iconify-icon v-else icon="lucide:moon"></iconify-icon>
        </Transition>
      </Button>
      <div class="w-8">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
  </div>
  </nav>
</template>
