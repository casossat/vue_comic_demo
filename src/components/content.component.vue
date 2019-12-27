<template>
  <a-form @submit.prevent="get_comic" :form="form" class="login-form">
    <a-form-item>
      <a-input-number :min="0" :max="614" :value="number_comic" @change="handleNumberChange" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" class="login-form-buttton">Ingresar</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { CONFIG } from "../app-config";
import { Vue } from "vue-property-decorator";
import { dataService } from "../services/data.service";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  name: "content-component",
  data() {
    return {
      form: this.$form.createForm(this, {}),
      number_comic: 0,
      comic: {}
    };
  },
  methods: {
    handleNumberChange(value: number) {
      this.number_comic = value;
    },
    get_comic() {
      dataService
        .get("https://xkcd.com/614/info.0.json")
        .then((res: any) => {
          console.log(res);
        })
        .catch((err: string) => {
          console.log(err);
        });
    }
  }
});
</script>

<style lang="less" scoped>
.ant-form {
  .ant-form-item {
    .ant-input {
      background: gray;
    }
  }
  .login-form-buttton {
    border-color: var(--primary-color) !important;
    &:hover,
    &:focus {
      border-color: var(--secondary-color) !important;
    }
  }
}
</style>

