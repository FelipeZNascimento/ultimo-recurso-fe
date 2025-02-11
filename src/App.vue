<template>
  <Header />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/sections/HeaderSection.vue';
</script>

<style lang="scss" scoped>
</style>
