<template>
  <section>
    <h1 class="d-flex justify-center align-center mx-6 my-6">API</h1>
    <div class="d-lg-flex justify-center align-center">
      <div class="">
        <div class="d-flex mx-4 mb-6">
          <h2 class="d-flex justify-center align-center mx-6">
            How to use the API?
          </h2>
        </div>
        <div class="ma-10">
          <p>Call this page's public API with GET /api/word.</p>
          <div class="flex-column justify-center align-center">
            <SyntaxHighlighter :code="apiCallJsCode" />
            <div class="d-flex justify-center align-center">
              <v-btn dark color="secondary" @click="callApi">Run</v-btn>
            </div>
            <SyntaxHighlighter
              v-if="resStatus === 'success'"
              :code="apiResponse"
              :disabled="true"
            />
            <div v-else-if="resStatus === 'error'">
              <p>Oop! something went wrong</p>
              <p>Please refresh and/or come back later.</p>
            </div>
            <div v-else>Press <code>Run</code> to see API response</div>
          </div>
        </div>
      </div>
    </div>
    <v-divider class="mb-6" color="primary"></v-divider>
    <div class="d-lg-flex justify-center align-center">
      <div class="">
        <div class="d-flex mx-4 mb-6">
          <h2 class="d-flex justify-center align-center mx-6">
            Do I need authentification?
          </h2>
        </div>
        <div class="ma-10">
          <div>
            <p>No. Just call the API.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SyntaxHighlighter from "@/components/code/SyntaxHighlighter";

const API_CALL_JS_CODE =
  `fetch('https://ranglish.herokuapp.com/api/word')` +
  "\n" +
  ".then(response => response.json())" +
  "\n" +
  ".then(json => console.log(json))";

export default {
  name: "API",
  components: { SyntaxHighlighter },
  data: () => ({
    apiResponse: null,
    resStatus: "", //= "success" | "error" | ""
  }),
  computed: {
    ...mapGetters(["initWord", "word"]),
  },
  watch: {
    word: {
      deep: true,
      immediate: true,
      handler(currentWord) {
        this.apiResponse = currentWord;
        console.log("word changed");
      },
    },
  },
  created() {
    this.apiCallJsCode = API_CALL_JS_CODE;
  },
  methods: {
    ...mapActions({ fetchWord: "FETCH_WORD" }),
    async callApi() {
      try {
        await this.fetchWord();
        this.resStatus = "success";
      } catch (error) {
        this.resStatus = "error";
        console.log(error);
      }
    },
  },
};
</script>

 <style lang="scss" scoped>
@use "@/styles/fonts/_fonts.scss";

.ranglish_brand-font {
  @include fonts.logo_text;
  text-decoration: underline;
}
</style> 

 
