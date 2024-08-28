<script lang="ts" setup>
import { useTheme } from '@/composables/useTheme';
import { Moon, SunMedium } from 'lucide-vue-next';

const colorMode = useColorMode();

const { toggleTheme } = useTheme();

const lightTheme = computed(() => colorMode.preference === 'dark');
</script>

<template>
  <div>
    <Moon
      v-if="lightTheme"
      class="w-12 h-12 cursor-pointer text-slate-200 hover:text-slate-500 ease"
      @click="toggleTheme"
    />
    <SunMedium
      v-else
      class="w-12 h-12 cursor-pointer text-slate-200 hover:text-slate-500 ease"
      @click="toggleTheme"
    />
  </div>
</template>
