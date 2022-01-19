<template>
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
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    ranglish: {
      writting: "",
      pronunciation: "",
    },
  }),
  computed: {
    ...mapGetters(["initWord", "word"]),
  },
  created() {
    this.ranglish = this.initWord;
  },
  methods: {
    ...mapActions({ fetchWord: "FETCH_WORD" }),
    async generate() {
      try {
        await this.fetchWord();
        this.ranglish = this.word;
      } catch (error) {
        console.log(error);
        this.ranglish = this.initWord;
      }
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