<template>
  <div class="parallax-container" ref="parallaxContainer">
    <img
      :src="useImage()"
      :style="{ transform: `translateY(-${parallaxOffset}px)` }"
      class="parallax-image"
      alt="Parallax Image"
    />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps<{
  imageUrl: string;
}>();
const parallaxOffset = ref(0);
const parallaxContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  if (parallaxContainer.value) {
    const rect = parallaxContainer.value.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Check if the element is in the viewport
    if (rect.top < viewportHeight && rect.bottom > 0) {
      const scrollY = window.scrollY;
      parallaxOffset.value = scrollY * 0.4; // Adjust the multiplier for stronger/weaker effect
    } else {
      parallaxOffset.value = 0; // Reset the offset when the element is out of view
    }
  }
}

function useImage() {
  return new URL(`../assets/${props.imageUrl}`, import.meta.url).href;
}
</script>

<style scoped>
.parallax-container {
  display: flex;
  position: relative;
  justify-content: center;
  height: var(--parallax-height);
  overflow: hidden;
}

.parallax-image {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.1s ease-out; /* Smooth transition for the parallax effect */
  width: 100%;
  height: auto;
}
</style>
