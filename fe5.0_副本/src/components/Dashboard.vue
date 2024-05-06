<script lang="ts" setup>
import mapboxgl from "mapbox-gl";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import MapVue from "@/components/Map.vue";
import ChartVue from "@/components/Chart.vue";
const store = useStore();
</script>
<template>
  <div class="dashboard-left">
    <div class="dashboard-intro"></div>
    <div class="dashboard-content">
      <a-card hoverable class="dashboard-card">
        <template #cover>
          <div class="dashboard-chart">
            <chart-vue></chart-vue>
          </div>
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
      </a-card>
      <a-card hoverable class="dashboard-card">
        <template #cover>
          <div class="dashboard-chart">
            <chart-vue></chart-vue>
          </div>
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
      </a-card>
      <a-card hoverable class="dashboard-card">
        <template #cover>
          <div class="dashboard-chart">
            <chart-vue></chart-vue>
          </div>
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
      </a-card>
      <a-card hoverable class="dashboard-card">
        <template #cover>
          <div class="dashboard-chart">
            <chart-vue></chart-vue>
          </div>
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
      </a-card>
      <a-card hoverable class="dashboard-card">
        <template #cover>
          <div class="dashboard-chart">
            <chart-vue></chart-vue>
          </div>
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
      </a-card>
      <a-card hoverable class="dashboard-card">
        <template #cover>
          <div class="dashboard-chart">
            <chart-vue></chart-vue>
          </div>
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
      </a-card>
      <a-card hoverable class="dashboard-card">
        <template #cover>
          <div class="dashboard-chart">
            <chart-vue></chart-vue>
          </div>
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
      </a-card>
    </div>
  </div>
  <div class="dashboard-right">
    <map-vue></map-vue>
  </div>
</template>

<style scoped>
.dashboard-left {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 100%;
  overflow: auto;
  z-index: 10;
  display: none;
}
.dashboard-right {
  position: relative;
  flex: 1 1 auto;
}
.dashboard-intro {
  width: 100%;
  height: 30vh;
  background-color: #364d79;
}
.dashboard-content {
  flex: 1;
  padding: 0 20px;
  overflow: auto;
  background-color: white;
}
.dashboard-card {
  width: 100%;
  margin: 20px 0;
}
.dashboard-chart {
  position: relative;
  width: 100%;
  height: 40vh;
  padding: 10px;
}
</style>
