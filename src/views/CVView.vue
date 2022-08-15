<template>
  <div class="CVContainer">
    <h1 v-if="isLoading">Loading...</h1>
    <br />
    <pdfViewer :class="{ 'hide': isLoading }" class="CVItem" source="cv.pdf" @rendered="handleDocumentRender" />
  </div>
</template>

<script>
import pdfViewer from "vue-pdf-embed";

export default {
  components: {
    pdfViewer,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    funcy() {
      console.log("Call funcy");
    },
    handleDocumentRender() {
      this.isLoading = false;
      console.log("rendered");
    },
  },
};
</script>

<style scoped>
.CVContainer {
  display: flex;
  flex: 1;
  margin: 0 20% 0 20%;
}
.CVItem {
  flex: 1;
}
.hide {
  opacity: 0;
}
</style>
