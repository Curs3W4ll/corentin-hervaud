<template>
  <div class="linksContainer">
    <SocialLink v-for="link in links" :key="link.name" :link="link" />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import SocialLink from "@/components/SocialLink.vue";

export default {
  components: {
    SocialLink,
  },
  data() {
    return {
      links: sourceData.socialLinks,
    };
  },
};
</script>

<style scoped>
.linksContainer {
  position: fixed;
  padding: 15px;
  bottom: 0;
  left: 0;
  margin: 0;
}
</style>
