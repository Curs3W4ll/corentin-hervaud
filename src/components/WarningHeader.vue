<template>
  <div class="warningContainer" ref="warningHeader">
    <BaseIcon class="warningIcon" id="warningIcon" name="Warning" :size=40><WarningIcon /></BaseIcon>
    <p class="warningText">
      This website is currently in development, it may cause some unexpected behaviors
    </p>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";
import WarningIcon from "@/components/icons/WarningIcon.vue";

export default {
  components: {
    BaseIcon,
    WarningIcon,
  },
  methods: {
    getHeight() {
      return this.$refs.warningHeader.offsetHeight;
    },
  },
};
</script>

<style scoped>
.warningContainer {
  background: orange;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  padding-top: 10px;
  padding-bottom: 10px;
  fill: black;
}
.warningText {
  padding: 0;
  margin: 0;
  align-self: center;
  font-size: 20px;
  font-weight: bold;
  color: black;
}
.warningIcon {
  padding: 0;
  margin: 0;
  margin-right: 20px;
  margin-left: 20px;
}
</style>
