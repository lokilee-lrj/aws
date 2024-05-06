<script lang="ts" setup>
import { ref, createVNode, computed, watch } from "vue";
import { useStore } from "vuex";
interface image {
  type: "image";
  url: string;
  imageText?: string;
}
interface newsData {
  title: string;
  author: string;
  time: string;
  paragraphs: Array<string | image>;
  url: string;
}
interface vueProps {
  open: boolean;
  news: newsData | null;
}
const props = withDefaults(defineProps<vueProps>(), {
  open: false,
  news: () => ({
    title: "",
    author: "",
    time: "",
    paragraphs: [],
    url: "",
  }),
});
const store = useStore();
const emit = defineEmits(["cancel"]);
const bodyStyle = { height: "80vh" };
const isOpen = ref(false);
const text = computed(() => store.state.lan.news);

watch(
  () => props.open,
  (newVal) => {
    isOpen.value = newVal;
  }
);

function handleCancel() {
  emit("cancel");
}
</script>
<template>
  <a-modal
    v-model:open="isOpen"
    @cancel="handleCancel"
    width="50%"
    :title="news ? news.title : ''"
    :footer="null"
    :bodyStyle="bodyStyle"
  >
    <a-typography class="news-modal-article">
      <blockquote>{{ news ? `${news.time}\n${news.author}` : "" }}</blockquote>
      <div class="news-modal-content">
        <a-typography-paragraph
          v-for="(paragraph, index) in news ? news.paragraphs : []"
          :key="index"
        >
          <a-image
            v-if="typeof paragraph === 'object' && paragraph.type === 'image'"
            width="100%"
            :src="paragraph.url"
          />
          <blockquote
            v-if="
              typeof paragraph === 'object' &&
              paragraph.type === 'image' &&
              paragraph.imageText
            "
          >
            {{ paragraph.imageText }}
          </blockquote>
          {{ typeof paragraph === "string" ? paragraph : "" }}
        </a-typography-paragraph>
      </div>
      <blockquote>{{ news ? `${text.from}\n${news.url}` : "" }}</blockquote>
    </a-typography>
  </a-modal>
</template>
<style scoped>
.news-modal-article {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.news-modal-content {
  overflow: auto;
}
</style>
