<script lang="ts" setup>
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
const store = useStore();
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
      console.log(fullpage.value.$el);
      fullpage.value.$el.style.setProperty(
        "transform",
        `translate3d(0px, calc(-100vh + 64px), 0px)`
      );
    }
  },
});
const router = useRouter();
const isOpen1 = ref(false);
const isOpen2 = ref(false);
const isOpen3 = ref(false);
const isOpen4 = ref(false);
const isOpen5 = ref(false);
const bodyStyle = { height: "80vh" };
function handleHelpClick() {
  router.push("/help");
}
function handleInformationClick() {
  router.push("/information");
}
</script>

<template>
  <div class="home">
    <div>
      <full-page :options="options" id="fullpage" ref="fullpage">
        <div class="section">
          <div class="home-intro">
            <a-typography class="home-intro-content">
              <a-typography-title style="color: white"
                >Welcome to GreenGuardian!</a-typography-title
              >
              <a-typography-title :level="4" style="color: white">
                Your go-to resource for staying safe and knowledgeable about
                bushfires and their link to climate change.
              </a-typography-title>
              <a-button
                class="submit"
                type="primary"
                v-on:click="handleInformationClick"
              >
                What is bushfire?
              </a-button>
            </a-typography>
          </div>
          <a-carousel arrows>
            <template #prevArrow>
              <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                <left-circle-outlined />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow" style="right: 10px">
                <right-circle-outlined />
              </div>
            </template>
            <div class="image-warp">
              <img class="image" src="../assets/img/home0.jpeg" alt="" />
            </div>
            <div class="image-warp">
              <img class="image" src="../assets/img/home1.jpeg" alt="" />
            </div>
            <div class="image-warp">
              <img class="image" src="../assets/img/home2.jpeg" alt="" />
            </div>
            <div class="image-warp">
              <img class="image" src="../assets/img/home3.jpeg" alt="" />
            </div>
            <div class="image-warp">
              <img class="image" src="../assets/img/home4.jpeg" alt="" />
            </div>
            <div class="image-warp">
              <img class="image" src="../assets/img/home5.webp" alt="" />
            </div>
          </a-carousel>
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
}
.submit {
  position: absolute;
  top: 200px;
  pointer-events: all;
}
</style>
