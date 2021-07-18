<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>
        <v-row align="center" justify="center">
          <v-col cols="2" class="pr-0">
            <v-img
              lazy-src="@/assets/img/logoLazyLoader.svg"
              max-height="20"
              max-width="20"
              src="@/assets/img/logo.svg"
            />
          </v-col>
          <v-col cols="10" class="pl-0">
            <span class="ranglish_brand-font"> Ranglish</span>
          </v-col>
        </v-row>
      </v-list-item-title>
      <v-list-item-subtitle> Random fake english word </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>


 <style lang="scss" scoped>
@use '@/styles/fonts/_fonts.scss';

.ranglish_brand-font {
  @include fonts.logo_text;
  text-decoration: underline;
}
</style> 