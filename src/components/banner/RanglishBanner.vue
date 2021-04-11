<template>
  <v-parallax
    dark
    src="@/assets/img/hero-banner.png"
    id="v-parallax_fallback-bg"
  >
    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center" id="ranglish_text-container">
        <h1 class="display-1 font-weight-thin mb-4" v-text="ranglish.writting">
          Ranglish
        </h1>
        <h1
          class="display-1 font-weight-thin mb-4"
          v-text="ranglish.pronunciation"
        >
          /ɹæŋ ɡlɪʃ/
        </h1>
        <v-btn dark color="secondary" @click="generate">Generate</v-btn>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import ranglishGenerator from "@/services/wordGeneration/wordGenerator.js";

export default {
  name: "MainNav",
  components: {
    // HeroBanner,
  },
  data: () => ({
    ranglish: {
      writting: "Ranglish",
      pronunciation: "/ɹæŋ ɡlɪʃ/",
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
      const { writting, pronunciation } = ranglishGenerator.getNext();
      this.ranglish = { writting, pronunciation };
    },
  },
};
</script>

<style  scoped>
#ranglish_text-container {
  background: rgba(1, 1, 1, 0.3);
  max-width: 500px;
}

#v-parallax_fallback-bg {
  background: #ffdab9
    linear-gradient(to bottom, #a0522d 0%, #ffdab9 50%, #fff 90%, #fff 100%);
}
</style>
