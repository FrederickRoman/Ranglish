<template>
  <v-app id="app-bg">
    <MainNav />
    <v-main>
      <v-scroll-x-transition mode="out-in" :hide-on-leave="true">
        <router-view />
      </v-scroll-x-transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import MainNav from "./components/nav/MainNav";
import Footer from "./components/footer/Footer";
export default {
  name: "App",
  components: { MainNav, Footer },
};
</script>

<style lang="scss" scoped>
@use "@/styles/colors/_colors.scss";
#app-bg {
  background: colors.$background-color;
}
</style>