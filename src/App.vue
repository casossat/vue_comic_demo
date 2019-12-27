<template>
  <div id="app">
    <vue-page-transition name="fade-in-right">
      <router-view/>
    </vue-page-transition>
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
  --secondary-color: rgba(11, 217, 180, 1) !important;
  --tertiary-color: rgba(9, 159, 132, 0.4) !important;
  --quaternary-color: rgba(0, 83, 56, 0.8) !important;
  --font-family: "Nunito";

  --muted-color: #6c757d;
  --primary-color: #007bff;
  --info-color: #17a2b8;
  --success-color: #28a745;
  --warning-color: #ffc107;
  --danger-color: #dc3545;

  @margin-row: 6px;

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
    margin-bottom: 30px;
  }

  h4,
  h5 {
    margin-bottom: 15px;
  }

  h1 {
    font-size: 3em;
    line-height: 1.15;
  }

  h2 {
    font-size: 2.5em;
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

  .edit-btn {
    color: var(--primary-color);
    border-color: var(--primary-color);
    &:hover,
    &:focus {
      background-color: var(--primary-color);
      color: #ffffff;
    }
  }

  .delete-btn {
    color: var(--danger-color);
    border-color: var(--danger-color);
    &:hover,
    &:focus {
      background-color: var(--danger-color);
      color: #ffffff;
    }
  }

  .save-btn {
    text-transform: uppercase;
    font-size: 0.8em;
    padding-top: 2px;
    font-weight: 700;
    color: #fff;
    background: var(--success-color);
    border-color: var(--success-color);
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }

  .text-muted {
    color: var(--muted-color) !important;
  }

  .text-primary {
    color: var(--primary-color) !important;
  }

  .text-info {
    color: var(--info-color) !important;
  }

  .text-success {
    color: var(--success-color) !important;
  }

  .text-warning {
    color: var(--warning-color) !important;
  }

  .text-danger {
    color: var(--danger-color) !important;
  }

  .text-center {
    text-align: center;
  }

  .form-container {
    border-radius: 10px;
    background: #fff;
    overflow: hidden;
    position: relative;
    margin: 20vh auto;
    box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
  }

  .ant-input,
  .ant-select-selection {
    background-color: #f9f9f9 !important;
  }

  .ant-form-item-label {
    padding: 0;
  }

  .ant-form label {
    font-size: 12px;
    text-transform: uppercase;
    color: #737373;
  }

  .ant-select-selection__choice {
    background: #fff;
    border: #6f6f6f 1px solid;
  }

  .ant-form-explain {
    font-size: 0.8rem !important;
  }

  .fade-enter-active,
  .fade-leave-active,
  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: opacity 0.5s ease-in;
  }

  .fade-enter,
  .fade-leave-to,
  .component-fade-enter,
  .component-fade-leave-to {
    opacity: 0;
  }

  // Aplicación de los colores del tema
  // por el momento se tiene únicamente dos colores aplicados
  .ant-menu.ant-menu-dark .ant-menu-item-selected,
  .ant-menu.ant-menu-dark .ant-menu-item:hover,
  .ant-menu.ant-menu-dark .ant-menu-item:focus,
  .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected,
  .ant-card-head {
    // background-color: var(--primary-color);
    background-color: rgba(255, 255, 255, 0.23);
  }
  .ant-btn-primary {
    border-color: var(--primary-color);
    background-color: var(--primary-color);
  }
  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
  }

  // Diseño del menú lateral
  .ant-layout-sider {
    // background-image: url("https://cronicaglobal.elespanol.com/uploads/s1/36/27/02/9/bosque.jpeg");
    // background-repeat: no-repeat;
    // background-size: cover;
    &:not(.ant-layout-sider-collapsed) {
      min-width: 260px !important;
      max-width: 260px !important;
    }
    .ant-layout-sider-children {
      background-color: var(--primary-color);
      // background: rgba(0, 21, 41, 0.8);
      ul.ant-menu {
        li.ant-menu-item,
        li.ant-menu-submenu {
          color: #ffffff;
          font-weight: 600;
        }
        li.ant-menu-submenu ul.ant-menu-sub {
          background: rgba(0, 0, 0, 0);
          box-shadow: none;
        }
      }
    }
    .ant-layout-sider-children > ul {
      background: transparent;
      &.ant-menu-inline-collapsed > li {
        padding: 0 !important;
        text-align: center;
        &.ant-menu-submenu > div {
          padding: 0 !important;
        }
      }
    }
  }
  .ant-breadcrumb-separator {
    color: rgb(128, 128, 128) !important;
  }
}
#app {
  background-color: rgb(250, 250, 255);
  overflow: hidden;
}
</style>
