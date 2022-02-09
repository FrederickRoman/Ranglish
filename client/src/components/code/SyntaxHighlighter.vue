<template>
  <v-card>
    <pre class="language-js"><code>{{API_CALL_JS_CODE}}</code></pre>
  </v-card>
</template>

<script>
import Prism from "prismjs";

const API_CALL_JS_CODE =
  `fetch('https://ranglish.herokuapp.com/api/word')` +
  "\n" +
  ".then(response => response.json())" +
  "\n" +
  ".then(json => console.log(json))";

export default {
  name: "SyntaxHighlighter",
  data: () => ({ API_CALL_JS_CODE }),
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style lang="scss" scoped>
@import "~prismjs/themes/prism-okaidia.css";
</style>

