import type { HashedPassword, PasswordTypes } from '@/types/password.types';

export const usePassword = defineStore('password', () => {
  const isLoading = ref<boolean>(false);
  const displayedPassword = ref<string>('');

  const generatePassword = async () => {
    isLoading.value = true;

    const password = await $fetch<PasswordTypes>('/api/password');
    displayedPassword.value = password.password;

    isLoading.value = false;
  };

  return {
    isLoading,
    displayedPassword,
    generatePassword,
  };
});
