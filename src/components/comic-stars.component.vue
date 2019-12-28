<template>
  <a-row>
    <a-col style="padding: 16px; font-size: 3em;">
      <a-icon
        type="star"
        v-for="i in l_stars"
        :key="i"
        :theme="stars && i + 1 <= stars ? 'filled' : 'outlined'"
        @click="changeStars(i + 1)"
      />
    </a-col>
  </a-row>
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";

export default Vue.extend({
  name: "comic-stars-component",
  props: {
    stars: Number,
    changeStars: Function
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
  transition: all .2s ease-in-out; 
  opacity: .6;
  &:hover { 
    transform: scale(1.1); 
    opacity: 1;
  }
}
</style>