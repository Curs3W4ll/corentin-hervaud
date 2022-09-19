<template>
  <div class="nobg buttonsContainer">
    <a class="highViewButton" href="/cv.pdf" download="CV_Corentin-Hervaud.pdf">Cliquez ici pour télécharger</a>
  </div>
  <div class="nobg CVContainer">
    <img class="CVItem" src="/images/cv.png" alt="CV" />
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.CVContainer {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 20% 0 20%;
}
.CVItem {
  margin: 5%;
  flex: 1;
}
.hide {
  opacity: 0;
}
.buttonsContainer {
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 25px;
  margin-left: 20%;
  margin-right: 20%;
}
</style>
