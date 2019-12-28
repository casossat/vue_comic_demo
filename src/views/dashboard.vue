<template>
  <a-layout class="container-app">
    <a-layout-header>
      <header-component />
    </a-layout-header>
    <a-layout-content>
      <content-component/>
    </a-layout-content>
    <a-layout-footer>
      <footer-component />
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue } from "vue-property-decorator";
import HeaderComponent from "../components/header.component.vue";
import ContentComponent from "../components/content.component.vue";
import FooterComponent from "../components/footer.component.vue";

export default Vue.extend({
  name: "home",
  components: {
    HeaderComponent,
    ContentComponent,
    FooterComponent
  },
  methods: {
    // ...
  }
});
</script>

<style scoped lang="less" >
.container-app {
  text-align: center;
  .ant-layout-header {
    background: #fff;
    box-shadow: 1px 6px 11px -4px rgba(202, 202, 202, 0.75);
  }
  .ant-layout-header,
  .ant-layout-footer {
    height: 7.5vh;
  }
  .ant-layout-content {
    height: 85vh;
    max-height: 85vh;
    overflow: auto;
  }
  .ant-layout-footer {
    line-height: 1.5;
    padding: 2.5vh 50px;
    background: var(--tertiary-color);
  }
}
</style>
