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
