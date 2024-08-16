import type { HashedPassword } from '@/types/password.types';
import { hashPassword as hashPasswordService } from '@/server/services/passwordServise.service';

export const useHashPassword = defineStore('hash', () => {
  const isLoading = ref<boolean>(false);
  const hashedPassword = ref<string | null>(null);

  const hashPassword = async (password: string): Promise<void> => {
    isLoading.value = true;

    try {
      const hashed: HashedPassword = await hashPasswordService(password);
      hashedPassword.value = hashed.hashed_password;
    } catch (e) {
      console.error('Error hashing', e);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    hashPassword,
    hashedPassword,
  };
});
