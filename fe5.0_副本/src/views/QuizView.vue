<script lang="ts" setup>
import QuizVue from "../components/Quiz.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const text = computed(() => store.state.lan.quiz);
</script>

<template>
  <div class="page">
    <div class="quiz-header">
      <div class="quiz-header-line-f">{{ text.title }}</div>
    </div>
    <quiz-vue></quiz-vue>
  </div>
</template>
<style scoped>
.page {
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
}
.quiz-header {
  width: 100%;
  height: 30vh;
  background-color: #364d79;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.quiz-header-line-f {
  user-select: none;
  height: 10vh;
  font-size: 7.5vmin;
  color: white;
}
</style>
