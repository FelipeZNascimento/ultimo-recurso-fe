<template>
  <LandingSection />
  <WhatWeDo />
  <HelpUs />
  <!-- <Parallax imageUrl="divider-image-1.jpg" /> -->
  <!-- <span id="parceiros" ref="targetElement">&nbsp;</span> -->
  <!-- <transition name="fade" appear>
    <PartnersSection v-if="isInViewport" />
  </transition> -->
  <!-- <FooterSection /> -->
</template>

<script setup lang="ts">
// import Parallax from '@/components/ParallaxComponent.vue';
import LandingSection from '@/sections/LandingSection.vue';
import WhatWeDo from '@/sections/WhatWeDo.vue';
import HelpUs from '@/sections/HelpUs.vue';
// import FooterSection from '@/sections/FooterSection.vue';
import { defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue';

const targetElement = ref(null); // Reference to the element
const isInViewport = ref(false); // State to track visibility
const observerCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    isInViewport.value = entry.isIntersecting; // Update state
    if (observer && targetElement.value && entry.isIntersecting) {
      observer.unobserve(targetElement.value);
      observer.disconnect();
    }
  });
};

const PartnersSection = defineAsyncComponent(() => import('@/sections/PartnersSection.vue'));
let observer: IntersectionObserver | null = null;

onMounted(() => {
  // Create the Intersection Observer
  observer = new IntersectionObserver(observerCallback, {
    root: null, // Use the viewport as the root
    threshold: 1, // Trigger when 100% of the element is visible
  });

  // Start observing the target element
  if (targetElement.value) {
    observer.observe(targetElement.value);
  }
});

onUnmounted(() => {
  // Clean up the observer
  if (observer && targetElement.value) {
    observer.unobserve(targetElement.value);
    observer.disconnect();
  }
});
</script>
<style lang="scss" scoped>
#parceiros,
#what {
  scroll-margin-top: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
  max-height: 1000px;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0px;
}
</style>
