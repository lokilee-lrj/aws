<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const text = computed(() => store.state.lan.about);
const items = computed(() =>
  text.value.tabItems.map((tab, i) => ({
    key: i,
    title: tab.tab,
    href: `#${tab.tab}`,
  }))
);
</script>
<template>
  <div class="page">
    <div class="about-header">
      <div class="about-header-line-f">{{ text.title }}</div>
    </div>
    <br />
    <div class="about-content">
      <div class="about-typography">
        <div class="about-anchor-warp">
          <a-anchor
            class="about-anchor"
            :items="items"
            :affix="true"
          ></a-anchor>
        </div>
        <div class="about-text">
          <a-typography
            :id="tab.tab"
            v-for="(tab, index) in text.tabItems"
            :key="index"
          >
            <a-typography-title>
              {{ tab.tab }}
            </a-typography-title>
            <a-typography-paragraph v-for="(t, tindex) in tab.p" :key="tindex">
              <a-typography-text strong>{{ t.title }} </a-typography-text>
              {{ t.content }}
            </a-typography-paragraph>
          </a-typography>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.page {
  width: 100%;
  max-width: 1920px;
}
.about-header {
  width: 100%;
  height: 40vh;
  background-color: #364d79;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(@/assets/img/headAbout.jpeg);
  background-size: 100% 100%
}
.about-header-line-f {
  user-select: none;
  height: 10vh;
  font-size: 7.5vmin;
  color: white;
}
.about-tab-warp {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
}
.about-content {
  display: flex;
  justify-content: center;
}
.about-text {
  flex: 1;
}
.about-anchor-warp {
  width: 140px;
}
.about-anchor {
  position: absolute;
}
.about-typography {
  max-width: 772px;
  display: flex;
}
</style>
