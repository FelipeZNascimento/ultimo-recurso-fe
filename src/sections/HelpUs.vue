<template>
  <section id="help" class="outer">
    <PrimeCard style="width: 25rem; overflow: hidden">
      <template #header>
        <div class="img-outer">
          <img
            alt="user header"
            src="https://images.unsplash.com/photo-1619476402491-9dee65ce061c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </template>
      <template #title>Advanced Card</template>
      <template #subtitle>Card subtitle</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
          repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
          ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Cancel" severity="secondary" outlined class="w-full" />
          <Button label="Save" class="w-full" />
        </div>
      </template>
    </PrimeCard>
    <PrimeCard style="width: 25rem; overflow: hidden">
      <template #header>
        <div class="img-outer">
          <img
            alt="user header"
            src="https://images.unsplash.com/photo-1549608276-5786777e6587?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </template>
      <template #title>Advanced Card</template>
      <template #subtitle>Card subtitle</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
          repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
          ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Cancel" severity="secondary" outlined class="w-full" />
          <Button label="Save" class="w-full" />
        </div>
      </template>
    </PrimeCard>
  </section>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
section {
  justify-items: center;
  background-color: var(--ur-c-dark-green);
  padding: var(--nav-height) 0 0;
  max-width: 100vw;
  // height: 500px;
  color: white;
}

.outer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--xl-spacing);
}

.img-outer {
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
