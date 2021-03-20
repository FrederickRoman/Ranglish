<template>
  <v-parallax dark src="@/assets/hero-banner.png">
    <v-row align="center" justify="center">
      <v-col
        class="text-center"
        cols="12"
        :style="{ background: 'rgba(1,1,1,0.3)', maxWidth: '500px' }"
      >
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
