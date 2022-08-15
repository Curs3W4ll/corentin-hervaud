<template>
  <div class="backgroundContainer">
    <ParticlesBg color="white" type="cobweb" bg=true />
  </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";

export default {
  components: {
    ParticlesBg,
  },
};
</script>

<style scoped>
.backgroundContainer {
  position: absolute;
  opacity: 0.2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}
</style>
