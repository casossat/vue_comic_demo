<template>
  <a-layout class="container-app">
    <a-layout-header>
      <header-component />
    </a-layout-header>
    <a-layout-content>
      <content-component />
    </a-layout-content>
    <a-layout-footer>
      <footer-component />
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
// @ is an alias to /src
import HeaderComponent from "../components/header.component.vue";
import ContentComponent from "../components/content.component.vue";
import FooterComponent from "../components/footer.component.vue";

export default {
  name: "home",
  components: {
    HeaderComponent,
    ContentComponent,
    FooterComponent
  }
};
</script>

<style scoped lang="less" >
.container-app {
  text-align: center;
  .ant-layout-header,
  .ant-layout-footer {
    height: 7.5vh;
    background: #7dbcea;
    color: #fff;
  }
  .ant-layout-content {
    background: rgba(16, 142, 233, 1);
    color: #fff;
    height: 85vh;
    max-height: 85vh;
    overflow: auto;
  }
  .ant-layout-footer {
    line-height: 1.5;
    padding: 2.5vh 50px;
  }
}
</style>
