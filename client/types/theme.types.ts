import type { ColorModeInstance } from '@nuxtjs/color-mode/dist/runtime/types';

export type Theme = 'light' | 'dark';

export interface ColorTheme {
  colorMode: ColorModeInstance;
  toggleTheme: () => void;
}
