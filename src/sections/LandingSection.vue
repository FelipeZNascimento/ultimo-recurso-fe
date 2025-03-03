<template>
  <section class="landing-section">
    <div class="bg-overlay">
      <div class="home-container">
        <div class="content-left" v-if="!isMobile">
          <LogoAnimation />
        </div>
        <div class="content-right">
          <HomeTextBox />
          <div class="buttons-container">
            <ButtonComponent theme="regular" text="Junta-te" />
            <ButtonComponent class="wiggle" theme="money" text="Faz uma doação" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HomeTextBox from '@/components/HomeTextBox.vue';
import LogoAnimation from '@/components/LogoAnimation.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

import { computed } from 'vue';
import { useDevice, DeviceSize } from '@/utils/mediaQuery';

const device = useDevice();
const isMobile = computed(() => device.size <= DeviceSize.s);
</script>
<style lang="scss" scoped>
.landing-section {
  justify-items: center;
  background-image: url(@/assets/main.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
  max-width: 100vw;
  height: 100vh;
}
.bg-overlay {
  display: flex;
  justify-content: center;
  justify-items: center;
  background-color: var(--ur-c-white-t1);
  width: 100%;
  height: 100%;
}

.home-container {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: var(--max-page-width);

  .content-left,
  .content-right {
    flex: 1;
    align-content: center;
    padding: 0 var(--xl-spacing);
    height: 100vh;
    text-align: center;
  }

  .content-right {
    background-color: var(--color-background-t);
  }
}

.buttons-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--m-spacing);
  padding-top: var(--xl-spacing);
}

.wiggle {
  transform-box: fill-box;
  animation: wigglewiggle 0.5s ease-out forwards;
  animation-delay: 2s;
}

@keyframes wigglewiggle {
  0% {
    transform: scale(1);
    transform-origin: center center;
  }
  33% {
    transform: scale(1.1);
    transform-origin: 70% center;
  }
  66% {
    transform: scale(1.1);
    transform-origin: 30% center;
  }
  100% {
    transform: scale(1);
    transform-origin: center center;
  }
}
</style>
