<template>
  <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer">
    <h3 class="title">{{ title.toUpperCase() }}</h3>
    <p class="text">{{ value }}</p>
  </a>
  <span v-else>
    <h3 class="title">{{ title.toUpperCase() }}</h3>
    <p class="text">{{ value }}</p>
  </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
.title {
  margin: 0;
  margin-bottom: 15px;
  font-weight: normal;
  opacity: 0.6
}
.text {
  display: flex;
  flex: none;
  margin: 0;
  padding-left: 20px;
  font-size: 30px;
}
</style>
