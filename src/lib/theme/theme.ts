import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const theme: Writable<'light' | 'dark'> = writable('light');

export const toggleTheme = () => {
  theme.update((t) => t === 'light' ? 'dark' : 'light');
}

theme.subscribe((t) => {
  if (t === 'light') {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }
})