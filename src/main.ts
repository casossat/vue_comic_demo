import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import "./registerServiceWorker";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VuePageTransition from "vue-page-transition";

import {
  Button,
  Form,
  Icon,
  Input,
  Row,
  Col,
  Card,
  Layout,
  Menu,
  Select,
  Table,
  Pagination,
  Breadcrumb,
  Divider,
  Carousel,
  Radio,
  Upload,
  Modal,
  Dropdown,
  Popconfirm,
  List,
  Avatar,
  Popover,
  Badge
} from "ant-design-vue";

Vue.use(VuePageTransition);
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Menu.name, Menu);
Vue.component(Form.name, Form);
Vue.component(Card.name, Card);
Vue.component(Icon.name, Icon);
Vue.component(List.name, List);
Vue.component(Input.name, Input);
Vue.component(Badge.name, Badge);
Vue.component(Table.name, Table);
Vue.component(Radio.name, Radio);
Vue.component(Modal.name, Modal);
Vue.component(Avatar.name, Avatar);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Layout.name, Layout);
Vue.component(Upload.name, Upload);
Vue.component(Divider.name, Divider);
Vue.component(Popover.name, Popover);
Vue.component(Dropdown.name, Dropdown);
Vue.component(Carousel.name, Carousel);
Vue.component(List.Item.name, List.Item);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Form.Item.name, Form.Item);
Vue.component(Card.Meta.name, Card.Meta);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(Pagination.name, Pagination);
Vue.component(Popconfirm.name, Popconfirm);
Vue.component(Radio.Group.name, Radio.Group);
Vue.component(Form.create.name, Form.create);
Vue.component(Radio.Button.name, Radio.Button);
Vue.component(Button.Group.name, Button.Group);
Vue.component(Menu.SubMenu.name, Menu.SubMenu);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Select.Option.name, Select.Option);
Vue.component(List.Item.Meta.name, List.Item.Meta);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Input.TextArea.name, Input.TextArea);
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
