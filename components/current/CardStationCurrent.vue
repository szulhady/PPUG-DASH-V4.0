<template>
  <div>
    <v-row  class='pb-3'>
      <v-col
        v-for="(item, index) in items"
        :key="item.title"
        :cols="item.cols"
        sm="3"
      >
        <v-card @click="console(index)" :id="index" class='card card-color  elevation-12 '>
          <v-img :src="item.image" height="180px"></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-card class='card-color elevation-12 '>
      <v-card-title class='color'>REAL-TIME DATA</v-card-title>
      <v-row class="padding arragement">
        <v-col cols="6" lg="4" class="left"  
        >
          <v-card-subtitle class="center">Dissolved Oxygen</v-card-subtitle>
          <Gauge id="DO" :data="items[index].DO" max="7" unit="mg/L" />
        </v-col>
        <v-col cols="6" lg="4" class="left"  
        >
          <v-card-subtitle class="center">Temperature</v-card-subtitle>
          <Gauge id="TEMP" :data="items[index].TEMP" max="40" unit="°C" />
        </v-col>
        <v-col cols="6" lg="4" class="right">
          <v-card-subtitle class="center">pH</v-card-subtitle>
          <Gauge id="PH" :data="items[index].PH" max="14" unit="unit" />
        </v-col>
        <v-col cols="6" lg="4" class="left ">
          <v-card-subtitle class="center">Salinity</v-card-subtitle>
          <Gauge id="DD" :data="items[index].DD" max="20" unit="ppt" />
        </v-col>
        <v-col cols="6" lg="4" class="right ">
          <v-card-subtitle class="center">Ammonia</v-card-subtitle>
          <Gauge id="NH3" :data="items[index].NH3" max="0.6" unit="mg/L" />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import Gauge from "~/components/current/Gauge";

export default {
  data() {
    return {
      index:"0",
      theme: "blue-theme",
    };
  },

  methods: {
    console: function (index) {
      this.index=index
      const active = document.getElementById(index).classList.add("active");
      for (let i = 0; i <= 3; i++) {
        if (i != index) {
          let deactive = document.getElementById(i).classList.remove("active");
        }
      }
    },

  },
  props: ["items"],
  components: { Gauge },
  mounted() {
    const active = document.getElementById(0).classList.add("active");
  },

};
</script>

<style  scoped>

.center {
  justify-content: center;
  background: #271F40 !important;
  color:#fff !important;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-radius:8px
}

.padding {
  padding: 0 1em;
}

.active {
  background: #64D3E4 !important;
}

.card{
  border-radius: 8px;
}

.card-color{
  /* background: rgb(240,244,230); */
  background: rgb(238,248,248);
  border-radius: 8px;
}

.arragement{
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  /* align-content: space-around; */
}
</style>
