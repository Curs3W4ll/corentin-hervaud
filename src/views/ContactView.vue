<template>
  <AnimatedBackground />
  <div class="nobg" id="mainContactsContainer">
    <div class="nobg contactColumn" v-for="column in columns" :key="column.id">
      <ContactItem class="contactItem" v-for="item in column.items" :key="item.id" :title="item.name" :value="item.value" :link="item.link" />
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";

import ContactItem from "@/components/ContactItem.vue";
import AnimatedBackground from "@/components/AnimatedBackground.vue";

export default {
  computed: {
    columns() {
      const columnNumber = 2;
      let columns = [];

      for (let colId = 0; colId < columnNumber; colId++) {
        columns.push({ id: colId, items: [] });
      }

      let colId = 0;
      for (let contact of sourceData.contacts) {
        contact.id = columns[colId].items.length;
        columns[colId].items.push(contact);
        colId++;
        if (colId >= columnNumber) colId = 0;
      }

      return columns;
    },
  },
  components: {
    ContactItem,
    AnimatedBackground,
  },
};
</script>

<style scoped>
#mainContactsContainer {
  display: flex;
  flex: 1;
  margin: 10% 15% 0 15%;
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
