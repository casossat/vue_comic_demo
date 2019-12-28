<template>
  <a-row type="flex" align="top" justify="space-between" class="bar">
    <a-col :span="12" style="text-align: left;">
      <h2 style="margin-bottom: 0;">COMIC DEMO APP</h2>
    </a-col>

    <a-col :span="12" style="text-align: right;">
      <div
        class="circle"
        v-for="(item, idx) in themes"
        :key="idx"
        style="background: rgba(9, 159, 132, 1)"
        :style="{ backgroundColor: item.primary_color }"
        @click="update_theme(idx)"
      />
    </a-col>
  </a-row>
</template>

<script lang="ts">
import Vue from "vue";
import { CONFIG } from "../app-config";
import configurationTypes from "../store/types/configurationTypes";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  name: "header-component",
  data() {
    return {
      themes: CONFIG.THEMES
    };
  },
  methods: {
    ...mapActions("configurationModule", [
      configurationTypes.actions.RELOAD_THEME
    ]),
    update_theme(idx: number): void {
      (this as any)[configurationTypes.actions.RELOAD_THEME](idx);
    }
  }
});
</script>

<style lang="less" scoped>
.circle {
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  margin: 1.5vh;
  height: 40px;
  width: 40px;
}
</style>

