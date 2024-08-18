<script lang="ts" setup>
// stores
import { usePassword } from '@/stores/password.store';

import { Input } from '@/components/ui/input';
import { ClipboardCopy, Loader2 } from 'lucide-vue-next';
// TODO Реактивно декомпозировать stores
const passwordStore = usePassword();

const handleGenerate = async (): Promise<void> => {
  await passwordStore.generatePassword();
};

const disabledHashBtn = computed(
  () => passwordStore.displayedPassword.length === 0,
);
</script>

<template>
  <section>
    <div class="flex items-center justify-center flex-col mt-10">
      <span class="text-2xl">Тут вы можете сгенерировать себе пароль</span>

      <div class="relative w-full mt-10">
        <Input
          readonly
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
          @click="handleGenerate"
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
          @click="passwordStore.hashPassword"
          :disabled="disabledHashBtn"
        >
          <Loader2
            v-if="passwordStore.isLoading"
            class="w-4 h-4 mr-2 animate-spin"
          />
          Хэшировать пароль
        </Button>
      </div>
    </div>
  </section>
</template>
