<script lang="ts" setup>
import {
  LeftCircleOutlined,
  RightCircleOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const text = computed(() => store.state.lan.home);
const fullpage = ref();
const options = ref({
  scrollOverflow: false,
  scrollBar: false,
  navigation: false,
  fitToSection: true,
  credits: {
    enabled: false,
    label: "Made with fullPage.js",
    position: "right",
  },
  afterLoad: (origin, destination, direction, trigger) => {
    if (direction === "down") {
      const x = Number(
        fullpage.value.$el.style.transform
          .split("(")[1]
          .split(")")[0]
          .split(",")[1]
          .split("px")[0]
      );

      fullpage.value.$el.style.setProperty(
        "transform",
        `translate3d(0px, ${x - 64}px, 0px)`
      );
    }
  },
});
const entranceShow = ref(false);
const isOpen1 = ref(false);
const isOpen2 = ref(false);
const isOpen3 = ref(false);
const isOpen4 = ref(false);
const isOpen5 = ref(false);
const data = ref([
  {
    value: 0,
    title: "Hectares",
    payload: {
      content: "5,500,000",
      intro:
        "-	About 7% (5.5 million hectares) of NSW was burnt during the prolonged 2019–20 Black Summer fire season.",
    },
  },
  {
    value: 1,
    title: "Koalas",
    payload: {
      content: "41,000+",
      intro:
        "-	The worst losses were on Kangaroo Island in South Australia, where the conservation group estimates more than 41,000 koalas were killed or harmed by the ferocious fires. More than 11,000 were affected in the state of Victoria, nearly 8,000 in New South Wales (NSW), and nearly 900 in Queensland.",
    },
  },
  {
    value: 2,
    title: "people",
    payload: {
      content: "33",
      intro:
        "-	Thirty-three people lost their lives in the 2019–20 bushfire season (Parliament of Australia 2020)",
    },
  },
  {
    value: 3,
    title: "CO2",
    payload: {
      content: "178.6 ± 13.6 Tg",
      intro:
        "-	The 2019–2020 bushfires burned a total of 112.3 Tg biomass and released 178.6 ± 13.6 Tg CO2 (carbon dioxide)",
    },
  },
]);
const value = ref(0);
const bodyStyle = { height: "80vh" };
function handleHelpClick() {
  router.push("/help");
}
function handleSloganClick() {
  entranceShow.value = true;
}
function onEntranceClose() {
  entranceShow.value = false;
}
</script>

<template>
  <div class="home">
    <div>
      <full-page :options="options" id="fullpage" ref="fullpage">
        <div class="section">
          <!-- <div class="home-intro">
            <a-typography class="home-intro-content">
              <a-typography-title style="color: white"
                >Save Forest, Save the Future</a-typography-title
              >
              <a-typography-title :level="4" style="color: white">
                Helps you in understanding how forest fires occur and their
                causes.
              </a-typography-title>
              <a-button
                class="submit"
                type="primary"
                v-on:click="handleSloganClick"
              >
                Act Now to Protect Our World
              </a-button>
            </a-typography>
          </div> -->
          <a-carousel autoplay>
            <div class="image-warp">
              <div class="home-intro">
                <a-typography class="home-intro-content">
                  <a-typography-title style="color: white">
                    Save Forest, Save the Future
                  </a-typography-title>
                  <a-typography-title :level="4" style="color: white">
                    Approximately 12 million hectares of forest are destroyed by
                    bushfire each year.
                  </a-typography-title>
                  <a-typography-title :level="4" style="color: white">
                    Our dashboard will assist you in finding the safest hiking
                    areas, allowing you to enjoy outdoor activities worry-free.
                  </a-typography-title>
                  <a-button
                    class="submit"
                    type="primary"
                    v-on:click="router.push('/dashboard')"
                  >
                    Dashboard
                  </a-button>
                </a-typography>
              </div>
              <img class="image" src="../assets/img/home0.jpeg" alt="" />
            </div>
            <div class="image-warp">
              <div class="home-intro">
                <a-typography class="home-intro-content">
                  <a-typography-title style="color: white">
                    Save Forest, Save the Future
                  </a-typography-title>
                  <a-typography-title :level="4" style="color: white">
                    Approximately 12 million hectares of forest are destroyed by
                    bushfire each year.
                  </a-typography-title>
                  <a-typography-title :level="4" style="color: white">
                    Helps you in understanding how forest fires occur and their
                    causes.
                  </a-typography-title>
                  <a-button
                    class="submit"
                    type="primary"
                    v-on:click="router.push('/information')"
                  >
                    Bushfire Information
                  </a-button>
                </a-typography>
              </div>
              <img class="image" src="../assets/img/home1.jpeg" alt="" />
            </div>
            <div class="image-warp">
              <div class="home-intro">
                <a-typography class="home-intro-content">
                  <a-typography-title style="color: white">
                    Save Forest, Save the Future
                  </a-typography-title>
                  <a-typography-title :level="4" style="color: white">
                    Approximately 12 million hectares of forest are destroyed by
                    bushfire each year.
                  </a-typography-title>
                  <a-typography-title :level="4" style="color: white">
                    Are you ready for a bushfire test?
                  </a-typography-title>
                  <a-button
                    class="submit"
                    type="primary"
                    v-on:click="router.push('/quiz')"
                  >
                    Bushfire Knowledge Quiz
                  </a-button>
                </a-typography>
              </div>
              <img class="image" src="../assets/img/home2.jpeg" alt="" />
            </div>
            <div class="image-warp">
              <div class="home-intro">
                <a-typography class="home-intro-content">
                  <a-typography-title style="color: white">
                    Save Forest, Save the Future
                  </a-typography-title>
                  <a-typography-title :level="4" style="color: white">
                    Our dashboard will assist you in finding the safest hiking
                    areas, allowing you to enjoy outdoor activities worry-free.
                  </a-typography-title>
                  <a-button
                    class="submit"
                    type="primary"
                    v-on:click="router.push('/dashboard')"
                  >
                    Dashboard
                  </a-button>
                </a-typography>
              </div>
              <img class="image" src="../assets/img/home3.jpeg" alt="" />
            </div>
            <div class="image-warp">
              <div class="home-intro">
                <a-typography class="home-intro-content">
                  <a-typography-title style="color: white">
                    Save Forest, Save the Future
                  </a-typography-title>
                  <a-typography-title :level="4" style="color: white">
                    Helps you in understanding how forest fires occur and their
                    causes.
                  </a-typography-title>
                  <a-button
                    class="submit"
                    type="primary"
                    v-on:click="router.push('/information')"
                  >
                    Bushfire Information
                  </a-button>
                </a-typography>
              </div>
              <img class="image" src="../assets/img/home4.jpeg" alt="" />
            </div>
            <div class="image-warp">
              <div class="home-intro">
                <a-typography class="home-intro-content">
                  <a-typography-title style="color: white">
                    Save Forest, Save the Future
                  </a-typography-title>
                  <a-typography-title :level="4" style="color: white">
                    Are you ready for a bushfire test?
                  </a-typography-title>
                  <a-button
                    class="submit"
                    type="primary"
                    v-on:click="router.push('/quiz')"
                  >
                    Bushfire Knowledge Quiz
                  </a-button>
                </a-typography>
              </div>
              <img class="image" src="../assets/img/home5.webp" alt="" />
            </div>
          </a-carousel>
          <a-drawer
            height="50%"
            title=""
            placement="bottom"
            :open="entranceShow"
            @close="onEntranceClose"
          >
            <div class="entrance-drawer">
              <a-row class="row">
                <a-col class="card-warp" :span="8">
                  <div class="card-container">
                    <a-card
                      hoverable
                      class="card"
                      @click="router.push('/dashboard')"
                      :bodyStyle="{ flex: 0.3 }"
                    >
                      <template #cover>
                        <div class="card-cover">
                          <img
                            class="card-cover-image"
                            src="../assets/img/homeE1.jpeg"
                          />
                        </div>
                      </template>
                      <a-card-meta title="Dashboard">
                        <template #description>
                          Our dashboard will assist you in finding the safest
                          hiking areas, allowing you to enjoy outdoor activities
                          worry-free.
                        </template>
                      </a-card-meta>
                    </a-card>
                  </div>
                </a-col>
                <a-col class="card-warp" :span="8">
                  <div class="card-container">
                    <a-card
                      hoverable
                      class="card"
                      @click="router.push('/information')"
                      :bodyStyle="{ flex: 0.3 }"
                    >
                      <template #cover>
                        <div class="card-cover">
                          <img
                            class="card-cover-image"
                            src="../assets/img/homeE2.jpeg"
                          />
                        </div>
                      </template>
                      <a-card-meta title="Bushfire Information">
                        <template #description>
                          Helps you in understanding how forest fires occur and
                          their causes.
                        </template>
                      </a-card-meta>
                    </a-card>
                  </div>
                </a-col>
                <a-col class="card-warp" :span="8">
                  <div class="card-container">
                    <a-card
                      hoverable
                      class="card"
                      @click="router.push('/quiz')"
                      :bodyStyle="{ flex: 0.3 }"
                    >
                      <template #cover>
                        <div class="card-cover">
                          <img
                            class="card-cover-image"
                            src="../assets/img/homeE3.jpeg"
                          />
                        </div>
                      </template>
                      <a-card-meta title="Bushfire Knowledge Quiz">
                        <template #description>
                          Are you ready for a bushfire test?
                        </template>
                      </a-card-meta>
                    </a-card>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-drawer>
        </div>
        <div
          class="section"
          style="
            background: radial-gradient(
              ellipse farthest-side at 40% 0%,
              #759f98 100%,
              transparent 100%
            );
          "
        >
          <div
            class="intro"
            style="padding: 40px; height: 100%; justify-content: space-between"
          >
            <div class="intro-top">
              <a-segmented
                class="segmented"
                v-model:value="value"
                :options="data"
              >
                <template #label="{ value: val, title, payload = {} }">
                  <div style="padding: 4px 4px">
                    <template v-if="payload.content">
                      <a-typography>
                        <a-typography-title>
                          {{ payload.content }}
                        </a-typography-title>
                      </a-typography>
                    </template>
                    <a-typography>
                      <a-typography-title :level="3">
                        {{ title }}
                      </a-typography-title>
                    </a-typography>
                  </div>
                </template>
              </a-segmented>
              <a-typography style="padding: 40px 160px">
                <a-typography-title :level="3">
                  {{ data[value].payload.intro }}
                </a-typography-title>
              </a-typography>
            </div>
            <div class="intro-bottom">
              <a-typography style="flex: 1">
                <a-typography-title>
                  Climate change and bushfires
                </a-typography-title>

                <a-typography-title :level="4">
                  Climate change doesn't cause bushfires, but it can make them
                  worse and more frequent.
                </a-typography-title>
                <a-typography-title :level="4">
                  Australia has been experiencing more intense heatwaves and
                  prolonged dry periods that create tinderbox conditions.
                </a-typography-title>
                <a-typography-title :level="4">
                  In the lead-up to the fires of 2019-20, record-breaking
                  temperatures were recorded across the continent throughout
                  December. The average maximum reached 40.9°C and then broken
                  by a temperature of 41.9°C the following day.
                </a-typography-title>
              </a-typography>
              <div class="intro-bottom-image-area">
                <img
                  class="intro-bottom-image"
                  src="../assets/img/introImg.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="intro">
            <a-row class="row">
              <a-col class="card-warp" :span="8">
                <div class="card-container">
                  <a-card hoverable class="card" @click="isOpen1 = true">
                    <template #cover>
                      <div class="card-cover">
                        <img
                          class="card-cover-image"
                          src="../assets/img/homeCard1.png"
                        />
                      </div>
                    </template>
                    <a-card-meta :title="text.card[0].title"> </a-card-meta>
                  </a-card>
                </div>
              </a-col>
              <a-col class="card-warp" :span="8">
                <div class="card-container">
                  <a-card hoverable class="card" @click="isOpen2 = true">
                    <template #cover>
                      <div class="card-cover">
                        <img
                          class="card-cover-image"
                          src="../assets/img/homeCard2.png"
                        />
                      </div>
                    </template>
                    <a-card-meta :title="text.card[1].title"> </a-card-meta>
                  </a-card>
                </div>
              </a-col>
              <a-col class="card-warp" :span="8">
                <div class="card-container">
                  <a-card hoverable class="card" @click="isOpen3 = true">
                    <template #cover>
                      <div class="card-cover">
                        <img
                          class="card-cover-image"
                          src="../assets/img/homeCard3.png"
                        />
                      </div>
                    </template>
                    <a-card-meta :title="text.card[2].title"> </a-card-meta>
                  </a-card>
                </div>
              </a-col>
            </a-row>
            <a-row class="row">
              <a-col class="card-warp" :span="8">
                <div class="card-container">
                  <a-card hoverable class="card" @click="isOpen4 = true">
                    <template #cover>
                      <div class="card-cover">
                        <img
                          class="card-cover-image"
                          src="../assets/img/homeCard4.png"
                        />
                      </div>
                    </template>
                    <a-card-meta :title="text.card[3].title"> </a-card-meta>
                  </a-card>
                </div>
              </a-col>
              <a-col class="card-warp" :span="8">
                <div class="card-container">
                  <a-card hoverable class="card" @click="isOpen5 = true">
                    <template #cover>
                      <div class="card-cover">
                        <img
                          class="card-cover-image"
                          src="../assets/img/homeCard5.png"
                        />
                      </div>
                    </template>
                    <a-card-meta :title="text.card[4].title"> </a-card-meta>
                  </a-card>
                </div>
              </a-col>
              <a-col class="card-warp" :span="8">
                <div class="card-container">
                  <a-card hoverable class="card" @click="handleHelpClick">
                    <template #cover>
                      <div class="card-cover">
                        <img
                          class="card-cover-image"
                          src="../assets/img/homeCard6.png"
                        />
                      </div>
                    </template>
                    <a-card-meta :title="text.card[5].title"> </a-card-meta>
                  </a-card>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </full-page>
    </div>
  </div>
  <a-modal
    v-model:open="isOpen1"
    width="50%"
    :title="text.card[0].title"
    :footer="null"
    :bodyStyle="bodyStyle"
  >
    <a-typography class="home-modal-article">
      <div class="home-modal-content">
        <img width="100%" style="flex: 1" src="../assets/img/homeCard1.png" />
        <a-typography-paragraph
          v-for="(paragraph, index) in text.card[0].p1"
          :key="index"
        >
          {{ paragraph }}
        </a-typography-paragraph>
        <a-typography-paragraph
          v-for="(paragraph, index) in text.card[0].p2"
          :key="index"
        >
          <ul>
            <li>
              <a-typography-text>
                {{ paragraph }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          {{ text.card[0].p3 }}
        </a-typography-paragraph>
        <a-typography-paragraph
          v-for="(paragraph, index) in text.card[0].p4"
          :key="index"
        >
          <ul>
            <li>
              <a-typography-text>
                {{ paragraph }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <a-typography-paragraph
          v-for="(paragraph, index) in text.card[0].p5"
          :key="index"
        >
          {{ paragraph }}
        </a-typography-paragraph>
        <iframe
          width="772"
          height="434.25"
          src="https://www.youtube.com/watch?v=7gT7G63RGTw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </a-typography>
  </a-modal>
  <a-modal
    v-model:open="isOpen2"
    width="50%"
    :title="text.card[1].title"
    :footer="null"
    :bodyStyle="bodyStyle"
  >
    <a-typography class="home-modal-article">
      <div class="home-modal-content">
        <img width="100%" style="flex: 1" src="../assets/img/homeCard2.png" />
        <a-typography-paragraph
          v-for="(paragraph, index) in text.card[1].p1"
          :key="index"
        >
          {{ paragraph }}
        </a-typography-paragraph>
        <a-typography-paragraph
          v-for="(paragraph, index) in text.card[1].p2"
          :key="index"
        >
          <ul>
            <li>
              <a-typography-text>
                {{ paragraph }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          <a-typography-text strong>
            {{ text.card[1].p3[0] }}
          </a-typography-text>
        </a-typography-paragraph>
        <a-typography-paragraph>
          {{ text.card[1].p3[1] }}
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          <a-typography-text strong>
            {{ text.card[1].p4[0] }}
          </a-typography-text>
        </a-typography-paragraph>
        <a-typography-paragraph>
          {{ text.card[1].p4[1] }}
        </a-typography-paragraph>
        <a-typography-paragraph>
          {{ text.card[1].p4[2] }}
        </a-typography-paragraph>
        <a-typography-paragraph
          v-for="(paragraph, index) in text.card[1].p5"
          :key="index"
        >
          <ul>
            <li>
              <a-typography-text>
                {{ paragraph }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <a-typography-paragraph
          v-for="(paragraph, index) in text.card[1].p6"
          :key="index"
        >
          {{ paragraph }}
        </a-typography-paragraph>
        <a-typography-paragraph
          v-for="(paragraph, index) in text.card[1].p7"
          :key="index"
        >
          <ul>
            <li>
              <a-typography-text>
                {{ paragraph }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
      </div>
    </a-typography>
  </a-modal>
  <a-modal
    v-model:open="isOpen3"
    width="50%"
    :title="text.card[2].title"
    :footer="null"
    :bodyStyle="bodyStyle"
  >
    <a-typography class="home-modal-article">
      <div class="home-modal-content">
        <img width="100%" style="flex: 1" src="../assets/img/homeCard3.png" />
        <a-typography-paragraph>
          {{ text.card[2].p1 }}
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          <a-typography-text strong>
            {{ text.card[2].p2[0] }}
          </a-typography-text>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <ul>
            <li>
              <a-typography-text>
                {{ text.card[2].p2[1] }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <ul>
            <li>
              <a-typography-text>
                {{ text.card[2].p2[2] }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          <a-typography-text strong>
            {{ text.card[2].p3[0] }}
          </a-typography-text>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <ul>
            <li>
              <a-typography-text>
                {{ text.card[2].p3[1] }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <ul>
            <li>
              <a-typography-text>
                {{ text.card[2].p3[2] }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          <a-typography-text strong>
            {{ text.card[2].p4[0] }}
          </a-typography-text>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <ul>
            <li>
              <a-typography-text>
                {{ text.card[2].p4[1] }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <ul>
            <li>
              <a-typography-text>
                {{ text.card[2].p4[2] }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          <a-typography-text strong>
            {{ text.card[2].p5[0] }}
          </a-typography-text>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <ul>
            <li>
              <a-typography-text>
                {{ text.card[2].p5[1] }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <ul>
            <li>
              <a-typography-text>
                {{ text.card[2].p5[2] }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          <a-typography-text strong>
            {{ text.card[2].p6[0] }}
          </a-typography-text>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <ul>
            <li>
              <a-typography-text>
                {{ text.card[2].p6[1] }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <ul>
            <li>
              <a-typography-text>
                {{ text.card[2].p6[2] }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          <a-typography-text strong>
            {{ text.card[2].p7[0] }}
          </a-typography-text>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <ul>
            <li>
              <a-typography-text>
                {{ text.card[2].p7[1] }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <ul>
            <li>
              <a-typography-text>
                {{ text.card[2].p7[2] }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <ul>
            <li>
              <a-typography-text>
                {{ text.card[2].p7[3] }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          {{ text.card[2].p8 }}
        </a-typography-paragraph>
      </div>
    </a-typography>
  </a-modal>
  <a-modal
    v-model:open="isOpen4"
    width="50%"
    :title="text.card[3].title"
    :footer="null"
    :bodyStyle="bodyStyle"
  >
    <a-typography class="home-modal-article">
      <div class="home-modal-content">
        <img width="100%" style="flex: 1" src="../assets/img/homeCard4.png" />
        <a-typography-paragraph>
          {{ text.card[3].p1[0] }}
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          <a-typography-text strong>
            {{ text.card[3].p1[1] }}
          </a-typography-text>
        </a-typography-paragraph>
        <a-typography-paragraph
          v-for="(paragraph, index) in text.card[3].p2"
          :key="index"
        >
          <ul>
            <li>
              <a-typography-text>
                {{ paragraph }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          <a-typography-text strong>
            {{ text.card[3].p3 }}
          </a-typography-text>
        </a-typography-paragraph>
        <a-typography-paragraph
          v-for="(paragraph, index) in text.card[3].p4"
          :key="index"
        >
          <ul>
            <li>
              <a-typography-text>
                {{ paragraph }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          <a-typography-text strong>
            {{ text.card[3].p5 }}
          </a-typography-text>
        </a-typography-paragraph>
        <a-typography-paragraph
          v-for="(paragraph, index) in text.card[3].p6"
          :key="index"
        >
          <ul>
            <li>
              <a-typography-text>
                {{ paragraph }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          <a-typography-text strong>
            {{ text.card[3].p7 }}
          </a-typography-text>
        </a-typography-paragraph>
        <a-typography-paragraph
          v-for="(paragraph, index) in text.card[3].p8"
          :key="index"
        >
          <ul>
            <li>
              <a-typography-text>
                {{ paragraph }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          <a-typography-text strong>
            {{ text.card[3].p9 }}
          </a-typography-text>
        </a-typography-paragraph>
        <a-typography-paragraph
          v-for="(paragraph, index) in text.card[3].p10"
          :key="index"
        >
          <ul>
            <li>
              <a-typography-text>
                {{ paragraph }}
              </a-typography-text>
            </li>
          </ul>
        </a-typography-paragraph>
      </div>
    </a-typography>
  </a-modal>
  <a-modal
    v-model:open="isOpen5"
    width="50%"
    :title="text.card[4].title"
    :footer="null"
    :bodyStyle="bodyStyle"
  >
    <a-typography class="home-modal-article">
      <div class="home-modal-content">
        <img width="100%" style="flex: 1" src="../assets/img/homeCard5.png" />
        <a-typography-paragraph>
          {{ text.card[4].p1 }}
        </a-typography-paragraph>
        <br />
        <a-typography-paragraph>
          <a-typography-text strong>
            {{ text.card[4].p2 }}
          </a-typography-text>
        </a-typography-paragraph>
        <blockquote>
          <a-typography-paragraph
            v-for="(paragraph, index) in text.card[4].p3"
            :key="index"
          >
            {{ paragraph }}
          </a-typography-paragraph>
        </blockquote>
      </div>
    </a-typography>
  </a-modal>
</template>
<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: calc(100vh - 64px);
  line-height: calc(100vh - 64px);
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
.intro {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.image {
  position: absolute;
  height: 100%;
  width: 100%;
}
.row {
  display: flex;
  flex: 1;
  width: 100%;
  padding: 20px;
}
.card-warp {
  flex: 1 1 auto;
}
.card-warp + .card-warp {
  margin-left: 20px;
}
.card-container {
  position: relative;
  height: 100%;
  width: 100%;
  height: 350px;
}
.card {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.card :deep(.ant-card-cover) {
  flex: 1 1 auto;
}
.card-cover {
  height: 100%;
  width: 100%;
  position: relative;
}
.card-cover-image {
  position: absolute;
  height: 100%;
  width: 100%;
}
.home-modal-article {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.home-modal-content {
  overflow: auto;
}
.home {
  height: calc(100vh - 64px) !important;
  overflow: hidden;
}
.image-warp {
  position: relative;
  height: calc(100vh - 64px);
  width: 100%;
}
.home-intro {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  pointer-events: none;
}
.home-intro-content {
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.submit {
  position: absolute;
  top: 200px;
  pointer-events: all;
}
.segmented :deep(.ant-segmented-item) {
  flex: 1;
}
.intro-top {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.intro-bottom {
  flex: 1;
  display: flex;
  padding-bottom: 80px;
}
.intro-bottom-image-area {
  flex: 1;
  position: relative;
  padding-left: 20px;
}
.intro-bottom-image {
  position: absolute;
  height: 100%;
  width: calc(100% - 20px);
}
.entrance-drawer {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
