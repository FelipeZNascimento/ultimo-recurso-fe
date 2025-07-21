<template>
  <section class="landing-section">
    <div class="bg-overlay">
      <div class="home-container">
        <div class="content">
          <HomeTextBox />
          <div class="buttons-container">
            <ButtonComponent theme="regular" text="Junta-te" />
            <ButtonComponent theme="money" text="Faz uma doação" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HomeTextBox from '@/components/HomeTextBox.vue';
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
  padding: var(--nav-height) 0 0 0;
  max-width: 100vw;
  height: 100vh;
}
.bg-overlay {
  display: flex;
  justify-content: center;
  justify-items: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.3) 80%,
    rgba(0, 0, 0, 0.3) 85%,
    rgba(0, 0, 0, 1) 95%
  );
  padding: var(--xl-spacing);
  width: 100%;
  height: 100%;
}

.home-container {
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  max-width: var(--max-page-width);

  @media (max-width: 1023px) {
    .content {
      width: 80%;
    }
  }
  @media (min-width: 1023px) {
    .content {
      width: 60%;
    }
  }

  .content {
    text-align: center;
  }
}

.buttons-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: var(--xl-spacing);
  padding-top: var(--xl-spacing);
}
</style>
