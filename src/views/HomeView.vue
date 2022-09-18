<template>
  <AnimatedBackground />
  <div class="nobg mainContainer">
    <div class="nobg textContainer">
      <p class="mainText">
        <span class="highViewText">Bonjour</span>, Je suis <span class="moreViewText">développeur</span> étudiant  sur Bordeaux.
        <br />
        Bienvenue sur mon <span class="moreViewText">portfolio</span> !
      </p>
      <p class="title">Corentin<br/>Hervaud<span class="blinker">_</span></p>
    </div>
    <div class="nobg buttonsContainer">
      <router-link :to="{ name: 'cv' }">
        <button class="highViewButton">Consultez mon CV</button>
      </router-link>
      <router-link :to="{ name: 'projectsList' }">
        <button class="simpleButton">Découvrir mes projets</button>
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
.mainText {
  margin: 0;
  padding: 0;
  margin-top: 10%;
  padding-left: 10%;
  font-size: 30px;
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
