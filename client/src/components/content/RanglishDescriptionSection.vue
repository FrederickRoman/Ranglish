<template >
  <section>
    <div class="d-lg-flex">
      <div class="mx-4">
        <div class="d-flex mx-4 mb-6">
          <h1
            class="d-flex justify-center align-center mx-4 ranglish_brand-font"
          >
            Ranglish
          </h1>
          <h4 class="d-flex justify-center align-center subheading mx-4">
            Random English-sounding word generator.
          </h4>
        </div>
        <div class="ma-6">
          <p>
            Do need a new made-up word, but you want to make sure is
            pronounceable?
          </p>
          <p>
            Ranglish is here to help. Just press generate, and you will get a
            made-up word that follows the rules of English pronunciation.
          </p>
        </div>
      </div>
      <v-divider class="mb-6" color="primary"></v-divider>
      <div class="">
        <div class="d-flex mx-4 mb-6">
          <h2 class="d-flex justify-center align-center mx-6">Custom Lists</h2>
        </div>
        <div class="ma-10">
          <p>Get unlimited custom lists for free by:</p>
          <ul>
            <li>Using the generate button on this page</li>
            <li>Call this page's public API with GET /api/word.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="d-lg-flex">
      <div class="">
        <div class="d-flex mx-4 mb-6">
          <h2 class="d-flex justify-center align-center mx-6">
            How does it work?
          </h2>
        </div>
        <div class="ma-10">
          <p>
            Every syllable is made of segments that roughly correspond the
            beginning, the middle and the end of syllable.
          </p>
          <p>
            Ranglish simply choose one those possible segments at random.
            <router-link to="/about"> See more</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

 <style lang="scss" scoped>
@use "@/styles/fonts/_fonts.scss";

.ranglish_brand-font {
  @include fonts.logo_text;
  text-decoration: underline;
}
</style> 
