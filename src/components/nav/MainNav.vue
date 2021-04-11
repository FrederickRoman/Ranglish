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
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Ranglish </v-list-item-title>
          <v-list-item-subtitle> Random fake english word </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
    items: [
      { title: "Settings", icon: "mdi-cog" },
      { title: "About", icon: "mdi-help-box" },
    ],
    right: null,
  }),
  watch: {
    // group() {
    //   this.drawer = false;
    // },
  },
};
</script>