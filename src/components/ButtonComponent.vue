<template>
  <button :class="{ money: theme === 'money' }">
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
type TTheme = 'money' | 'regular';

const props = defineProps<{
  text: string;
  theme: TTheme;
}>();
</script>
<style lang="scss" scoped>
button {
  all: unset;
  transition: var(--transition-time);

  cursor: pointer;
  margin-left: var(--l-spacing);
  // border-radius: 12px;
  background-color: var(--ur-c-black);
  padding: var(--s-spacing);
  width: 140px;
  height: 32px;
  color: var(--ur-c-white);
  font-size: 16px;

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
</style>
