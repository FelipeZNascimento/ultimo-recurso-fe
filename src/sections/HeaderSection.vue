<template>
  <MenuComponentMobile :toggleTheme="toggleTheme" :isDarkMode="isDarkMode" v-if="isMobile" />
  <MenuComponentDesktop :toggleTheme="toggleTheme" :isDarkMode="isDarkMode" v-else />
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/stores/ThemeStore';
import { ref, watch, onMounted, computed } from 'vue';
import MenuComponentMobile from '@/components/header/MenuComponentMobile.vue';
import MenuComponentDesktop from '@/components/header/MenuComponentDesktop.vue';
import { useDevice, DeviceSize } from '@/utils/mediaQuery';

const isDarkMode = ref(false);
const themeStore = useThemeStore();
const device = useDevice();
const isMobile = computed(() => device.size <= DeviceSize.s);
onMounted(() => {
  themeStore.initialize();
  isDarkMode.value = themeStore.getTheme() === 'dark';
});

watch(
  () => themeStore.getTheme(),
  (newTheme) => {
    isDarkMode.value = newTheme === 'dark';
  },
);

function toggleTheme() {
  themeStore.toggleTheme();
}
</script>

<style lang="scss" scoped></style>
