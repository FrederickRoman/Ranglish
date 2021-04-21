<template>
  <v-row align="center" justify="center">
    <v-col cols="12" class="text-center" id="ranglish_text-container">
      <h1 class="display-1 font-weight-thin mb-4">
        {{ ranglish.writting }}
      </h1>
      <h1 class="display-1 font-weight-thin mb-4">
        {{ ranglish.pronunciation }}
      </h1>
      <v-btn dark color="secondary" @click="generate">Generate</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import ranglishGenerator from "@/services/wordGeneration/wordGenerator.js";

export default {
  data: () => ({
    ranglish: {
      writting: "Ranglish",
      pronunciation: "/ɹæŋ ɡlɪʃ/",
    },
  }),
  methods: {
    generate() {
      const { writting, pronunciation } = ranglishGenerator.getNext();
      this.ranglish = { writting, pronunciation };
    },
  },
};
</script>

<style lang="scss" scoped>
#ranglish_text-container {
  background: rgba(1, 1, 1, 0.3);
  max-width: 500px;
}
</style> 