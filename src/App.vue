<template>
  <TheNavigation />
  <TheSocialLinks />
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
