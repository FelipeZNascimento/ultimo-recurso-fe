<template>
  <button :class="{ money: theme === 'money', large: isLarge }">
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
type TTheme = 'money' | 'regular';

const props = defineProps<{
  text: string;
  theme: TTheme;
  isLarge: boolean;
}>();
</script>
<style lang="scss" scoped>
button {
  all: unset;
  transition: var(--transition-time);

  cursor: pointer;
  background-color: var(--button-background);
  padding: var(--s-spacing) 0;
  width: 140px;
  height: 32px;
  color: var(--ur-c-white);
  font-size: 16px;
  text-align: center;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
    background-color: var(--button-hover-background);
    color: var(--ur-c-white);
  }
}

.money {
  background-color: var(--ur-c-yellow);
  color: var(--ur-c-black);
}

.large {
  width: 200px;
  font-size: 20px;
}
</style>
