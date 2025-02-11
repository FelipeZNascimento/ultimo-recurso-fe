<template>
  <div class="parallax-container">
    <Parallaxy
      class="parallax"
      :speed="200"
      direction="opposite"
      :animation="(delta: number) => `transform: translate3d(0, -${delta}px, 0);`"
    >
      <img
        src="https://cdn.unenvironment.org/2021-06/Youth_Forum_5_UNDP-Cambodia-2020-planting-mangroves-9678167596.jpeg"
      />
    </Parallaxy>
  </div>
</template>

<script setup lang="ts">
import Parallaxy from '@lucien144/vue3-parallaxy';
</script>
<style lang="scss" scoped>
.parallax-container {
  display: flex;
  position: absolute;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.parallax {
  width: 100%;
}

img {
  width: 100%;
}
</style>
