<script lang="ts" setup>
import NewsModalVue from "./NewsModal.vue";
// import axios from "../axios";
import axios from "axios";
import { computed, ref, watch } from "vue";
import { message } from "ant-design-vue";
import { ShareAltOutlined } from "@ant-design/icons-vue";
import { useStore } from "vuex";
const store = useStore();
const pagination = {
  onChange: (page) => {
    currentPage.value = page - 1;
  },
  pageSize: 5,
};
const actions = [{ icon: ShareAltOutlined, click: handleShareClick }];

const newsList = ref([]);
const listData = ref([]);
const currentPage = ref(0);
const selectedNews = ref(null);

const lanflag = computed(() => store.state.lanFlag);
const url = computed(() => `/news/data_${lanflag.value}.json`);
const text = computed(() => store.state.lan.news);
const isSelectedNews = computed(() => !!selectedNews.value);

watch(url, (newVal) => {
  getNewsData(newVal);
});
watch(newsList, (newVal) => {
  formListData(newVal);
});

function getNewsData(url) {
  axios.get(url).then((res) => {
    newsList.value = res.data.data;
  });
}
function formListData(newsData) {
  listData.value = newsData.map((news) => ({
    href: news.url,
    title: news.title,
    description: `${news.time}\n${news.author}`,
    content: news.summary,
    avatar: news.cover,
    cover: news.cover,
  }));
}
function handleShareClick(item) {
  // console.log(item.href);
}
function handleNewsClick(index) {
  selectedNews.value =
    newsList.value[index + currentPage.value * pagination.pageSize];
}
function handleModalCancel() {
  selectedNews.value = null;
}

getNewsData(url.value);
</script>

<template>
  <div class="container">
    <a-list
      class="news-list"
      item-layout="vertical"
      size="large"
      :pagination="pagination"
      :data-source="listData"
    >
      <template #renderItem="{ item, index }">
        <a-list-item
          class="news-list-item"
          key="item.title"
          @click="handleNewsClick(index)"
        >
          <template #actions>
            <span
              v-for="(action, index) in actions"
              :key="index"
              class="action"
              @click.stop="action.click(item)"
            >
              <component :is="action.icon" />
              {{ text.share }}
            </span>
          </template>
          <template #extra>
            <img width="272" alt="logo" :src="item.cover" />
          </template>
          <a-list-item-meta :description="item.description">
            <template #title>
              <a :href="item.href">{{ item.title }}</a>
            </template>
            <template #avatar><a-avatar :src="item.avatar" /></template>
          </a-list-item-meta>
          {{ item.content }}
        </a-list-item>
      </template>
    </a-list>
    <news-modal-vue
      :open="isSelectedNews"
      :news="selectedNews"
      @cancel="handleModalCancel"
    ></news-modal-vue>
  </div>
</template>

<style scoped>
.container {
  padding: 48px 72px;
  flex: 1;
  display: flex;
  flex-direction: column;
    overflow: hidden;
}
.news-list {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.news-list :deep(.ant-spin-nested-loading) {
  flex: 1;
  overflow: auto;
}
.news-title {
  margin-bottom: 5vmin;
}
.news-list-item,
.action {
  cursor: pointer;
}
</style>
