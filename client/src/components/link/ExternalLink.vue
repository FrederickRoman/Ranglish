<template>
  <a :href="href" target="_blank" rel="noopener" id="external-link_anchor">
    <slot />
  </a>
</template>

<script>
export default {
  name: "ExternalLink",
  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
</script>