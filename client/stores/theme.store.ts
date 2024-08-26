import type { Theme } from '~/types/theme.types';

export const usePassword = defineStore('theme', () => {
  const toggleTheme = (): void => {
    const colorMode = useColorMode();
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
  };

  return {
    toggleTheme,
  };
});
