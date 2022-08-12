<template>
  <div id="nav">
    <div id="logoContainer">
      <span id="logoAround">
        <router-link :to="{ name: 'home' }">
          <BaseIcon name="home" size=35><HomeIcon /></BaseIcon>
        </router-link>
      </span>
    </div>
    <div id="themeSwitcherContainer">
      <ThemeSwitcher id="themeSwitcher" />
    </div>
    <div id="pages">
      <router-link :to="{ name: 'cv' }">CV</router-link>
      <router-link :to="{ name: 'projectsList' }">PROJECTS</router-link>
      <router-link :to="{ name: 'contact' }">CONTACT</router-link>
    </div>
    <span id="navEnd" />
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";

export default {
  components: {
    BaseIcon,
    HomeIcon,
    ThemeSwitcher,
  },
};
</script>

<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  display: flex;
  align-items: center;
}
#navEnd {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  width: 275px;
  z-index: 0;
  border-bottom: 2px solid #88d3c6;
}
#nav a {
  display: inline-block;
  color: black;
  text-decoration: none;
}
#logoContainer {
  height: 60px;
  margin: 10px;
  margin-right: 0;
  z-index: 2;
  aspect-ratio: 1/1;
}
#logoContainer a {
  fill: white;
}
#logoContainer a.router-link-active {
  fill: #12c9a8;
}
#logoAround {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  background: black;
  border-radius: 50%;
}
#themeSwitcherContainer {
  position: relative;
  background: black;
  left: -10px;
  height: 40px;
  padding-right: 10px;
  padding-left: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#pages {
  z-index: 2;
  margin: 30px;
  display: flex;
  flex: 1;
  justify-content: flex-end;
}
#pages a {
  margin-right: 30px;
}
#pages a.router-link-active {
  color: #10836f;
  font-weight: bold;
}
</style>
