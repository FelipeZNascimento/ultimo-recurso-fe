<template>
  <main>
    <section class="welcome-section">
      <div class="bg-overlay">
        <div class="content-container">
          <div><img src="@/assets/full-logo.png" /></div>
          <div>
            <div class="text-box">
              <h1>Direito como principal ferramenta para um mundo mais justo e sustentável</h1>
              <h4>
                Conhece a primeira associação portuguesa que utiliza o Direito como ferramenta de
                responsabilização dos principais infratores da crise climática do país.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <TheWelcome />
    </section>
    <section class="parallax-section">
      <Parallax />
    </section>
    <section>
      <TheWelcome />
    </section>
    <section>
      <TheWelcome />
    </section>
    <section>
      <TheWelcome />
    </section>
    <section>
      <TheWelcome />
    </section>
    <section>
      <TheWelcome />
    </section>
    <section>
      <TheWelcome />
    </section>
    <section>
      <TheWelcome />
    </section>
    <section>
      <TheWelcome />
    </section>
    <section>
      <TheWelcome />
    </section>
  </main>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue';
import Parallax from '@/components/ParallaxComponent.vue';
// import { ref } from 'vue';
// const parallaxSpeed = 0.5;
</script>
<style lang="scss" scoped>
section {
  margin: 0 auto;
  max-width: var(--max-page-width);
}
.welcome-section {
  justify-items: center;
  margin-top: calc(-1 * var(--nav-height));
  background-image: url(@/assets/main.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100vw;
  min-height: 50vh;
}
.bg-overlay {
  display: flex;
  justify-content: center;
  justify-items: center;
  margin-top: calc(-1 * var(--nav-height));
  background-color: var(--ur-c-white-t1);
  padding-top: calc(var(--nav-height) + var(--xl-spacing));
  width: 100vw;
  min-height: 50vh;
}

.content-container {
  display: flex;
  align-items: center;
  gap: 60px;
  width: 100%;
  max-width: var(--max-page-width);

  div {
    text-align: center;
  }
}

.text-box {
  background-color: var(--ur-c-black-t2);
  padding: var(--m-spacing) var(--m-spacing) 0 var(--m-spacing);

  h1 {
    color: white;
    font-weight: bold;
    font-size: 32px;
  }

  h4 {
    margin-top: var(--xl-spacing);
    box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.75);
    background-color: var(--ur-c-green-t3);
    padding: var(--m-spacing);
    color: white;
  }
}

@media (max-width: 1023px) {
  .content-container {
    flex-direction: column;
  }
}

.parallax-section {
  min-height: 200px;
}
</style>
