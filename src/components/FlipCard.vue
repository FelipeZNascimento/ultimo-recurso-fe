<template>
  <div class="flip-card" @mouseenter="isFlipped = true" @mouseleave="isFlipped = false">
    <div class="flip-card-inner" :class="{ 'is-flipped': isFlipped }">
      <div class="flip-card-front">
        <slot name="front"></slot>
      </div>
      <div class="flip-card-back">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isFlipped = ref(false);
</script>

<style scoped>
.flip-card {
  perspective: 1000px;
  width: 300px;
  height: 200px;
}

.flip-card-inner {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  width: 100%;
  height: 100%;
  text-align: center;
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  backface-visibility: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.flip-card-front {
  background-color: var(--ur-c-white-t1);
  color: black;
}

.flip-card-back {
  display: flex;
  place-items: center;
  transform: rotateY(180deg);
  background-color: var(--ur-c-green-t3);
  color: white;
}

.is-flipped {
  transform: rotateY(180deg);
}
</style>
