<script lang="ts" setup>
import News from './News.vue'
// import Quiz from '.'
import axios from '../axios'
import {onMounted, onUpdated, ref} from "vue"
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css/pagination' // 轮播图底面的小圆点
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules'
import pic1 from "../assets/img/home1.jpeg"
import pic2 from "../assets/img/home2.jpeg"
import pic3 from "../assets/img/home3.jpeg"
import pic4 from "../assets/img/home4.jpeg"
import logo from "../assets/img/logo.jpeg"

import 'swiper/css';
import 'swiper/css/bundle';

import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';

const newsList = ref([])

const modules = [Autoplay, Pagination, Scrollbar]

onMounted(() => {
  // axios.get("/api/news/list").then((res) => {
  //   console.log(res)
  //   newsList.value = res.data
  // })

})
onUpdated(() => {
  console.log('newsList', newsList)
})
const listData = [];

const options = {
  // licenseKey: 'YOUR_KEY_HERE',
  menu: '#menu',
  controlArrows: false
  // anchors: ['page1', 'page2', 'page3'],
  // sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
};

</script>

<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
              <div class="slide"><img class="img" :src="pic1" /></div>

        <!-- <swiper
          :modules="modules"
          :loop="true"
          :slides-per-view="1"
          :space-between="50"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          class="swiperBox"
        >
            <swiper-slide>
              <div class="slide"><img class="img" :src="pic1" /></div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide"><img class="img" :src="pic2" /></div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide"><img class="img" :src="pic3" /></div>
            </swiper-slide> -->
            <!-- <div class="swiper-button-prev" @click.stop="prevEl(item, index)" />
            <div class="swiper-button-next" @click.stop="nextEl" /> -->
            <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
          <!-- </swiper> -->
          <div class="content-container">
            <div>
              <img :src="logo" class="logo"/>
              <span class="title">GreenGuardian</span>
            </div>
            <div class="content">
              Welcome to GreenGuardian, where your journey to combat climate change and reduce bushfire risks begins. Dive into our suite of tools designed to educate, engage, and empower you to make a real difference. Together, we can shape a sustainable future.
            </div>

          </div>
      </div>
      <div class="section">
        <div class="slide"><img class="img" :src="pic2" /></div>
          <div class="content-container">
            <div class="section-title">
              Public Awareness and Regulation
            </div>
            <div class="subtitle">1.Enhance Public Awareness: </div>
            <div class="content">Disseminate forest fire prevention knowledge through various media and activities to raise public awareness of fire prevention.</div>
            <div class="subtitle">2.Establish Strict Regulations: </div>
            <div class="content">Develop and improve forest fire prevention laws and regulations, clearly defining the responsibilities and obligations for fire prevention.</div>
            <div class="subtitle">3.Professional Training: </div>
            <div class="content">Provide professional training for forest managers, firefighters, and others to enhance their fire prevention and response capabilities.</div>
          </div>
      </div>
      <div class="section">
        <div class="slide"><img class="img" :src="pic3" /></div>
        <div class="content-container">
            <div class="section-title">
              Monitoring and Early Warning Systems
            </div>
            <div class="subtitle">1.Establish Monitoring Networks: </div>
            <div class="content">Use satellites, drones, observation towers, and other technological means to monitor forests around the clock.</div>
            <div class="subtitle">2.Develop Early Warning Systems: </div>
            <div class="content">Based on meteorological conditions and forest dryness, develop and utilize fire hazard warning systems.</div>
            <div class="subtitle">3.Timely Information Dissemination:  </div>
            <div class="content"> Ensure that fire warning information can be quickly communicated to relevant personnel and the public.</div>
          </div>
      </div>
      <div class="section">
        <div class="slide"><img class="img" :src="pic4" /></div>
        <div class="content-container">
            <div class="section-title">
              Forest Management
            </div>
            <div class="subtitle">1.Clear Deadwood and Fallen Leaves:</div>
            <div class="content">1.Regularly clear deadwood, fallen leaves, and other combustibles from the forest floor to reduce fire sources.</div>
            <div class="subtitle">2.Vegetation Management:</div>
            <div class="content">2.Reduce the risk of fires within forests by scientifically planting and adjusting the vegetation structure.</div>
            <div class="subtitle">3.Manage Fire Sources:  </div>
            <div class="content"> 3.trictly control human-made fire sources, such as campfires and agricultural burning, especially during high-risk periods.</div>
          </div>
      </div>
    </full-page>

  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}
.logo {
  width:30px;
  height: 30px;
}
.content-container {
    position: absolute;

    min-width: 400px;
    max-width: 700px;
    /* height: 50px; */
    background: rgba(255, 255, 255, 0.5);
    /* top: 300px;
    left: 150px; */
    left: 50%;
    top:50%;
    transform:translate(-50%,-50%);
    z-index: 10;
    padding: 20px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
}
.content {
  font-size: 15px;
  /* font-weight: bold; */
}
.swiper {
  width: 100%;
  height: 100vh;
  background-color: white;
  /* display: flex; */
  overflow: hidden;
}
.img {
  width: 100%;
  height: 100%;
  object-fit:cover;
}
.section-title {
  font-size: 18px;
  font-weight: bolder;
}
.subtitle {
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
}
</style>