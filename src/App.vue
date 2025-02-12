<template>
  <HeaderSection />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderSection from '@/sections/HeaderSection.vue';
</script>

<style lang="scss" scoped></style>
