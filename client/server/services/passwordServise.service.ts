import type { PasswordTypes, HashedPassword } from '@/types/password.types';

export const generatePassword = async (): Promise<PasswordTypes> => {
  const config = useRuntimeConfig();

  try {
    return await $fetch(config.public.generateApi);
  } catch (e) {
    console.error('Error generating password', e);
    throw e;
  }
};

export const hashPassword = async (
  password: string,
): Promise<HashedPassword> => {
  const config = useRuntimeConfig();

  try {
    return await $fetch(config.public.hashApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });
  } catch (e) {
    console.error('Error hashing password:', e);
    throw e;
  }
};
