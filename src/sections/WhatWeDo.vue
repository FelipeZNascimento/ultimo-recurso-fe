<template>
  <section id="what" class="outer-container" :class="isDarkMode ? 'paperback-dark' : 'paperback'">
    <div class="what-we-do">
      <div class="container-cards" ref="whatContainerRef">
        <div class="big-number-card">
          <img src="/src/assets/icon-lawsuit.png" />
          <p class="number">1ª</p>
          <p class="content">Ação de litigância climática em Portugal</p>
        </div>
        <div class="big-number-card">
          <img src="/src/assets/icon-climate.png" />
          <p class="number">12+</p>
          <p class="content">
            Ações judiciais e de policy iniciadas para exigir o cumprimento de obrigações climáticas
          </p>
        </div>
        <div class="big-number-card">
          <img src="/src/assets/icon-people.png" />
          <p class="number">100+</p>
          <p class="content">Voluntários e colaboradores</p>
        </div>
        <div class="big-number-card">
          <img src="/src/assets/icon-vision.png" />
          <p class="number">Uma</p>
          <p class="content">
            Visão transformativa: um sistema legal que proteja o planeta, empodere pessoas e
            entregue justiça climática.
          </p>
        </div>
      </div>
      <div class="container-text-box">
        <div class="struggle-text-box">
          <h1>
            Essa é a luta da nossa geração. Essas são as nossas leis. Essa é a nossa estratégia.
          </h1>
          <span style="padding: 12px 0 24px">
            <ButtonComponent isLarge theme="regular" text="Junta-te a nós" />
          </span>
        </div>
        <div class="content-flex-1" style="text-align: justify">
          <p style="font-size: 24px; padding-bottom: 12px">
            A Último Recurso é a primeira organização de litigância climática liderada por jovens
            estabelecida em Portugal e com atuação internacional.
          </p>
          <!-- <div class="reading">&nbsp;</div> -->
          <p style="font-size: 20px; padding-top: 12px">
            Nós usamos o poder da Lei para fortaceler instituições, exigir responsabilização e
            defender os direitos ambientais diante de falhas sistémicas. Por meio de litigância,
            capacitação jurídica e advocacy político, nós contribuímos para um movimento global que
            vê o Direito não como barreira, mas como força de transformação.
          </p>
        </div>
      </div>
    </div>
    <div class="forest-divider">&nbsp;</div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';
import { onMounted, ref, watch } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { useThemeStore } from '@/stores/ThemeStore';
import TwitterIcon from '@/components/icons/IconTwitter.vue';

const knobValue = ref(0);
const whatContainerRef = ref(null); // Reference to the element
const targetIsVisible = ref(false);
const isDarkMode = ref(false);
const themeStore = useThemeStore();

const knobMax = 100;
let intervalId: number;

onMounted(() => {
  isDarkMode.value = themeStore.getTheme() === 'dark';
});
watch(
  () => themeStore.getTheme(),
  (newTheme) => {
    isDarkMode.value = newTheme === 'dark';
  },
);

const { stop } = useIntersectionObserver(whatContainerRef, ([entry]) => {
  targetIsVisible.value = entry?.isIntersecting || false;
});

watch(targetIsVisible, () => {
  console.log('targetIsVisible: ', targetIsVisible.value);
  if (targetIsVisible.value && knobValue.value < knobMax) {
    intervalId = setInterval(countUp, 10);
  }
});

function countUp() {
  if (knobValue.value < knobMax) {
    return knobValue.value++;
  }

  clearInterval(intervalId);
  stop();
}
</script>
<style lang="scss" scoped>
.outer-container {
  justify-items: center;
  padding: var(--nav-height) 0 0;
  max-width: 100vw;
}

.paperback {
  background-image: url(@/assets/paperback.avif);
  background-position: center;
  background-repeat: repeat;
}

.paperback-dark {
  background-image: url(@/assets/paperback-dark.jpg);
  background-position: center;
  background-repeat: repeat;
}

.what-we-do {
  display: flex;
  flex-direction: column;
  max-width: var(--max-page-width);
}
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  gap: var(--s-spacing);
  padding: var(--l-spacing) 0;
}

.container-text-box {
  @extend .container;
  align-self: center;
  padding-left: var(--xl-spacing);
  max-width: 720px;
}

.container-cards {
  @extend .container;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 10px;

  background-image: url(@/assets/reading.png);
  background-position: bottom;
  background-size: 100% 10px;
  background-repeat: no-repeat;
  padding: 0;
  width: 100%;
}

.content-flex-1 {
  flex: 1;
  align-self: stretch;
}

.big-number-card {
  flex: 1;
  padding-bottom: var(--xl-spacing);
  text-align: center;

  &:hover .number,
  &:hover .content {
    color: var(--color-text);
  }

  img {
    display: none;
    width: 25%;
  }

  .number {
    transition: color 1s;
    height: 80px;
    color: var(--ur-c-grey);
    font-weight: bold;
    font-size: 48px;
  }

  .content {
    transition: color 1s;
    color: var(--ur-c-grey-t3);
    font-size: 18px;
    line-height: 18px;
  }
}

h1 {
  padding: 0;
}

.struggle-text-box {
  @extend .content-flex-1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: var(--xxl-spacing);

  // background-image: url(@/assets/green-stroke.png);
  // background-size: contain;
  // background-repeat: no-repeat;
  // background-position-y: center;

  font-size: 32px;
  text-align: center;

  h1 {
    line-height: 48px;
  }
}

.reading {
  margin: 0;
  background-image: url(@/assets/reading.png);
  background-size: contain;
  background-repeat: repeat-y;
  padding: 0;
  width: 100%;
  height: 10px;
}

.forest-divider {
  margin-top: -40px;
  background-image: url(@/assets/forest-background.png);
  background-size: cover;
  width: 100%;
  height: 500px;
}
</style>
