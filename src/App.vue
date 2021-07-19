<template>
  <v-app id="app-bg">
    <MainNav />
    <v-main>
      <v-scroll-x-transition mode="out-in" :hide-on-leave="true">
        <router-view />
      </v-scroll-x-transition>
    </v-main>
  </v-app>
</template>

<script>
import MainNav from "./components/nav/MainNav";
// import HeroBanner from "./components/banner/HeroBanner";
// import Home from "./pages/Home";

export default {
  name: "App",
  components: { MainNav },
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

<style lang="scss" scoped>
@use '@/styles/colors/_colors.scss';

#app-bg {
  background: colors.$background-color;
}
</style>