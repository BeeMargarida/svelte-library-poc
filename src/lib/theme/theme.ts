import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const theme: Writable<'light' | 'dark'> = writable('light');

export const toggleTheme = () => {
  theme.update((t) => t === 'light' ? 'dark' : 'light');
}

export const setupThemeToggle = () => {
  // @TODO: should also fetch from 'prefers-color-scheme'
  theme.subscribe((t) => {
    if (t === 'light') {
      window.document.documentElement.dataset.theme = 'light';
    } else {
      window.document.documentElement.dataset.theme = 'dark';
    }
  });
}