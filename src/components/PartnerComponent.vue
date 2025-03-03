<template>
  <div class="container">
    <div class="shape"><img :src="imageUrl" /></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  imageUrl: string;
}>();
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
}

@media (min-width: 1024px) {
  .container {
    width: 200px;
    height: 200px;
  }
}

.shape {
  display: flex;
  justify-content: center;
  align-items: center;

  transform: rotate(0deg);
  clip-path: circle(50%);
  transition: all 0.5s;
  background-color: var(--ur-c-white);
  width: 100%;
  height: 100%;

  &:hover {
    transform: rotate(360deg);
    clip-path: circle(75%);
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
  }
}

.circle {
  clip-path: circle(50% at 50% 50%);
}
</style>
