<template>
  <a-layout id="components-layout-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo">
        <div class="logo-img">
          <img src="../../assets/images/erp_logo.png" />
        </div>
        <span>WEBSAFI ERP</span>
      </div>
      <menu-component />
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        style="overflow: visible; padding: 0; background: transparent; height: max-content;"
      >
        <navbar-component />
      </a-layout-header>
      <a-layout-content :style="{ marginTop: '1px', padding: '0 25px 20px', minHeight: '280px' }">
        <vue-page-transition name="fade-in-right">
          <router-view />
        </vue-page-transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {}
};
</script>

<style scoped lang="less" >
#components-layout-custom-trigger {
  height: 100vh;
  overflow: hidden;
  .ant-layout-sider-collapsed {
    .logo {
      span {
        max-width: 0;
        opacity: 0;
      }
    }
  }
  .logo {
    height: 64px;
    padding: 15px 0px;
    margin: 0 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    color: #fff;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.26em;
    span {
      opacity: 1;
      display: inline-block;
      transition: 0.2s all ease;
    }
    .logo-img {
      width: 34px;
      min-width: 34px;
      display: inline-block;
      height: 34px;
      margin-left: 0;
      margin-right: 10px;
      background: #fff;
      border-radius: 40px;
      text-align: center;
      padding: 5px;
      overflow: hidden;
      img {
        height: 25px;
      }
    }
  }
}
.ant-layout {
  background: transparent;
}
.ant-layout-content {
  .grid {
    border: 0;
    padding: 25px 20px;
    border-radius: 0.1875rem;
    display: inline-block;
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    -webkit-box-shadow: 0 1px 15px 1px rgba(39, 39, 39, 0.1);
    box-shadow: 0 1px 15px 1px rgba(39, 39, 39, 0.1);
    background: rgb(255, 255, 255);
  }
}
</style>
