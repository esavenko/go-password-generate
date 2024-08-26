import { usePassword } from '@/stores/theme.store';

export const useTheme = () => {
  const themeStore = usePassword();
  const toggleTheme = computed(() => themeStore.toggleTheme);

  return {
    toggleTheme: toggleTheme,
  };
};
