<template>
  <div class="home-text-box">
    <h1>Utilizamos o Direito para proteger as pessoas, o planeta e as gerações futuras.</h1>
    <h2>
      Acreditamos no poder do Direito para reduzir as emissões de gases com efeito de estufa,
      defender as comunidades mais afetadas, prevenir danos ambientais e proteger os direitos
      humanos.
    </h2>
  </div>
</template>
<style lang="scss" scoped>
.home-text-box {
  h2 {
    padding-top: var(--s-spacing);
  }

  h1,
  h2 {
    display: block;
    position: relative;
    padding-right: 0;
    padding-left: 0;
    overflow: hidden;
    color: var(--color-heading);
    line-height: 1.2;
    text-align: left;
    text-shadow:
      2px 2px 2px #333,
      4px 4px 8px #000;

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
