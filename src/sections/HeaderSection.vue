<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          <img v-if="isDarkTheme" class="logo" src="@/assets/logo-dark.png" />
          <img v-else class="logo" src="@/assets/logo-light.png" />
        </RouterLink>
        <RouterLink to="/quem">Home</RouterLink>
        <RouterLink to="/oque">About</RouterLink>
        <RouterLink to="/nosso-trabalho">Nosso Trabalho</RouterLink>
        <!-- <button @click="toggleTheme">Theme</button> -->
        <ButtonComponent theme="regular" text="Junta-te" />
        <ButtonComponent theme="money" text="Faz uma doação" />
        <a @click="toggleTheme"><DarkModeIcon /></a>
      </nav>
      <div class="social-media">
        <a href="#"><TwitterIcon /></a>
        <a href="#"><InstagramIcon /></a>
        <a href="#"><YouTubeIcon /></a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { useThemeStore } from '@/stores/ThemeStore';
import { ref, watch, onMounted } from 'vue';
import DarkModeIcon from '@/components/icons/IconDarkMode.vue';
import TwitterIcon from '@/components/icons/IconTwitter.vue';
import InstagramIcon from '@/components/icons/IconInstagram.vue';
import YouTubeIcon from '@/components/icons/IconYouTube.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

const isDarkTheme = ref(false);
const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initialize();
  isDarkTheme.value = themeStore.getTheme() === 'dark';
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
</script>

<style lang="scss" scoped>
header {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: var(--l-spacing);
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
    align-items: center;
    gap: var(--s-spacing);
    margin-top: calc(-1 * var(--xs-spacing));
    border-bottom-right-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
    background-color: var(--color-background);
    padding: 0 var(--l-spacing);
    min-height: 40px;
    color: var(--navigation-anchor-color);

    a {
      display: flex;
      padding: 0 var(--s-spacing);
    }
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--nav-height);
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--color-border);
  border-radius: 12px;
  background-color: var(--color-background);
  padding: var(--s-spacing);
  font-size: 20px;
  text-align: center;

  a {
    display: inline-block;
    cursor: pointer;
    padding: 0 1rem;
    color: var(--navigation-anchor-color);

    &:hover {
      background-color: inherit;
      color: var(--navigation-anchor-color-hover);
    }
  }

  img {
    height: calc(var(--nav-height) - 10px);
  }
}

nav a.router-link-exact-active {
  color: var(--ur-c-green);
  font-weight: 600;

  &:hover {
    background-color: inherit;
    color: var(--navigation-anchor-color-hover);
  }
}
</style>
