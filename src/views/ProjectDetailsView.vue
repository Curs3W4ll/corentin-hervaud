<template>
  <div class="projectDetailsMainContainer">
    <h1>{{ project.name }}</h1>
    <h3 v-if="loading">Loading...</h3>
    <div v-html="content" />
  </div>
</template>

<script>
import sourceData from "@/data.json";

import 'highlight.js/styles/night-owl.css';

export default {
  data() {
    return {
      project: {},
      content: "",
      loading: true,
    };
  },
  created() {
    this.project = sourceData.projects.find((item) => this.$slugger(item.name) === this.$slugger(this.$route.params.slug));

    const md =
      require("markdown-it")()
      .use(require("markdown-it-highlightjs"));
    import("@/" + this.project.contentFile).then(response => this.content = md.render(response.default)).catch(error => alert("Error: " + error));

    this.loading = false;
  },
};
</script>

<style scoped>
.projectDetailsMainContainer {
  padding-bottom: 3%;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
}
.projectDetailsMainContainer h1 {
  margin-top: 0;
  margin-bottom: 0;
  flex: 1;
  align-self: center;
  font-size: 75px;
}
.projectDetailsMainContainer p {
  flex: 1;
  padding-left: 120px;
}
</style>
