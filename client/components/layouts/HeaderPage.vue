<script lang="ts" setup>
import PasswordIcon from 'assets/icons/PasswordIcon.vue';
</script>

<template>
  <header class="bg-accent-foreground">
    <div class="flex items-center h-40 max-w-7xl m-auto">
      <NuxtLink to="/" class="header__icon">
        <PasswordIcon />
      </NuxtLink>
      <div class="test"></div>
    </div>
  </header>
</template>
