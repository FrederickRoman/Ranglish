<template>
  <a :href="href" target="_blank" rel="noopener" id="external-link_anchor">
    <slot />
  </a>
</template>

<script>
/**
 * Wraps child components with a anchor tag with safer attrs for external links.
 * @see https://web.dev/external-anchors-use-rel-noopener/
 */
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