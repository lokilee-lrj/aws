<script lang="ts" setup>
import * as echarts from "echarts";
import { onBeforeUnmount, onMounted, ref } from "vue";
const chartContainer = ref();
const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};
const chart = ref();
function resize() {
  chart.value.clear();
  chart.value.resize({
    width: chartContainer.value.offsetWidth,
    height: chartContainer.value.offsetHeight,
  });
  option && chart.value.setOption(option);
}
onMounted(() => {
  chart.value = echarts.init(chartContainer.value);
  option && chart.value.setOption(option);
  window.addEventListener("resize", resize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", resize);
});
</script>
<template>
  <div ref="chartContainer" class="chart-main"></div>
</template>

<style scoped>
.chart-main {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
