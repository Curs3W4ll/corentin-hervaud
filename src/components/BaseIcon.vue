<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size ? size : width"
    :height="size ? size : height"
    :viewBox="`0 0 ${viewSize ? viewSize : viewWidth} ${viewSize ? viewSize : viewHeight}`"
    :aria-labelledby="name"
    role="presentation"
  >
    <title
      :id="name"
      lang="en"
    >{{ name }} icon</title>
    <g>
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
      default: "icon"
    },
    size: {
      type: Number,
      required: false,
      default: null,
    },
    width: {
      type: Number,
      required: false,
      default: 18,
    },
    height: {
      type: Number,
      required: false,
      default: 18,
    },
    viewSize: {
      type: Number,
      required: false,
      default: 100,
    },
    viewWidth: {
      type: Number,
      required: false,
      default: 100,
    },
    viewHeight: {
      type: Number,
      required: false,
      default: 100,
    },
  },
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>
