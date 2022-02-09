<template>
  <v-card>
    <pre class="language-js"><code>{{code}}</code></pre>
  </v-card>
</template>

<script>
import Prism from "prismjs";

export default {
  name: "SyntaxHighlighter",
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style lang="scss" scoped>
@import "~prismjs/themes/prism-okaidia.css";
</style>

