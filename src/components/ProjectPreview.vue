<template>
  <router-link class="projectAnchor" :to="{ name: 'projectDetails', params: { slug: $slugger(project.name) } }">
    <div v-if="project.image" class="projectPreviewImageContainer">
      <img class="projectPreviewImage" :src="`/images/${project.image}`" :alt="project.name" />
    </div>
    <div class="projectPreviewTextContainer" :class="{ projectPreviewHighVisibility: highContrast }">
      <h1>{{ project.name }}</h1>
      <p>{{ project.description }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    highContrast: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.projectAnchor {
  display: flex;
  position: relative;
  background: red;
}
.projectPreviewImage {
  position: relative;
  flex: 1;
  z-index: 1;
  object-fit: cover;
}
.projectPreviewImageContainer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
}
.projectPreviewTextContainer {
  background: #12c9a8dd;
  flex: 1;
  padding: 20px;
  z-index: 2;
}
.projectPreviewTextContainer p {
  padding-left: 15px;
  font-size: 20px;
}
.projectPreviewHighVisibility {
  background: #c25ee8dd;
}
</style>
