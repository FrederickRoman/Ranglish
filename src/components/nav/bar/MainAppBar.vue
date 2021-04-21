<template>
  <v-app-bar app color="primary">
    <v-img
      lazy-src="@/assets/img/logoLazyLoader.svg"
      max-height="40"
      max-width="40"
      src="@/assets/img/logo.svg"
    />
    <v-toolbar-title class="ranglish_brand-font">Ranglish </v-toolbar-title>
    <v-spacer />
    <v-btn
      fab
      small
      depressed
      outlined
      color="anchor"
      class="mx-3"
      @click="toggleDrawer"
    >
      <v-icon dark> mdi-format-list-bulleted-square </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      this.$emit("toggle-drawer");
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/styles/fonts/_fonts.scss';

.ranglish_brand-font {
  @include fonts.logo_text;
}
</style>