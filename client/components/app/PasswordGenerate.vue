<script lang="ts" setup>
import { Input } from '@/components/ui/input';
import { ClipboardCopy, Loader2 } from 'lucide-vue-next';
import type { PasswordTypes, HashedPassword } from '@/types/password.types';

let displayedPassword = ref<PasswordTypes>();

const { data: password, pending } = useFetch<PasswordTypes>('/api/password');

const generatePassword = () => {
  if (!password.value?.password) return;

  displayedPassword.value!.password = JSON.stringify(password.value?.password);
};

// const getHashPassword = async (password: string): Promise<string | null> => {
//   try {
//     const response = await fetch('http://localhost:4200/hash', {
//       method: 'POST',
//       body: JSON.stringify({ password }),
//     });
//
//     const data: HashedPassword = await response.json();
//
//     return data.hashed_password;
//   } catch (e) {
//     console.error(e);
//     return null;
//   }
// };

// const hashPassword = async () => {
//   if (displayedPassword.value) {
//     loading.value = true;
//     const hashed = await getHashPassword(displayedPassword.value);
//     displayedPassword.value = hashed || '';
//     loading.value = false;
//   }
// };
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
          v-model="displayedPassword"
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
          @click="generatePassword"
        >
          <Loader2 v-if="pending" class="w-4 h-4 mr-2 animate-spin" />
          Сгенерировать пароль
        </Button>

        <Button
          class="w-full h-12 text-base hover:bg-accent-foreground hover:text-slate-300 ease-in"
          variant="secondary"
          @click="hashPassword"
        >
          <Loader2 v-if="loading" class="w-4 h-4 mr-2 animate-spin" />
          Хэшировать пароль
        </Button>
      </div>
    </div>
  </section>
</template>
