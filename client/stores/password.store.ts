import type { HashedPassword, PasswordTypes } from '@/types/password.types';
import {
  generatePassword as generatePasswordService,
  hashPassword as hashPasswordService,
} from '@/server/services/passwordServise.service';
// TODO Разделить логику isLoading между функциями
export const usePassword = defineStore('password', () => {
  const isLoading = ref<boolean>(false);
  const displayedPassword = ref<string>('');

  const generatePassword = async () => {
    isLoading.value = true;

    try {
      const data: PasswordTypes = await generatePasswordService();
      displayedPassword.value = data.password;
    } catch (e) {
      console.error('Error generating:', e);
    } finally {
      isLoading.value = false;
    }
  };

  const hashPassword = async (password: string): Promise<void> => {
    isLoading.value = true;

    try {
      const hashed: HashedPassword = await hashPasswordService(password);
      displayedPassword.value = hashed.hashed_password;
    } catch (e) {
      console.error('Error hashing', e);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    displayedPassword,
    generatePassword,
    hashPassword,
  };
});
