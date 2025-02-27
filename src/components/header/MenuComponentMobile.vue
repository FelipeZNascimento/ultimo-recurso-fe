<template>
  <header>
    <div class="wrapper">
      <nav class="nav">
        <a v-if="!isMenuOpen" @click="toggleMenu"><Bars4Icon class="icon" /></a>
        <a v-if="isMenuOpen" @click="toggleMenu"><XMarkIcon class="icon" /></a>
        <RouterLink to="/">
          <img v-if="isDarkMode" class="logo" src="@/assets/logo-dark.png" />
          <img v-else class="logo" src="@/assets/logo-light.png" />
        </RouterLink>
        <a @click="toggleTheme">
          <SunIcon v-if="isDarkMode" class="icon" />
          <MoonIcon v-else class="icon" />
        </a>
        <Transition name="fadeHeight" mode="out-in">
          <div v-if="isMenuOpen" class="main-menu">
            <div class="main-menu--top-container">
              <RouterLink
                v-for="(item, index) in routes"
                :key="index"
                :to="item.path"
                @click="() => (isMenuOpen = false)"
              >
                {{ item.name }}
              </RouterLink>
            </div>
            <div class="main-menu--bottom-container">
              <ButtonComponent theme="regular" text="Junta-te" />
              <ButtonComponent theme="money" text="Faz uma doação" />
              <div class="social-media">
                <a href="#"><TwitterIcon /></a>
                <a href="#"><InstagramIcon /></a>
                <a href="#"><YouTubeIcon /></a>
              </div>
            </div>
          </div>
        </Transition>
      </nav>

      <!-- <Transition name="fadeHeight" mode="out-in">
        <div class="sub-menu" v-if="hoveredRouteSubmenus">
          <a v-for="(item, index) in hoveredRouteSubmenus" :key="index">{{ item.name }}</a>
        </div>
      </Transition> -->
    </div>
  </header>
</template>
<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

import TwitterIcon from '@/components/icons/IconTwitter.vue';
import InstagramIcon from '@/components/icons/IconInstagram.vue';
import YouTubeIcon from '@/components/icons/IconYouTube.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { Bars4Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/solid';

import { routes } from '@/router';

defineProps<{
  isDarkMode: boolean;
  toggleTheme: () => void;
}>();

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style lang="scss" scoped>
header {
  position: -webkit-sticky; /* For Safari */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10; /* Ensures header is above other content */
  width: 100%;
  height: var(--nav-height);
  text-align: center;

  .social-media {
    display: flex;
    flex: 1;
    align-items: center;
    gap: var(--l-spacing);
    background-color: var(--color-background);
    color: var(--navigation-anchor-color);

    a {
      flex: 1;
      margin: 0;
    }
  }
}

.wrapper {
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--xl-spacing);
  transition: var(--transition-time);
  background-color: var(--color-background);
  padding: 0 var(--l-spacing);
  width: 100%;
  height: var(--nav-height);
  font-size: 20px;

  // for all icons
  .icon {
    display: flex;
    place-content: center;
    place-items: center;
    width: 32px;
    height: 32px;
    color: var(--color-text);
    text-align: center;
  }

  img {
    height: var(--nav-height);
  }
}

.main-menu {
  display: flex;
  position: absolute;
  top: var(--nav-height);
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--l-spacing);
  border-top: 2px solid var(--ur-c-grey-t1);
  background-color: var(--color-background);
  width: 100vw;
  height: calc(100vh - var(--nav-height));
  font-size: 20px;
  text-align: center;

  &--top-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--xl-spacing);
    padding-top: var(--xl-spacing);

    a {
      cursor: pointer;
      color: var(--navigation-anchor-color);
    }
  }

  &--bottom-container {
    flex: 0;
  }
}

nav a.router-link-exact-active {
  color: var(--ur-c-green);
}

.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 0.2s;
  height: calc(100vh - var(--nav-height));
}
.fadeHeight-enter-from,
.fadeHeight-leave-to {
  opacity: 0;
  height: 0px;
}
</style>
