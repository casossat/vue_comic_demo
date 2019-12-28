<template>
  <a-row :class="{ loading }">
    <a-col>
      <img :src="image" :alt="alt" />
    </a-col>
  </a-row>
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";
import { IComic } from "../models/comic";

export default Vue.extend({
  name: "comic-view-component",
  props: {
    image: String,
    alt: String,
    loading: Boolean
  }
});
</script>

<style lang="less" scoped>
.loading {
  position: relative;
  &::after,
  &::before {
    position: absolute;
    display: block;
  }
  &:before {
    top: -2.5%;
    z-index: 0;
    width: 100%;
    height: 105%;
    background-color: rgb(240, 242, 245);
  }
  &:after {
    top: 0;
    height: 60px;
    width: 60px;
    left: 47.5%;
    z-index: 1;
    animation: rotation 2s infinite linear;
    background-image: url(../assets/loading_3.jpg);
    background-size: 60px;
    background-repeat: no-repeat;
    background-position-x: center;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
}
</style>