<template>
  <header>
    <div class="wrapper" @mouseleave="hoveredRouteSubmenus = null">
      <nav class="nav">
        <div class="main-menu">
          <a href="/#">
            <img v-if="isDarkMode" class="logo" src="@/assets/logo-dark.png" />
            <img v-else class="logo" src="@/assets/logo-light.png" />
          </a>
          <RouterLink
            v-for="(item, index) in navRoutes"
            :key="index"
            :to="item.path"
            @mouseover="() => handleMouseOver(index)"
            @click="hoveredRouteSubmenus = null"
          >
            {{ item.name }}
          </RouterLink>
          <ButtonComponent
            :class="{ hidden: isWithinFirstViewport }"
            theme="regular"
            text="Junta-te"
          />
          <ButtonComponent
            :class="{ hidden: isWithinFirstViewport }"
            theme="money"
            text="Faz uma doação"
          />
          <div class="social-media">
            <a href="#"><TwitterIcon /></a>
            <a href="#"><InstagramIcon /></a>
            <a href="#"><YouTubeIcon /></a>
          </div>
          <a class="theme-icon" @click="toggleTheme">
            <SunIcon v-if="isDarkMode" class="icon" />
            <MoonIcon v-else class="icon" />
          </a>
        </div>
      </nav>
      <Transition name="fadeHeight" mode="out-in">
        <div class="sub-menu" v-if="hoveredRouteSubmenus">
          <a :href="item.path" v-for="(item, index) in hoveredRouteSubmenus" :key="index">{{
            item.name
          }}</a>
        </div>
      </Transition>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { onMounted, onUnmounted, ref } from 'vue';
import type { Ref } from 'vue';

import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid';
import TwitterIcon from '@/components/icons/IconTwitter.vue';
import InstagramIcon from '@/components/icons/IconInstagram.vue';
import YouTubeIcon from '@/components/icons/IconYouTube.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

import { navRoutes } from '@/router';

defineProps<{
  isDarkMode: boolean;
  toggleTheme: () => void;
}>();

const hoveredRouteSubmenus: Ref<null | { path: string; name: string }[]> = ref(null);
const isWithinFirstViewport = ref(true);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
function handleScroll() {
  isWithinFirstViewport.value = window.scrollY < 0.7 * window.innerHeight;
}

function handleMouseOver(routeIndex: number) {
  hoveredRouteSubmenus.value = navRoutes[routeIndex].submenus || null;
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10; /* Ensures header is above other content */
  width: 100vw;
  height: var(--nav-height);

  text-align: center;
  i,
  .icon {
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
    gap: var(--s-spacing);
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

  box-shadow:
    /* Bottom shadow */
    5px 5px 10px rgba(0, 0, 0, 0.2),
    /* Left shadow */ -5px 5px 10px rgba(0, 0, 0, 0.1),
    /* Right shadow */ 5px 0px 10px rgba(0, 0, 0, 0.1);
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

.hidden {
  opacity: 0;
}

.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 0.2s;
  height: 230px;
}
.fadeHeight-enter-from,
.fadeHeight-leave-to {
  opacity: 0;
  height: 0px;
}
</style>
