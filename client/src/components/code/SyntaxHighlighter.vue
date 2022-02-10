<template>
  <v-card>
    <pre class="language-js"><code>{{code}}</code></pre>
  </v-card>
</template>

<script>
/**
 * Shows code text that has been syntax highlighted
 */
import Prism from "prismjs";

export default {
  name: "SyntaxHighlighter",
  props: {
    code: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (!this.disabled) Prism.highlightAll();
  },
};
</script>

<style lang="scss" scoped>
@import "~prismjs/themes/prism-okaidia.css";
</style>

