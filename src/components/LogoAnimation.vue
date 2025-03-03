<template>
  <div class="logo-animated-container">
    <div class="layer ultimo"></div>
    <div class="layer recurso"></div>
    <div class="layer dash"></div>
  </div>
</template>
<style lang="scss" scoped>
.logo-animated-container {
  position: relative;
  border-radius: 10px;
  height: 100vh;
}

.layer {
  position: absolute;
  opacity: 0;
  animation: slideFromLeft 1s ease-out forwards;
  background-size: contain;
  background-repeat: no-repeat;

  width: 100%;
  height: 166px;
}

.ultimo {
  z-index: 1;
  animation: slideFromTop 1s ease-out forwards;
  animation-delay: 0s;
  background-image: url('@/assets/logo-animation-1.png');
}

.recurso {
  z-index: 2;
  animation: slideFromTop 1s ease-out forwards;
  animation-delay: 0.5s;
  background-image: url('@/assets/logo-animation-2.png');

  &:hover + .dash {
    animation-delay: 0s;
    transition: all 1s;
    margin-top: 20%;
  }
}

.dash {
  z-index: 3;
  animation: slideFromLeft 0.5s ease-out forwards;
  animation-delay: 1s;
  transition: all 1s;
  background-image: url('@/assets/logo-animation-3.png');

  &:hover {
    animation-delay: 0s;
    transition: all 1s;
    margin-top: 20%;
  }
}

@keyframes slideFromTop {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
  }
}
@keyframes slideFromLeft {
  from {
    transform: translate(-200%, -50%);
    opacity: 0;
  }
  to {
    top: 50%;
    transform: translate(0, -50%);
    opacity: 1;
  }
}
@keyframes slideToLeft {
  from {
    transform: translate(0, -50%);
    opacity: 1;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 0;
  }
}
</style>
