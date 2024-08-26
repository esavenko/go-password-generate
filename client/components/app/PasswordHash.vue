<script lang="ts" setup>
import { useHashPassword } from '@/stores/hash.store';
import { useClipboard } from '@vueuse/core';

const { copy, copied } = useClipboard();

import { Input } from '@/components/ui/input';
import { ClipboardCopy, Loader2, ClipboardCheck } from 'lucide-vue-next';

const hashStore = useHashPassword();

const isLoading = computed(() => hashStore.isLoading);
const hashPassword = computed(() => hashStore.hashPassword);

const enteredPassword = ref<string | null>('');

const handleHash = async (): Promise<void> => {
  if (enteredPassword.value) {
    await hashPassword.value(enteredPassword.value);
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
          @click="copy(enteredPassword as string)"
          class="absolute end-0 inset-y-0 flex items-center justify-center px-2"
        >
          <ClipboardCopy
            v-if="!copied"
            class="size-8 text-muted-foreground cursor-pointer"
          />
          <ClipboardCheck
            v-else
            class="size-8 text-muted-foreground cursor-pointer"
          />
        </span>
      </div>

      <div class="flex gap-3.5 w-full mt-5">
        <Button
          class="w-full h-12 text-base hover:bg-accent-foreground hover:text-slate-300 ease-in"
          variant="secondary"
          @click="handleHash"
          :disabled="disabledHashBtn"
        >
          <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
          Хэшировать пароль
        </Button>
      </div>
    </div>
  </section>
</template>
