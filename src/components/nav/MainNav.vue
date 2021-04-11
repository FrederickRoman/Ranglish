<template>
  <span>
    <!-- Must have the app property -->
    <v-app-bar app color="primary">
      <v-img
        lazy-src="@/assets/img/logoLazyLoader.svg"
        max-height="40"
        max-width="40"
        src="@/assets/img/logo.svg"
      ></v-img>
      <v-toolbar-title>Ranglish</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        fab
        small
        depressed
        outlined
        color="anchor"
        class="mx-3"
        @click="drawer = !drawer"
      >
        <v-icon dark> mdi-format-list-bulleted-square </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer"
      ><span>About</span></v-navigation-drawer
    >
  </span>
</template>

<script>
export default {
  name: "MainNav",
  components: {
    // HeroBanner,
  },
  data: () => ({
    drawer: false,
    // group: null,
  }),
  watch: {
    // group() {
    //   this.drawer = false;
    // },
  },
};
</script>