<template>
  <section>
    <h1>Parceiros</h1>
    <div class="partners-container">
      <a href="" v-for="(item, index) in partners" :key="index">
        <PartnerComponent :imageUrl="item" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import PartnerComponent from '@/components/PartnerComponent.vue';

import { onMounted, ref } from 'vue';

const partners = ref<string[]>([]);
onMounted(() => {
  const images = import.meta.glob('@/assets/partners/*.*');
  for (const image in images) {
    images[image]().then(() => {
      partners.value.push(image);
    });
  }
});
</script>
<style lang="scss" scoped>
.partners-container {
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  gap: var(--m-spacing);
}
</style>
