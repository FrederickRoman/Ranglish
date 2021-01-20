<template>
  <v-app>
    <MainNav />
    <v-main>
      <HeroBanner />
    </v-main>
  </v-app>
</template>

<script>
import MainNav from "./components/nav/MainNav";
import HeroBanner from "./components/banner/HeroBanner";

export default {
  name: "App",
  components: { MainNav, HeroBanner },
  data: () => ({
    // drawer: false,
    // group: null,
  }),
  watch: {
    // group() {
    //   this.drawer = false;
    // },
  },
};
</script>
