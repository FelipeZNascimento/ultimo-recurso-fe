<template>
  <main class="about">
    <h1>-------------------------------------------------------------------------------</h1>
    <h1 style="text-align: center">21/07</h1>
    <p>
      Following a long period without any news or feedback from UR, here are the latest updates
      following instructions given on July 1st:
    </p>
    <ul>
      <li>Completely redone the entire structure of the page:</li>
      <ul>
        <li>
          Even though the example from clientearth.org header section had 2 columns, following
          feedback now UR's header section has only 1 column;
        </li>
        <li>
          Recreated from scratch the "what we do" section with information given on new briefing
          (big numbers and mission);
        </li>
      </ul>
      <li>Removed non-approved sections (such as "partners");</li>
    </ul>
    <p style="margin-top: 16px">
      I've used all instructions from the briefing that were clear enough and matched the previous
      discussions, but no further advancements were possible due to lack of information, lack of
      media (images related to UR that could be part of the landing page's design).
    </p>

    <p style="margin-top: 16px">
      Nevertheless, a clear understanding of what a Landing Page is about is still needed. A landing page (which is what we agreed at this first step) is not a full website. It's not
      supposed to have multiple menu links, or even a map of links at the footer since a landing
      page doesn't have a tree of routes.<br />I'll list below some examples for inspiration on clear and
      concises landing pages:
      <ul>
          <li>
            <a href="https://simpu.co/">https://simpu.co/</a> - there are only 6 links in the
            header, and 3 of them are "anchors" inside the same page (it only scrolls to the correct
            spot)
          </li>
          <li>
            <a href="https://www.kosmik.app/">https://www.kosmik.app/</a> - 5 links in the header.
            The objective is clear and simple.
          </li>
          <li>
            <a href="https://edensapp.com/">https://edensapp.com/</a> - 4 links. Also very clear and
            simple.
          </li>
          <li>
            <a href="https://www.regeneration.enterprises/"
              >https://www.regeneration.enterprises/</a
            >
            - only 3 links. Also very clear and simple.
          </li>
          <li>
            <a href="https://www.terrasetclimate.org/">https://www.terrasetclimate.org/</a> -
            doesn't even have a menu/navigation bar.
          </li>
          <li>
            <a href="https://www.genesis.live/">https://www.genesis.live/</a> - also doesn't have a
            menu/navigation bar.
          </li>
        </ul>
    </p>
    <p style="font-weight: bold; font-size: large; margin-top: 16px;">Still missing:</p>
    <ul>
      <li><b>Language:</b> Some text is in English, some it's in Portuguese. There was no discussions or agreement on having different languages at the Landing Page;</li>
      <li>
        <b>Images</b>: all images currently on the website are placeholders which means they're temporary and were not provided by UR - the only
        exception being UR logo.
      </li>
      <li><b>Webdesign</b>: it was mentioned from the start I could provide the webdevelopment as long as there were design material that could guide and help the development. Up to now, there was none bseides colors and the above mentioned UR logo;</li>
      <li>
        <b>Newsletter</b>: previously it was supposed to be cut. From last feedback, it's supposed to be
        kept. What's the final decision?
      </li>
      <li>A clear objective with fewer (and direct) sections is missing;</li>

    </ul>
    <h1>-------------------------------------------------------------------------------</h1>
    <h1>03/03</h1>
    <ul>
      <li>Reformed and reshaped the home screen to feel as a landing page;</li>
      <li>Anchor routing with Vue router now working;</li>
      <li>Parallax component no longer depends on external package;</li>
      <li>[Desktop] Added animations to home (for UR logo, text and buttons);</li>
      <li>Partners section;</li>
      <li>
        Created new reusable components:
        <ul>
          <li>Home Text Box;</li>
          <li>Logo Animation;</li>
          <li>Partner;</li>
        </ul>
      </li>
      <li>Testing extra components;</li>
    </ul>
    <h1>-------------------------------------------------------------------------------</h1>
    <h1>27/02</h1>
    <ul>
      <li>[Desktop] Improved styling on navigation menu;</li>
      <li>[Mobile] Added mobile view for menu;</li>
      <li>
        Created a new reusable component:
        <ul>
          <li>Flip Card;</li>
        </ul>
      </li>
      <li>
        Created a new section for "Quem" and added Flip Card component there (as an example of how
        it can be used)
      </li>
      <li>General improvement on transitions/animations;</li>
      <li>Added support for heroicons (heroicons.com);</li>
      <li>Refined screen size identifier for desktop/mobile renderings;</li>
      <li>Added .htaccess on server to fix Vue router;</li>
    </ul>
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
  align-items: flex-start;
  width: 100%;
  max-width: var(--max-page-width);
  min-height: 100vh;
}

ul {
  width: 100%;
  text-align: left;
}
</style>
