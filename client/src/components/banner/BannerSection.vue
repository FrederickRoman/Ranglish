<template>
  <v-parallax
    dark
    src="@/assets/img/hero-banner.png"
    id="v-parallax_fallback-bg"
  >
    <DemoSection />
  </v-parallax>
</template>

<script>
/**
 * Show banner with slight parallax effect
 */
import DemoSection from "./demo/DemoSection";

export default {
  name: "BannerSection",
  components: {
    DemoSection,
  },
};
</script>


<style lang="scss" scoped>
@use "@/styles/colors/_colors.scss";

$fallback-img-solid-color: colors.$primary-color;
$fallback-linear-gradient: linear-gradient(
  to bottom,
  colors.$anchor-color 0%,
  colors.$primary-color 50%,
  colors.$background-color 90%,
  colors.$background-color 100%
);
#v-parallax_fallback-bg {
  background: $fallback-img-solid-color $fallback-linear-gradient;
}
</style> 
