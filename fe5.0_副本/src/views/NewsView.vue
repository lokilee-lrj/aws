<script lang="ts" setup>
import NewsVue from "../components/News.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const text = computed(() => store.state.lan.news);
</script>

<template>
  <div class="page">
    <div class="news-header">
      <div class="news-header-line-f">{{ text.title }}</div>
    </div>
    <news-vue></news-vue>
  </div>
</template>
<style scoped>
.page {
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
}
.news-header {
  width: 100%;
  height: 40vh;
  background-color: #364d79;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(@/assets/img/headNews.jpeg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.news-header-line-f {
  user-select: none;
  height: 10vh;
  font-size: 7.5vmin;
  color: white;
}
</style>
