<template>
  <div class="buttonsContainer">
    <a class="downloadButton" href="/cv.pdf" download="CV_Corentin-Hervaud.pdf">Cliquez ici pour télécharger</a>
  </div>
  <div class="CVContainer">
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
.downloadButton {
  background: #12c9a8;
  border: 3px solid #10836f;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  font-size: 23px;
  cursor: pointer;
}
</style>
