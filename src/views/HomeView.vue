<template>
  <AnimatedBackground />
  <div class="mainContainer">
    <p class="mainText">
      <span class="highViewText">Hello</span>, I'm a student <span class="moreViewText">developper</span> based on Bordeaux, France.
      <br />
      Welcome to my <span class="moreViewText">portfolio</span> !
    </p>
    <p class="title">Corentin<br/>Hervaud<span class="blinker">_</span></p>
  </div>
</template>

<script>
import AnimatedBackground from "@/components/AnimatedBackground.vue";

export default {
  components: {
    AnimatedBackground,
  },
};
</script>

<style scoped>
.mainContainer {
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: space-around;
}
.mainText {
  margin: 0;
  padding: 0;
  margin-top: 10%;
  padding-left: 10%;
  font-size: 30px;
  color: black;
  flex: 1;
}
.title {
  margin: 0;
  padding: 0;
  margin-bottom: 6%;
  font-weight: bold;
  font-size: 150px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.blinker {
  animation: blink 0.5s alternate infinite;
}
@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
