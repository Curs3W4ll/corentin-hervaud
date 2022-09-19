<template>
  <div class="nobg backgroundContainer">
    <ParticlesBg :color="color" type="cobweb" :bg=true />
  </div>
</template>

<script>
import store from "@/store";

import { ParticlesBg } from "particles-bg-vue";

export default {
  computed: {
    color() {
      return store.state.useDarkTheme ? "#efefef" : "#333333";
    },
  },
  components: {
    ParticlesBg,
  },
};
</script>

<style scoped>
.backgroundContainer {
  position: fixed;
  /* opacity: 0.2; */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>
