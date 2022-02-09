<template>
  <section>
    <h1 class="d-flex justify-center align-center mx-6 my-6">API</h1>
    <div class="d-lg-flex">
      <div class="">
        <div class="d-flex mx-4 mb-6">
          <h2 class="d-flex justify-center align-center mx-6">
            How to use the API?
          </h2>
        </div>
        <div class="ma-10">
          <p>Call this page's public API with GET /api/word.</p>
          <SyntaxHighlighter :code="API_CALL_JS_CODE"/>
        </div>
      </div>
    </div>
    <v-divider class="mb-6" color="primary"></v-divider>
    <div class="d-lg-flex">
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
  data: () => ({ API_CALL_JS_CODE }),
};
</script>

 <style lang="scss" scoped>
@use "@/styles/fonts/_fonts.scss";

.ranglish_brand-font {
  @include fonts.logo_text;
  text-decoration: underline;
}
</style> 

 
