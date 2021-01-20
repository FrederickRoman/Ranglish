<template>
  <div>
    <v-parallax dark src="@/assets/hero-banner.png">
      <v-row align="center" justify="center">
        <v-col
          class="text-center"
          cols="12"
          :style="{ background: 'rgba(1,1,1,0.3)', maxWidth: '500px' }"
        >
          <!-- <h1 class="display-1 font-weight-thin mb-4">Ranglish</h1>
          <h4 class="subheading">Random English-sounding word generator.</h4> -->
          <h1 class="display-1 font-weight-thin mb-4">
            {{ ranglish.writing }}
          </h1>
          <h1 class="display-1 font-weight-thin mb-4">
            {{ ranglish.pronunciation }}
          </h1>
          <v-btn @click="generate">Generate</v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="d-lg-flex">
      <div class="mx-4">
        <div class="d-flex mx-4 mb-6">
          <h1 class="d-flex justify-center align-center mx-4">Ranglish</h1>
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
            made-up word that follows the rules of English pronunciation. How
            so?
          </p>
        </div>
      </div>
      <v-divider class="mb-6"></v-divider>
      <div class="">
        <div class="d-flex mx-4 mb-6">
          <h1 class="d-flex justify-center align-center mx-6">Custom Lists</h1>
          <!-- <h4 class="d-flex justify-center align-center subheading mx-4">
          Random English-sounding word generator.
        </h4> -->
        </div>
        <div class="ma-10">
          <p>Get unlimited custom lists for free.</p>
          <p>
            Customize the number of syllables per word, rule out actual words,
            chnage export format, and more.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ranglishGenerator from "@/services/wordGeneration/wordGenerator.js";

export default {
  name: "MainNav",
  components: {
    // HeroBanner,
  },
  data: () => ({
    drawer: false,
    ranglish: {
      writing: "Ranglish",
      pronunciation: "Ranglish",
    },
    // group: null,
  }),
  watch: {
    // group() {
    //   this.drawer = false;
    // },
  },
  methods: {
    generate() {
      const { writing, pronunciation } = ranglishGenerator.getNext();
      this.ranglish = { writing, pronunciation };
    },
  },
};
</script>