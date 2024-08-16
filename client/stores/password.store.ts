import type { PasswordTypes } from '@/types/password.types';
import { generatePassword as generatePasswordService } from '@/server/services/passwordServise.service';

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

  return {
    isLoading,
    displayedPassword,
    generatePassword,
  };
});
