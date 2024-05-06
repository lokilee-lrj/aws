<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const text = computed(() => store.state.lan.help);
const activeKey = ref(text.value.theme.map((i) => []));
</script>
<template>
  <div class="page">
    <div class="help-header">
      <div class="help-header-line-f">{{ text.title }}</div>
    </div>
    <div class="help-content">
      <div class="help-typography">
        <br />
        <a-typography>
          <a-typography-paragraph>{{ text.content }}</a-typography-paragraph>
        </a-typography>
        <div v-for="(t, index) in text.theme" :key="index">
          <a-typography>
            <a-typography-title>{{ t.title }}</a-typography-title>
            <a-typography-paragraph>
              <a-collapse v-model:activeKey="activeKey[index]">
                <a-collapse-panel
                  v-for="(q, tindex) in t.q"
                  :key="tindex"
                  :header="q.q"
                >
                  <a-typography-paragraph>
                    <ul>
                      <li>
                        <p>{{ q.a }}</p>
                      </li>
                    </ul>
                  </a-typography-paragraph>
                </a-collapse-panel>
              </a-collapse>
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
.help-header {
  width: 100%;
  height: 40vh;
  background-color: #364d79;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(@/assets/img/headHelp.jpeg);
  background-size: 100% 100%
}
.help-header-line-f {
  user-select: none;
  height: 10vh;
  font-size: 7.5vmin;
  color: white;
}
.help-content {
  display: flex;
  justify-content: center;
}
.help-typography {
  max-width: 772px;
}
</style>
