<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const text = computed(() => store.state.lan.information);
const current = ref([0]);
const items = computed(() =>
  text.value.tabItems.map((item, index) => ({ key: index, label: item.tab }))
);
</script>
<template>
  <div class="page">
    <div class="information-header">
      <div class="information-header-line-f">{{ text.slogan[0] }}</div>
      <div class="information-header-line-s">{{ text.slogan[1] }}</div>
    </div>
    <div class="information-tab-warp">
      <a-menu
        v-model:selectedKeys="current"
        class="information-tab-warp"
        mode="horizontal"
        :items="items"
      >
      </a-menu>
    </div>
    <div v-if="current[0] === 0" class="information-content">
      <a-typography class="information-typography">
        <br />
        <a-typography-title>
          {{ text.tabItems[0].introduction.title }}
        </a-typography-title>
        <a-typography-paragraph>
          {{ text.tabItems[0].introduction.content }}
        </a-typography-paragraph>
        <iframe
          width="772"
          height="434.25"
          src="https://www.youtube.com/embed/l38UkQmUISs?si=MCxu81SooPz8op5-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <a-typography-title :level="2">
          {{ text.tabItems[0].p1.title }}
        </a-typography-title>
        <a-typography-paragraph>
          {{ text.tabItems[0].p1.content }}
        </a-typography-paragraph>
        <a-typography-title :level="3">
          {{ text.tabItems[0].p2.title }}
        </a-typography-title>
        <a-typography-paragraph
          v-for="(t, i) in text.tabItems[0].p2.content"
          :key="i"
        >
          <blockquote>
            {{ t }}
          </blockquote>
        </a-typography-paragraph>
        <a-typography-title :level="3">
          {{ text.tabItems[0].p3.title }}
        </a-typography-title>
        <a-typography-paragraph
          v-for="(t, i) in text.tabItems[0].p3.content"
          :key="i"
        >
          <blockquote>
            {{ t }}
          </blockquote>
        </a-typography-paragraph>
        <a-typography-title :level="3">
          {{ text.tabItems[0].p4.title }}
        </a-typography-title>
        <a-typography-paragraph
          v-for="(t, i) in text.tabItems[0].p4.content"
          :key="i"
        >
          <blockquote>
            {{ t }}
          </blockquote>
        </a-typography-paragraph>
        <a-typography-title :level="3">
          {{ text.tabItems[0].p5.title }}
        </a-typography-title>
        <a-typography-paragraph>
          <blockquote>
            {{ text.tabItems[0].p5.content }}
          </blockquote>
        </a-typography-paragraph>
        <a-typography-paragraph>
          {{ text.tabItems[0].p6.content }}
        </a-typography-paragraph>
      </a-typography>
    </div>
    <div v-else-if="current[0] === 1" class="information-content">
      <a-typography class="information-typography">
        <br />
        <a-typography-paragraph>
          {{ text.tabItems[1].introduction }}
        </a-typography-paragraph>
        <iframe
          width="772"
          height="434.25"
          src="https://www.youtube.com/embed/MQL5m7dffe8?si=Aun306QLxCeHfmWP"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <a-typography-title>
          {{ text.tabItems[1].p1.title }}
        </a-typography-title>
        <a-typography-paragraph
          v-for="(t, i) in text.tabItems[1].p1.content"
          :key="i"
        >
          <blockquote>
            {{ t }}
          </blockquote>
        </a-typography-paragraph>
        <a-typography-title>
          {{ text.tabItems[1].p2.title }}
        </a-typography-title>
        <a-typography-paragraph
          v-for="(t, i) in text.tabItems[1].p2.content"
          :key="i"
        >
          <blockquote>
            {{ t }}
          </blockquote>
        </a-typography-paragraph>
        <a-typography-title>
          {{ text.tabItems[1].p3.title }}
        </a-typography-title>
        <a-typography-paragraph
          v-for="(t, i) in text.tabItems[1].p3.content"
          :key="i"
        >
          <blockquote>
            {{ t }}
          </blockquote>
        </a-typography-paragraph>
      </a-typography>
    </div>
    <div v-else class="information-content">
      <a-typography class="information-typography">
        <br />
        <iframe
          width="772"
          height="434.25"
          src="https://www.youtube.com/embed/4w84XcQjzBA?si=nWwGon8fhit8miX2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <a-typography-title>
          {{ text.tabItems[2].p1.title }}
        </a-typography-title>
        <a-typography-paragraph>
          {{ text.tabItems[2].p1.content }}
        </a-typography-paragraph>
        <a-typography-title>
          {{ text.tabItems[2].p2.title }}
        </a-typography-title>
        <a-typography-paragraph>
          {{ text.tabItems[2].p2.content }}
        </a-typography-paragraph>
        <a-typography-title>
          {{ text.tabItems[2].p3.title }}
        </a-typography-title>
        <a-typography-paragraph>
          {{ text.tabItems[2].p3.content }}
        </a-typography-paragraph>
        <a-typography-title>
          {{ text.tabItems[2].p4.title }}
        </a-typography-title>
        <a-typography-paragraph>
          {{ text.tabItems[2].p4.content }}
        </a-typography-paragraph>
        <a-typography-title>
          {{ text.tabItems[2].p5.title }}
        </a-typography-title>
        <a-typography-paragraph>
          {{ text.tabItems[2].p5.content }}
        </a-typography-paragraph>
      </a-typography>
    </div>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  max-width: 1920px;
}
.information-header {
  width: 100%;
  height: 40vh;
  background-color: #364d79;
  background-image: url(../assets/img/information.jpeg);
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.information-header-line-f,
.information-header-line-s {
  user-select: none;
  height: 10vh;
  font-size: 7.5vmin;
  color: white;
}

.information-header-line-s {
  padding-left: 15vw;
}
.information-tab-warp {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
}
.information-content {
  display: flex;
  justify-content: center;
}
.information-typography {
  max-width: 772px;
}
</style>
