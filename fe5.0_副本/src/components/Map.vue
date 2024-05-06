<script lang="ts" setup>
import mapboxgl from "mapbox-gl";
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import ChartVue from "@/components/Chart.vue";
import axios from "axios";
const store = useStore();
mapboxgl.accessToken = store.state.mapboxTokken;
const mapboxContainer = ref();
const time = ref(0);
const max = ref(100);
const mapData = ref({ features: [], type: "FeatureCollection" });
const mapDataDateBase = ref(0);
const date = ref([]);
const frpRange = ref([]);
const postCode = ref("");
const map = ref(null);
const searchResult = ref(null);
watch(map, (newVal) => {
  if (newVal !== null) {
    if (mapData.value.features.length !== 0) {
      if (newVal.loaded()) {
        addMapData(newVal, mapData.value);
      } else {
        newVal.on("load", () => {
          addMapData(newVal, mapData.value);
        });
      }
    }
  }
});
watch(mapData, (newVal) => {
  if (newVal.features.length !== 0) {
    if (map.value !== null) {
      if (map.value.loaded()) {
        addMapData(map.value, newVal);
      } else {
        map.value.on("load", () => {
          addMapData(map.value, newVal);
        });
      }
    }
  }
});

function tipFormatter(value: number) {
  return date.value[value];
}
function getMapNews() {
  axios.get("/dashboard/map.json").then((res) => {
    mapData.value.features = res.data.data.slice().map((item) => ({
      type: "Feature",
      id: item.id,
      geometry: {
        type: "Point",
        coordinates: [item.lon, item.lat],
      },
      properties: {
        date: item.date,
        time: item.time,
        frp: item.frp,
        isDaylight: item.isDaylight,
        location: item.location,
      },
    }));
    date.value = res.data.data
      .map((item) => item.date)
      .filter((item, index, arr) => arr.indexOf(item, 0) === index);
    const frp = res.data.data.map((item) => item.frp);
    frpRange.value = [Math.min(...frp), Math.max(...frp)];
    max.value = date.value.length - 1;
    mapDataDateBase.value = date[0];
    if (map.value !== null) {
      if (map.value.loaded()) {
        addMapData(map.value, mapData.value);
      } else {
        map.value.on("load", () => {
          map.value.loadImage("/dashboard/icon/icon.png", (error, image) => {
            if (error) throw error;
            // Add the image to the map style.
            map.value.addImage("icon", image);
            addMapData(map.value, mapData.value);
          });
        });
      }
    }
  });
}
function handleYearChange(value: number) {
  const targetDate = date.value[value];
  if (map.value !== null && mapDataDateBase.value !== 0) {
    const targetDateFilters = ["==", "date", targetDate];
    map.value.setFilter("bushfire-circles", targetDateFilters);
  }
}
function addMapData(mapInstance, data) {
  if (
    mapInstance.getSource("bushfire") &&
    mapInstance.isSourceLoaded("bushfire")
  ) {
    return;
  } else {
    console.log(frpRange.value);

    mapInstance
      .addSource("bushfire", {
        type: "geojson",
        data: data,
      })
      .addLayer({
        id: "bushfire-circles",
        type: "symbol",
        source: "bushfire",
        layout: {
          "icon-image": "icon",
          "icon-size": [
            "interpolate",
            ["linear"],
            ["get", "frp"],
            frpRange.value[0],
            0.05,
            frpRange.value[1],
            0.15,
          ],
        },
        paint: {
          "icon-color": "#FF7B15",
          "icon-halo-color": "#FF7B15",
          "icon-halo-blur": 3,
          "icon-halo-width": 5,
        },
      });
    mapInstance.on("click", "bushfire-circles", (e) => {
      // Copy coordinates array.
      console.log(e.features);

      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = `<strong>${e.features[0].properties.location}</strong>
      <p /><p>${e.features[0].properties.date} - ${
        e.features[0].properties.time
      } ${
        e.features[0].properties.isDaylight ? "Daylight" : "Night"
      }</p><p>Fire Radiative Power: ${e.features[0].properties.frp}</p>`;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(mapInstance);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    mapInstance.on("mouseenter", "bushfire-circles", () => {
      mapInstance.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves.
    mapInstance.on("mouseleave", "bushfire-circles", () => {
      mapInstance.getCanvas().style.cursor = "";
    });
    const targetDateFilters = ["==", "date", date.value[0]];
    mapInstance.setFilter("bushfire-circles", targetDateFilters);
  }
}
function onSearch() {
  // request for information and set the value of searchResult
  // searchResult.value = res
}
onMounted(() => {
  map.value = new mapboxgl.Map({
    container: mapboxContainer.value,
    zoom: 4.5,
    center: [134, -27],
  });
});

getMapNews();
</script>
<template>
  <div class="map-action-area">
    <a-card class="map-action-chart" style="width: 25vw">
      <div class="map-action-chart-body">
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
    </a-card>
    <a-card
      class="map-action-slider"
      title="Bushfires from 2024 to the present day "
      style="width: 25vw"
    >
      <a-slider
        v-model:value="time"
        v-model:max="max"
        :tipFormatter="tipFormatter"
        @change="handleYearChange"
      />
    </a-card>
    <a-card class="map-action-input" style="width: 25vw">
      <a-space direction="vertical" style="width: 100%">
        <a-input-search
          v-model:value="postCode"
          placeholder="input search postcode"
          style="width: 100%"
          @search="onSearch"
        />

        <a-typography>
          <a-typography-paragraph>{{
            searchResult
              ? searchResult
              : "Input postcode to check the information for the corresponding area"
          }}</a-typography-paragraph>
        </a-typography>
      </a-space>
    </a-card>
  </div>
  <div ref="mapboxContainer" class="map-main"></div>
</template>

<style scoped>
.map-main {
  height: 100%;
  width: 100%;
  position: relative;
}
.map-action-area {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  z-index: 100;
}
.map-action-chart {
  position: absolute;
  top: 36px;
  left: 18px;
  height: calc(100% - 235px);
  overflow: auto;
}
.map-action-slider {
  position: absolute;
  bottom: 36px;
  left: 18px;
}
.map-action-input {
  position: absolute;
  top: 36px;
  left: calc(75vw - 36px);
}

.dashboard-card {
  width: 100%;
  margin: 20px 0;
}
.dashboard-chart {
  position: relative;
  width: 100%;
  height: 25vh;
  padding: 10px;
}
</style>
