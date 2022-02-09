<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      <ExternalLink href="https://frederickroman.com">
        <strong> &copy; Frederick Roman </strong> {{ currentYear }}
      </ExternalLink>
    </v-col>
  </v-footer>
</template>

<script>
import ExternalLink from "@/components/link/ExternalLink";

const DEFAULT_YEAR = 2022;
export default {
  name: "Footer",
  components: { ExternalLink },
  data: () => ({ currentYear: DEFAULT_YEAR }),
  created() {
    this.currentYear = new Date().getFullYear();
  },
};
</script>

