<template>
  <div id="mainDiv" :class="theme" />
  <WarningHeader class="parentContainer topping" :class="theme" ref="warningHeader" />
  <TheNavigation class="parentContainer topping" :class="theme" :margin="warningHeight" ref="navHeader" :key="navContainerKey" />
  <TheSocialLinks class="parentContainer topping" :class="theme" />
  <div class="parentContainer contentContainer" :class="theme" :style="`margin-top: ${headerHeight}px;`" :key="contentContainerKey">
    <router-view />
  </div>
</template>

<script>
import store from "@/store";

import TheNavigation from "@/components/TheNavigation.vue";
import TheSocialLinks from "@/components/TheSocialLinks.vue";
import WarningHeader from "@/components/WarningHeader.vue";

export default {
  data() {
    return {
      navContainerKey: 0,
      contentContainerKey: 0,
      warningHeight: 0,
      headerHeight: 0,
    };
  },
  components: {
    TheNavigation,
    TheSocialLinks,
    WarningHeader,
  },
  mounted() {
    this.warningHeight = this.$refs.warningHeader.getHeight();
    this.navContainerKey += 1;
    this.headerHeight = this.$refs.navHeader.getHeight() + this.warningHeight;
    this.contentContainerKey += 1;
  },
  computed: {
    theme() {
      return store.state.theme;
    },
  },
};
</script>

<style scoped>
.contentContainer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}
.topping {
  z-index: 3;
}
</style>
