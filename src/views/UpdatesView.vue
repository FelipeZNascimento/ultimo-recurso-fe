<template>
  <main class="about">
    <h1>-------------------------------------------------------------------------------</h1>
    <h1>12/02</h1>
    <ul>
      <li>[Desktop] Improved styling on navigation menu;</li>
      <li>[Desktop] Improved overral interaction with navigations menu;</li>
      <li>
        [Desktop] Added submenu navigation on mouse hover (still missing paths) - as in
        <a href="https://www.clientearth.org/" target="_blank">ClientEarth</a> website, used as an
        inspiration;
      </li>
      <li>[Desktop] Moved and improved social media icons;</li>
      <li>Added screen size identifier for desktop/mobile renderings;</li>
    </ul>
    <h1>-------------------------------------------------------------------------------</h1>
    <h1>11/02</h1>
    <ul>
      <li>
        Created a Github repository for the FE build:
        <a target="_blank" href="https://www.github.com/FelipeZNascimento/ultimo-recurso-fe"
          >github.com/FelipeZNascimento/ultimo-recurso-fe;</a
        >
      </li>
      <li>
        Built a subdomain for PROD-like testing and deployments:
        <a target="_blank" href="https://ultimorecurso.omegafox.me/">ultimorecurso.omegafox.me/</a>;
      </li>
      <li>Generated boilerplate using Vue3 + Pinia with routing included;</li>
      <li>Added Github workflow for automatic deployment;</li>
      <li>Added support for SCSS;</li>
      <li>Added UR's color palette;</li>
      <li>Imported and edited UR images for initial design tests;</li>
      <li>Created first sketch for navigation menu (with social media linkouts);</li>
      <li>Added support for theming (dark/light);</li>
      <li>
        Created the following reusable components:
        <ul>
          <li>Button;</li>
          <li>Parallax;</li>
          <li>Texbox;</li>
        </ul>
      </li>
    </ul>
  </main>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: var(--max-page-width);
  min-height: 100vh;
}

ul {
  width: 100%;
  text-align: left;
}
</style>
