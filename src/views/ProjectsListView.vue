<template>
  <div class="nobg" id="mainProjectsListContainer">
    <div class="nobg projectsListLine" v-for="line in lines" :key="line.id">
      <div class="nobg ProjectPreviewContainer" v-for="project in line.projects" :key="project.id" :style="{ flex: project.flex }">
        <ProjectPreview :project="project.project" :highContrast="project.highContrast" />
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";

import ProjectPreview from "@/components/ProjectPreview.vue";

export default {
  components: {
    ProjectPreview,
  },
  computed: {
    lines() {
      const columnNumber = 2;

      let lineId = 0;
      let lines = [
        {
          id: lineId,
          projects: [],
        },
      ];
      lineId++;

      let projectId = 0;
      for (let projectContent of sourceData.projects) {
        let project = {};
        if (lines.slice(-1)[0].projects.length >= columnNumber) {
          lines.push({ id: lineId, projects: [] });
          lineId++;
        }
        project.project = projectContent;
        project.id = projectId;
        projectId++;
        project.flex = Math.random() * 2 + 1;
        project.highContrast = (parseInt(Math.random() * 3 + 1) === 1);
        lines.slice(-1)[0].projects.push(project);
      }

      return lines;
    },
  },
};
</script>

<style scoped>
#mainProjectsListContainer {
  padding-top: 3%;
  padding-bottom: 3%;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 10% 0 10%;
}
.projectsListLine {
  position: relative;
  display: flex;
  height: 300px;
  margin-bottom: 50px;
}
.ProjectPreviewContainer {
  position: relative;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex: 1;
  overflow: hidden;
  border-radius: 20px;
}
.contactColumn {
  margin: 3%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.contactItem {
  margin-bottom: 20%;
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>
