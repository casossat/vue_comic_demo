<template>
  <a-row>
    <a-col :span="4" gutter="5">
      <a-button :disabled="!hasBefore" @click="beforeComic()">
        <a-icon type="left" />
        Anterior
      </a-button>
    </a-col>
    <a-col :span="16" gutter="5">
      <h1>{{ title }}</h1>
    </a-col>
    <a-col :span="4" gutter="5">
      <a-button @click="nextComic()">
        Siguiente
        <a-icon type="right" />
      </a-button>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import Vue from "vue";
import _ from "lodash";
import { IComic } from "../models/comic";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  name: "comic-paginate-component",
  props: {
    title: String,
    nextComic: Function,
    hasBefore: Boolean,
    beforeComic: Function
  }
});
</script>

<style lang="less" scoped>
</style>

