<template>
  <TheNavigation class="topping" />
  <TheSocialLinks class="topping" />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
import TheSocialLinks from "@/components/TheSocialLinks.vue";

export default {
  components: {
    TheNavigation,
    TheSocialLinks,
  },
};
</script>

<style scoped>
.container {
  margin: 20px;
  z-index: 0;
}
.topping {
  z-index: 3;
}
</style>
