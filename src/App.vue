<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {}
</script>

<style lang="less">
:root {
  --primary-color: rgba(9, 159, 132, 1) !important;
  --secondary-color: rgb(20, 126, 106) !important;
  --tertiary-color: rgba(0, 42, 28, 1) !important;
  --font-family: "Nunito";

  body {
    font-family: var(--font-family);
  }

  h1,
  h2,
  h4,
  h5,
  h6 {
    font-family: inherit;
    color: inherit;
    font-weight: 400;
  }

  h1,
  h2,
  h3 {
    margin-bottom: 16px;
  }

  h1 {
    font-size: 3em;
    line-height: 1.15;
    color: var(--secondary-color);
  }

  h2 {
    font-size: 2.5em;
    color: var(--primary-color);
  }

  h3 {
    font-weight: 600;
    font-size: 1.95em;
    line-height: 1.4em;
  }

  h4 {
    font-size: 1.714em;
    line-height: 1.45em;
  }

  h5 {
    font-size: 1.57em;
    line-height: 1.4em;
  }

  h6 {
    font-size: 1em;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.2em;
    margin-bottom: 0.5rem;
  }

  h1 > h6,
  h2 > h6,
  h3 > h6,
  h4 > h6 {
    font-size: 0.35em;
    opacity: 0.8;
    line-height: 0;
  }

  button.ant-btn {
    border: 2px solid #fff;
    border-radius: 10px;
    text-transform: uppercase;
    height: 40px;
  }

  button.ant-btn:not([disabled]) {
    background: var(--primary-color);
    color: #fff;
  }
}
</style>
