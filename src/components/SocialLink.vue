<template>
  <div class="linkContainer">
    <a :href="link.link" target="_blank" rel="noopener noreferrer">
      <img class="linkLogo" :src="`/images/${link.image}`" :alt="link.name" :title="link.description" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.linkContainer {
  margin-top: 20px;
}
.linkLogo:hover {
  transform: scale(1.1);
}
.linkLogo {
  width: 40px;
  aspect-ratio: 1/1;
}
</style>
