<template>
  <main class="who">
    <h2>Qual é a nossa Missão?</h2>
    <h5>
      A Último Recurso é uma associação com personalidade jurídica, registada em maio de 2021 e
      apresentada ao público no dia 22 de abril de 2022. Movemo-nos pela criação de uma mudança
      sistémica de ponta a ponta: informando, implementando e aplicando a lei, aconselhando os
      decisores políticos sobre políticas e sensibilizando e educando sobre o Direito Climático.
      Assumimos a missão de colocar os instrumentos jurídicos ao serviço da justiça climática e
      social, exigindo a transformação progressiva do atual sistema jurídico para alavancar a
      mudança estrutural necessária para enfrentar a atual crise climática.
    </h5>
    <h2>Cinco Princípios</h2>
    <div class="flip-cards-container">
      <FlipCard>
        <template v-slot:front>
          <img
            src="https://th.bing.com/th/id/OIP.MUsrfk9UWbx7qcGocQgB9wHaHa?w=1380&h=1380&rs=1&pid=ImgDetMain"
          />
        </template>
        <template v-slot:back>
          <h3>
            Aplicação da lei através de ações judiciais contra os responsáveis pela degradação do
            clima
          </h3>
        </template>
      </FlipCard>
      <FlipCard>
        <template v-slot:front>
          <img
            src="https://img.freepik.com/premium-photo/number-2-two-isolated-3d-illustration_812426-46668.jpg"
          />
        </template>
        <template v-slot:back>
          <h3>Apoio categórico às ativistas que dão corpo ao manifesto climático</h3>
        </template>
      </FlipCard>
      <FlipCard>
        <template v-slot:front>
          <img src="https://th.bing.com/th/id/OIP.DkFhXl5_-jEspJwohoTLKgHaHa?rs=1&pid=ImgDetMain" />
        </template>
        <template v-slot:back>
          <h3>Alteração da lei através de trabalho de Policy e campanhas de Advocacy</h3>
        </template>
      </FlipCard>
      <FlipCard>
        <template v-slot:front>
          <img
            src="https://img.freepik.com/premium-photo/creative-vibrant-numerical-number-four-4-design-illustration_732449-7484.jpg"
          />
        </template>
        <template v-slot:back>
          <h3>Desenvolvimento de projetos de apoio às comunidades afetadas pela crise climática</h3>
        </template>
      </FlipCard>
      <FlipCard>
        <template v-slot:front>
          <img src="https://th.bing.com/th/id/OIP.NU9bLYQ_rx4eYUzTACZQowHaHa?rs=1&pid=ImgDetMain" />
        </template>
        <template v-slot:back>
          <h3>Promoção do acesso à informação sobre Direito do Clima e Direitos Humanos</h3>
        </template>
      </FlipCard>
    </div>
  </main>
</template>
<script lang="ts" setup>
import FlipCard from '@/components/FlipCard.vue';
</script>

<style lang="scss" scoped>
.who {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--nav-height);
  width: 100%;
  max-width: var(--max-page-width);
  min-height: 100vh;
}

.flip-cards-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-spacing);
  width: 100%;
  max-width: var(--max-page-width);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
@media (min-width: 1024px) {
  .flip-cards-container {
    flex-direction: row;
  }
}
</style>
