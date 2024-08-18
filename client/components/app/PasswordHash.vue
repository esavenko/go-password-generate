<script lang="ts" setup>
// stores
import { useHashPassword } from '@/stores/hash.store';

import { Input } from '@/components/ui/input';
import { ClipboardCopy, Loader2 } from 'lucide-vue-next';

const hashStore = useHashPassword();

const enteredPassword = ref<string | null>('');

const handleHash = async (): Promise<void> => {
  if (enteredPassword.value) {
    await hashStore.hashPassword(enteredPassword.value);
    enteredPassword.value = hashStore.hashedPassword;
  }
};

const disabledHashBtn = computed(() => enteredPassword.value!.length === 0);
</script>

<template>
  <section>
    <div class="flex items-center justify-center flex-col mt-10">
      <span class="text-2xl">Тут вы можете хэшировать свой пароль</span>

      <div class="relative w-full mt-10">
        <Input
          id="search"
          type="text"
          placeholder="Сгенерировать пароль"
          class="h-20"
          v-model="enteredPassword"
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
