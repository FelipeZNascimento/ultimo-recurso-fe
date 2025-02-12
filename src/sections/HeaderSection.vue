<template>
  <header>
    <div class="wrapper" @mouseleave="hoveredRouteSubmenus = null">
      <nav class="nav">
        <div class="main-menu">
          <RouterLink to="/">
            <img v-if="isDarkTheme" class="logo" src="@/assets/logo-dark.png" />
            <img v-else class="logo" src="@/assets/logo-light.png" />
          </RouterLink>
          <RouterLink
            v-for="(item, index) in routes"
            :key="index"
            :to="item.path"
            @mouseover="() => handleMouseOver(index)"
            @click="hoveredRouteSubmenus = null"
          >
            {{ item.name }}
          </RouterLink>
          <ButtonComponent theme="regular" text="Junta-te" />
          <ButtonComponent theme="money" text="Faz uma doação" />
          <div class="social-media">
            <a href="#"><TwitterIcon /></a>
            <a href="#"><InstagramIcon /></a>
            <a href="#"><YouTubeIcon /></a>
          </div>
          <a class="theme-icon" @click="toggleTheme"><DarkModeIcon /></a>
        </div>
        <Transition>
          <div class="sub-menu" v-if="hoveredRouteSubmenus">
            <a v-for="(item, index) in hoveredRouteSubmenus" :key="index">{{ item.name }}</a>
          </div>
        </Transition>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { useThemeStore } from '@/stores/ThemeStore';
import { ref, watch, onMounted } from 'vue';
import type { Ref } from 'vue';

import DarkModeIcon from '@/components/icons/IconDarkMode.vue';
import TwitterIcon from '@/components/icons/IconTwitter.vue';
import InstagramIcon from '@/components/icons/IconInstagram.vue';
import YouTubeIcon from '@/components/icons/IconYouTube.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { routes } from '@/router';
import { MediaQuery, useBreakpoints } from '@/utils/mediaQuery';

const isDarkTheme = ref(false);
const hoveredRouteSubmenus: Ref<null | { path: string; name: string }[]> = ref(null);
const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initialize();
  const { mediaQuery } = useBreakpoints();

  isDarkTheme.value = themeStore.getTheme() === 'dark';

  if (mediaQuery.value <= MediaQuery.md) {
    alert('is mobile!');
  }
});

watch(
  () => themeStore.getTheme(),
  (newTheme) => {
    isDarkTheme.value = newTheme === 'dark';
  },
);

function toggleTheme() {
  themeStore.toggleTheme();
}

function handleMouseOver(routeIndex: number) {
  hoveredRouteSubmenus.value = routes[routeIndex].submenus;
}
</script>

<style lang="scss" scoped>
.v-enter-active {
  transition:
    opacity 0.5s ease,
    max-height 0.5s ease;
  max-height: 1000px;
}
.v-leave-active {
  transition:
    opacity 0.1s ease,
    max-height 0.5s ease;
  border: 0 !important;
  padding: 0 !important;
  max-height: 0;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  padding: 0;
  max-height: 0;
}
header {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: var(--s-spacing);
  z-index: 10; /* Ensures header is above other content */
  text-align: center;
  i {
    display: flex;
    place-content: center;
    place-items: center;
    width: 32px;
    height: 32px;

    color: var(--color-text);
  }

  .social-media {
    display: flex;
    flex: 1;
    align-items: center;
    border-top: 2px solid var(--color-border);
    background-color: var(--color-background);
    height: 100%;
    color: var(--navigation-anchor-color);

    a {
      flex: 1;
      margin: 0;
      padding: var(--xs-spacing);

      &:hover {
        background-color: var(--ur-c-green-t3);
      }
    }
  }
}

.wrapper {
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: var(--nav-height);
}

.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: var(--transition-time);
  border-bottom: 2px solid var(--color-border);
  background-color: var(--color-background);
  width: 100%;
  font-size: 20px;
  text-align: center;

  a {
    display: inline-block;
    flex: 1;
    cursor: pointer;
    // margin: 0 var(--s-spacing);
    color: var(--navigation-anchor-color);

    &:hover {
      background-color: inherit;
      color: var(--navigation-anchor-color-hover);
    }
  }

  .main-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--l-spacing);
    width: 100%;
    max-width: var(--max-page-width);
    font-size: 20px;
    text-align: center;
  }

  .theme-icon {
    flex: 0;
  }

  img {
    height: calc(var(--nav-height) - 10px);
  }
}

.sub-menu {
  display: flex;
  flex-direction: column;
  border-top: 2px solid var(--color-border);
  background-color: var(--color-background);
  padding: var(--m-spacing) 0;
  width: 100%;
  max-width: var(--max-page-width);
  font-size: 16px;
}

nav a.router-link-exact-active {
  color: var(--ur-c-green);

  &:hover {
    background-color: inherit;
    color: var(--navigation-anchor-color-hover);
  }
}
</style>
