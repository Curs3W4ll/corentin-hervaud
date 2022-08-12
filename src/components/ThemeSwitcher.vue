<template>
  <div id="themeswitch__MainContainer">
    <label :for="id + '_switch'" :class="{'active': isActive}" class="toggle__button">
      <div id="themeswitch__SwitchContainer">
        <input type="checkbox" :disabled="disabled" :id="id + '_switch'" v-model="checkedValue">
        <span class="toggle__switch">
          <div class="toggle__switchContent">
            <BaseIcon id="leftIcon" name="lightTheme" size=18 viewSize=207.628><SunIcon /></BaseIcon>
            <span class="toggle__switchButton" />
            <BaseIcon name="darkTheme" size=18 viewSize=455><MoonIcon /></BaseIcon>
          </div>
        </span>
      </div>
    </label>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";
import SunIcon from "@/components/icons/SunIcon.vue";
import MoonIcon from "@/components/icons/MoonIcon.vue";

export default {
  components: {
    BaseIcon,
    SunIcon,
    MoonIcon,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: 'primary',
    },
    defaultState: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentState: this.defaultState,
    };
  },
  watch: {
    defaultState: function defaultState() {
      this.currentState = Boolean(this.defaultState);
    }
  },
  computed: {
    isActive() {
      return this.currentState;
    },
    checkedValue: {
      get() {
        return this.currentState;
      },
      set(newValue) {
        this.currentState = newValue;
        this.$emit('change', newValue);
      },
    },
  },
};
</script>

<style scoped>
#themeswitch__MainContainer {
  position: relative;
  width: 60px;
  height: 30px;
}
#themeswitch__SwitchContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
}
.toggle__button {
  user-select: none;
  cursor: pointer;
}
.toggle__button input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
}
.toggle__switch {
  position: relative;
  display: flex;
  flex: 1;
  align-self: stretch;
  overflow: hidden;
  border: 2px solid white;
  border-radius: 20px;
  transition: all .25s;
}
.toggle__switchContent {
  position: absolute;
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  left: -24px;
  fill: white;
  transform: translateX(0);
  transition: all .25s cubic-bezier(.5, -.6, .5, 1.6);
}
.active .toggle__switchContent {
  transform: translateX(40px - 18px);
  left: 6px;
}
.toggle__switchButton {
  position: relative;
  height: 80%;
  aspect-ratio: 1/1;
  margin-left: 9px;
  margin-right: 8px;
  border-radius: 50%;
  background: #12c9a8;
}
</style>
