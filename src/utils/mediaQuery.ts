import { computed, onMounted, onUnmounted, ref } from 'vue';

enum MediaQuery {
  xs = 420,
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  '2xl' = 1440,
  '3xl' = 1600,
  '4xl' = 1920,
}

function useBreakpoints() {
  const windowWidth = ref(window.innerWidth);

  const onWidthChange = () => (windowWidth.value = window.innerWidth);
  onMounted(() => window.addEventListener('resize', onWidthChange));
  onUnmounted(() => window.removeEventListener('resize', onWidthChange));

  const mediaQuery = computed(() => {
    let matchedBreakpoint = MediaQuery['4xl']; // Default to the largest breakpoint

    for (const [, value] of Object.entries(MediaQuery)) {
      const typedValue = value as number;
      if (windowWidth.value >= typedValue) {
        matchedBreakpoint = value as MediaQuery;
      } else {
        break; // Stop once we find the largest breakpoint that matches
      }
    }

    return matchedBreakpoint;
  });

  const width = computed(() => windowWidth.value);

  return { width, mediaQuery };
}

export { MediaQuery, useBreakpoints };
