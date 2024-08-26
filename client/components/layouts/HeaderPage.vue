<script lang="ts" setup>
import PasswordIcon from 'assets/icons/PasswordIcon.vue';
import { Languages } from 'lucide-vue-next';
</script>

<template>
  <header class="bg-accent-foreground">
    <div class="flex justify-around items-center h-40 max-w-7xl m-auto">
      <NuxtLink to="/" class="header__icon">
        <PasswordIcon />
      </NuxtLink>

      <div class="flex gap-8 text-slate-300 text-3xl">
        <NuxtLink to="/" class="hover:text-slate-500 ease-in"
          >Сгенерировать</NuxtLink
        >
        <NuxtLink to="/hash" class="hover:text-slate-500 ease-in"
          >Хэшировать</NuxtLink
        >
      </div>
      <div class="flex items-center gap-10">
        <Languages
          class="w-12 h-12 cursor-pointer text-slate-200 hover:text-slate-500 ease"
        />
        <SharedThemeButton />
      </div>
    </div>
  </header>
</template>
