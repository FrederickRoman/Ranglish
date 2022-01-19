<template>
  <section>
    <h1 class="d-flex justify-center align-center mx-6 my-6">About</h1>
    <div class="d-lg-flex">
      <div class="">
        <div class="d-flex mx-4 mb-6">
          <h2 class="d-flex justify-center align-center mx-6">
            What is this for?
          </h2>
        </div>
        <div class="ma-10">
          <p>
            Ranglish is English-sounding word generator distributed through its
            public API. Ranglish is an
            <a
              href="https://github.com/FrederickRoman/Ranglish"
              target="_blank"
              rel="noopener"
              >open source project
            </a>
            that was created by
            <a
              href="https://www.frederickroman.com"
              target="_blank"
              rel="noopener"
              >Frederick Roman.
            </a>
          </p>
          <p>
            Admittedly, it might not have many real-words use cases; but it was
            fun to make.
          </p>
        </div>
      </div>
    </div>
    <v-divider class="mb-6" color="primary"></v-divider>
    <div class="d-lg-flex">
      <div class="">
        <div class="d-flex mx-4 mb-6">
          <h2 class="d-flex justify-center align-center mx-6">
            How does it work?
          </h2>
        </div>
        <div class="ma-10">
          <div>
            <p>
              Every syllable (&sigma;) is made of segments that roughly
              correspond the beginning (onset, &omega;), the middle (nucleus, v)
              and the end of syllable (coda, &kappa;). Out of them, only the
              nucleus is obligatory.
            </p>
          </div>
          <figure
            class="d-flex flex-column justify-center align-center mx-6 my-10"
          >
            <v-img
              max-width="300"
              src="@/assets/img/syllable-struct-wiki.svg"
            />
            <figcaption>Source: wikipedia</figcaption>
          </figure>
          <div>
            <p>
              Furthermore, there is a limited set of each kind that allowed in
              English. For instace words in English cannot with a /kn/ sound,
              instead it's just pronounce as /n/.Thus a ranglish is words is
              formed as follows:
            </p>
            <p>
              ranglish word = "Rand(&sigma;) + Rand(&omega;) + Rand(&kappa;)"
            </p>
          </div>
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

 
