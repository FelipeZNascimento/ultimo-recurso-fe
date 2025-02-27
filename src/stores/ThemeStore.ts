import { ref } from 'vue';
import { defineStore } from 'pinia';

type TTheme = 'dark' | 'light';

export const useThemeStore = defineStore('theme', () => {
  const darkMode = ref(true);

  function initialize() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      console.log('Dark mode is enabled');
      setTheme('dark');
    } else {
      console.log('Light mode is enabled');
      setTheme('light');
    }
  }

  function getTheme() {
    return darkMode.value ? 'dark' : 'light';
  }

  function setTheme(newTheme: TTheme) {
    darkMode.value = newTheme === 'dark' ? true : false;
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  function toggleTheme() {
    setTheme(darkMode.value ? 'light' : 'dark');
  }

  return { darkMode, initialize, getTheme, setTheme, toggleTheme };
});
