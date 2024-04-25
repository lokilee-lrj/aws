import { lan } from "@/components/lan/index";
import { createStore } from "vuex";

// 创建一个新的 store 实例
export const store = createStore({
  state() {
    return {
      count: 0,
      lanFlag: "en",
      lan: lan.en,
      mapboxTokken:
        "pk.eyJ1Ijoicm9uZ2ppOTk5OSIsImEiOiJjbHYyZzZ4emcwZzR3MmpwbDIyMXo0dzR0In0.Xuk2ZeQuD_CFpaqA_PrmUQ",
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
store.watch(
  (state) => state.lanFlag,
  (newVal) => {
    store.state.lan = lan[newVal];
  }
);
