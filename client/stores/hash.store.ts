import type { HashedPassword } from '@/types/password.types';
import { usePassword } from '@/stores/password.store';

export const useHashPassword = defineStore('hash', () => {
  const isLoading = ref<boolean>(false);
  const passwordStore = usePassword();

  const hashPassword = async (password: string): Promise<string | null> => {
    try {
      isLoading.value = true;

      const hashed = await $fetch<HashedPassword>('/api/hash', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      isLoading.value = false;

      passwordStore.displayedPassword = hashed.hashed_password;
      return hashed.hashed_password;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  return {
    isLoading,
    hashPassword,
  };
});
