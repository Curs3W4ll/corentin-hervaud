<template>
  <AnimatedBackground />
  <div class="mainContainer">
    <div class="textContainer">
      <p class="mainText">
        <span class="highViewText">Hello</span>, I'm a student <span class="moreViewText">developper</span> based on Bordeaux, France.
        <br />
        Welcome to my <span class="moreViewText">portfolio</span> !
      </p>
      <p class="title">Corentin<br/>Hervaud<span class="blinker">_</span></p>
    </div>
    <div class="buttonsContainer">
      <router-link :to="{ name: 'cv' }">
        <button class="cvButton">Consultez mon CV</button>
      </router-link>
      <router-link :to="{ name: 'projectsList' }">
        <button class="projectsButton">Découvrir mes projets</button>
      </router-link>
    </div>
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
  flex-direction: column;
}
.textContainer {
  flex: 3;
  display: flex;
  justify-content: space-around;
}
.buttonsContainer {
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: space-around;
  margin-left: 25%;
}
.cvButton, .projectsButton {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  font-size: 23px;
  cursor: pointer;
}
.cvButton {
  background: #c25ee8;
  border: 3px solid #8435a2;
}
.projectsButton {
  background: #12c9a8;
  border: 3px solid #10836f;
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
