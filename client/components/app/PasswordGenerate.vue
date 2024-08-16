<script lang="ts" setup>
import { usePassword } from '@/stores/password.store';
import { useHashPassword } from '@/stores/hash.store';

import { Input } from '@/components/ui/input';
import { ClipboardCopy, Loader2 } from 'lucide-vue-next';

const passwordStore = usePassword();
const hashStore = useHashPassword();

const passwordToShow = computed(() => {
  return hashStore.hashedPassword
    ? hashStore.hashedPassword
    : passwordStore.displayedPassword;
});

const handleGenerate = async (): Promise<void> => {
  await passwordStore.generatePassword();
  hashStore.hashedPassword = '';
};

const handleHash = async (): Promise<void> => {
  if (passwordStore.displayedPassword) {
    await hashStore.hashPassword(passwordStore.displayedPassword);
  }
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
          v-model="passwordToShow"
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
          @click="handleHash"
          :disabled="disabledHashBtn"
        >
          <Loader2
            v-if="hashStore.isLoading"
            class="w-4 h-4 mr-2 animate-spin"
          />
          Хэшировать пароль
        </Button>
      </div>
    </div>
  </section>
</template>
