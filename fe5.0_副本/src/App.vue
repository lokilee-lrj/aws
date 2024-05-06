<script lang="ts" setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { routes } from "@/router/index";
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import {
  HomeOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  PrinterOutlined,
  MailOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons-vue";
const route = useRoute();
const router = useRouter();
const store = useStore();
const selectedKeys = ref(["/"]);
const menu = ref();
const path = computed(() => route.path);
const routesName = computed(() => store.state.lan.route);
const lan = computed(() => store.state.lan.lan);
const items = computed(() =>
  routes.map((route) => ({
    key: route.path,
    label: routesName.value[route.name],
    path: route.path,
  }))
);
watch(path, (newVal) => {
  selectedKeys.value = [newVal];
});
// watch(selectedKeys, (newVal) => {
//   console.log(newVal);
//   console.log(menu);
// });
function handleLogoClick({ item }) {
  handleMenuItemClick({ item: { path: "/" } });
}
function handleMenuItemClick({ item }) {
  router.push(item.path);
  selectedKeys.value = [item.path];
}
function handleLanClick(lan) {
  store.state.lanFlag = lan;
}
</script>

<template>
  <a-layout class="main">
    <a-layout-header class="header" id="header">
      <div class="logo">
        <div class="logo-imgae">
          <img
            height="100%"
            src="./assets/img/logo.png"
            alt=""
            @click="handleLogoClick"
          />
        </div>
      </div>
      <a-menu
        ref="menu"
        class="menu"
        :v-model="selectedKeys"
        mode="horizontal"
        :items="items"
        @click="handleMenuItemClick"
      >
      </a-menu>
      <a-dropdown class="lan">
        <a @click.prevent>
          {{ lan }}
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item @click="handleLanClick('en')">English</a-menu-item>
            <a-menu-item @click="handleLanClick('ch')">中文</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-layout-header>
    <a-layout-content class="content">
      <router-view></router-view>
    </a-layout-content>
    <a-float-button @click="handleLogoClick">
      <template #icon> <HomeOutlined /> </template>
    </a-float-button>
  </a-layout>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}
.header {
  position: relative;
  display: flex;
  background: #759f98;
}
.logo {
  position: relative;
  height: 100%;
  width: 96px;
  cursor: pointer;
}
.logo-imgae {
  position: absolute;
  height: 96px;
  width: 96px;
  z-index: 1000;
  background-color: #97bd3d;
}
.menu {
  flex: 1;
  background-color: #759f98;
}
.lan {
  height: 100%;
  position: absolute;
  right: 50px;
  color: rgba(0, 0, 0, 0.88);
}
.lan:hover {
  background: none;
  color: black;
}
.content {
  display: flex;
  justify-content: center;
  overflow: auto;
}
.footer {
  background: radial-gradient(
    ellipse farthest-side at 40% 0%,
    #759f98 110%,
    transparent 110%
  );
  display: flex;
  justify-content: center;
  height: 160px;
}
.footer-content {
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
}
.footer-logo-area {
  width: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-intro-area {
  width: 400px;
  color: white;
}
.footer-contact-area {
  display: flex;
  align-items: center;
}
.footer-icon {
  font-size: 32px;
  margin: 20px;
}
.footer-left-content {
  display: flex;
}
</style>
<style>
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-item-selected,
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-submenu-selected {
  color: rgb(193, 235, 228);
  background-color: transparent;
}
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-item-selected::after,
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-submenu-selected::after {
  border-bottom-width: 2px;
  border-bottom-color: rgb(193, 235, 228);
}
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-item:hover::after,
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-submenu:hover::after,
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-item-active::after,
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-submenu-active::after,
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-item-open::after,
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-submenu-open::after {
  border-bottom-width: 2px;
  border-bottom-color: rgb(193, 235, 228);
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-item-selected,
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-submenu-selected {
  color: #759f98;
  background-color: transparent;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-item-selected::after,
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-submenu-selected::after {
  border-bottom-width: 2px;
  border-bottom-color: #759f98;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-item:hover::after,
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-submenu:hover::after,
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-item-active::after,
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-submenu-active::after,
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-item-open::after,
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-submenu-open::after {
  border-bottom-width: 2px;
  border-bottom-color: #759f98;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-anchor-wrapper:not(
    .ant-anchor-wrapper-horizontal
  )
  .ant-anchor
  .ant-anchor-ink {
  background-color: #759f98;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-anchor-wrapper
  .ant-anchor
  .ant-anchor-link-active
  > .ant-anchor-link-title {
  color: #759f98;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-btn-primary {
  background-color: #759f98;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-btn-primary:not(
    :disabled
  ):hover {
  background-color: rgb(155, 197, 190);
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-btn-link {
  color: #759f98;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-btn-link:not(
    :disabled
  ):hover {
  color: rgb(155, 197, 190);
}
</style>
