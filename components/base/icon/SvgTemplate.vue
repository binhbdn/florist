<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="iconSize"
    :height="iconSize"
    fill="currentColor"
    :viewBox="'0 0 ' + defaultWidthHeight + ' ' + defaultWidthHeight"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    iconSize: {
      type: [String, Number],
      default: 18,
    },
  },

  data() {
    return {
      defaultWidthHeight: 18,
    };
  },
};
</script>
