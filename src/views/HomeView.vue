<template>
  <div class="backgroundContainer">
    <particles-bg color="white" type="cobweb" bg=true />
  </div>
  <div class="mainContainer">
    <p class="mainText">
      <span class="highViewText">Bonjour</span>, je suis <span class="moreViewText">developpeur</span> etudiant sur Bordeaux.
      <br />
      Bienvenue sur mon <span class="moreViewText">portfolio</span> !
    </p>
    <h1 class="title">Corentin<br/>Hervaud<span class="blinker">_</span></h1>
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
.mainContainer {
  position: relative;
  z-index: 2;
}
.mainText {
  margin-left: 15%;
  margin-top: 250px;
  font-size: 30px;
  color: black;
}
.title {
  font-weight: bold;
  font-size: 150px;
  float: right;
  margin-right: 15%;
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
.backgroundContainer {
  position: absolute;
  opacity: 0.2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>
