<template>
  <a-row>
    <a-col style="padding: 0 16px; font-size: 1em;">
      <a-icon
        type="star"
        v-for="i in l_stars"
        :key="i"
        :theme="star && i + 1 <= star ? 'filled' : 'outlined'"
      />
      <span> {{ total }} </span>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";

export default Vue.extend({
  name: "comic-stars-component",
  props: {
    star: Number,
    total: Number
  },
  data() {
    return {
      l_stars: _.range(5)
    };
  }
});
</script>

<style lang="less" scoped>
.anticon.anticon-star {
  color: var(--primary-color);
}
</style>