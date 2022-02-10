<template>
  <div>
    <BannerSection />
    <RanglishDescriptionSection />
  </div>
</template>

<script>
/**
 * Show Ranglish landing page.
 */
import BannerSection from "../components/banner/BannerSection";
import RanglishDescriptionSection from "../components/content/RanglishDescriptionSection";

export default {
  components: {
    BannerSection,
    RanglishDescriptionSection,
  },
};
</script>