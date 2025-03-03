<template>
  <div class="home-text-box">
    <h1>Direito como principal ferramenta para um mundo mais justo e sustentável</h1>
    <h2>
      Conhece a primeira associação portuguesa que utiliza o Direito como ferramenta de
      responsabilização dos principais infratores da crise climática do país.
    </h2>
  </div>
</template>
<style lang="scss" scoped>
.home-text-box {
  h2 {
    padding-top: var(--xl-spacing);
  }

  h1,
  h2 {
    display: block;
    position: relative;
    overflow: hidden;
    color: var(--color-text);
    line-height: 1.2;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(-101%);
      animation: a-ltr-after 1s cubic-bezier(0.77, 0, 0.18, 1) forwards;
      background: var(--ur-c-green);
      width: 100%;
      height: 100%;
      content: '';
    }

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(0);
      animation: a-ltr-before 1s cubic-bezier(0.77, 0, 0.18, 1) forwards;
      background: var(--bg-color);
      width: 100%;
      height: 100%;
      content: '';
    }
  }

  h1::before,
  h1::after {
    animation-delay: 0.5s;
  }
  h2::before,
  h2::after {
    animation-delay: 1s;
  }
}

@keyframes a-ltr-after {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes a-ltr-before {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200%);
  }
}
</style>
