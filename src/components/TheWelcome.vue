<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
import ToolingIcon from './icons/IconTooling.vue';
import EcosystemIcon from './icons/IconEcosystem.vue';
import CommunityIcon from './icons/IconCommunity.vue';
import SupportIcon from './icons/IconSupport.vue';
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Responsabilidade Climática</template>
    Utilização do Direito para responsabilizar Estados e entidades privadas pela crise climática.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Negociações Climáticas</template>
    Participação jovem, democratização das negociações e influência de políticas públicas.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Energia Limpa</template>
    Investigação e promoção de políticas para uma transição energética justa, com foco em energias
    renováveis.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Combustíveis Fósseis</template>
    Responsabilização climática das grandes petrolíferas e promoção de políticas para o fim dos
    combustíveis fósseis.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Políticas Europeias </template>
    Sensibilização e pressão para a implementação das políticas climáticas e ambientais da União
    Europeia.
  </WelcomeItem>
</template>
