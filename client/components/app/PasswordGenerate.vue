<script lang="ts" setup>
import { Input } from '@/components/ui/input';
import { ClipboardCopy, Loader2 } from 'lucide-vue-next';

import { usePassword } from '@/stores/password.store';
import { useHashPassword } from '@/stores/hash.store';

const passwordStore = usePassword();
const hashPassword = useHashPassword();
</script>

<template>
  <section>
    <div class="flex items-center justify-center flex-col mt-10">
      <span class="text-2xl">Тут вы можете сгенерировать себе пароль</span>

      <div class="relative w-full mt-10">
        <Input
          disabled
          id="search"
          type="text"
          placeholder="Сгенерировать пароль"
          class="h-20"
          v-model="passwordStore.displayedPassword"
        />
        <span
          class="absolute end-0 inset-y-0 flex items-center justify-center px-2"
        >
          <ClipboardCopy class="size-8 text-muted-foreground cursor-pointer" />
        </span>
      </div>

      <div class="flex gap-3.5 w-full mt-5">
        <Button
          class="w-full h-12 text-base hover:bg-accent-foreground hover:text-slate-300 ease-in"
          variant="secondary"
          @click="passwordStore.generatePassword"
        >
          <Loader2
            v-if="passwordStore.isLoading"
            class="w-4 h-4 mr-2 animate-spin"
          />
          Сгенерировать пароль
        </Button>

        <Button
          class="w-full h-12 text-base hover:bg-accent-foreground hover:text-slate-300 ease-in"
          variant="secondary"
          @click="hashPassword.hashPassword(passwordStore.displayedPassword)"
        >
          <Loader2
            v-if="hashPassword.isLoading"
            class="w-4 h-4 mr-2 animate-spin"
          />
          Хэшировать пароль
        </Button>
      </div>
    </div>
  </section>
</template>
