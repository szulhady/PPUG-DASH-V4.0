<template>
  <div>
    <v-card class="px-0 py-0 mx-0 my-0 card elevation-10">
      <v-card-subtitle class="header-card">{{ position }}</v-card-subtitle>
      <v-row class="flex-flow" no-gutters>
        <v-col md=2 cols="4">
          <v-card-subtitle class="sensor center text-center textOne"><span>DO</span></v-card-subtitle>
          <v-card-title class="center2" :class="classDO ? 'high' : 'low'">{{ DO }}</v-card-title>
          <v-card-subtitle class="center bottom">mg/L</v-card-subtitle>
        </v-col>
        <v-col md=2 cols="4">
          <v-card-subtitle class="sensor center textTwo"><span>Temp</span></v-card-subtitle>
          <v-card-title class="center2" :class="classTEMP ? 'high' : 'low'">{{ TEMP }}</v-card-title>
          <v-card-subtitle class="center bottom">°C</v-card-subtitle>
        </v-col>
        <v-col md=2 cols="4">
          <v-card-subtitle class="sensor center textThree"><span>pH</span></v-card-subtitle>
          <v-card-title class="center2" :class="classPH ? 'high' : 'low'">{{ PH }}</v-card-title>
          <v-card-subtitle class="center bottom">unit</v-card-subtitle>
        </v-col>
        <v-col md=2 cols="4">
          <v-card-subtitle class="sensor center textFour"><span>PSU</span></v-card-subtitle>
          <v-card-title class="center2" :class="classDD ? 'high' : 'low'">{{ DD }}</v-card-title>
          <v-card-subtitle class="center bottom">ppt</v-card-subtitle>
        </v-col>
        <v-col md=2 cols="4">
          <v-card-subtitle class="sensor center textFive"><span>NH4</span></v-card-subtitle>
          <v-card-title class="center2" :class="classNH3 ? 'high' : 'low'">{{ NH3 }}</v-card-title>
          <v-card-subtitle class="center bottom">mg/L</v-card-subtitle>
        </v-col>
      </v-row>
      <hr class='hr'>
          <v-row>
              <v-col class="flex-card">
                <v-icon  class='mdi mdi-refresh' size="20" color="grey"></v-icon>
                <v-card-subtitle class='card-subtitle'>{{duration}}</v-card-subtitle>
              </v-col>
          </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState} from "vuex";
export default {
  data() {
    return {
      isDOHigh:true
    };
  },
  props: ["position", "DO","TEMP", "PH", "NH3", "DD","classDO","classTEMP","classPH","classDD","classNH3","duration"],
};
</script>

<style scoped>

.low{
  color: black;
    font:normal;
}
.high{
  color:rgb(255, 10, 10);
  font:bold;
}

.sensor {
  margin: 0;
  min-height: 80px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.center2 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  padding: 0 5px;
}

.card {
  background-color: rgb(237, 248, 246) !important;
   /* background-color: rgb(241, 241, 241) !important; */
    border-radius: 5px!important;
}

.v-card__subtitle{
  padding-top: 0!important;
  padding-bottom: 0!important;
}

.v-card__title{
  padding-top: 0!important;
  padding-bottom: 0!important;
}

.header-card{
  background: #271F40 !important;
  opacity: 0.9;
  color: #fff!important;
  padding-top: 16px!important;
  padding-bottom: 16px!important;
}

.bottom{
  padding-top: 20px!important;
  padding-bottom: 16px!important;
}

.hr{
  margin: 0 20px;
  border-top: 1px solid rgb(189, 199, 199);
}

.card-subtitle{
  padding-left:20px ;
}

.flex-card{
  display:flex;
  padding: 12px 15px;
}

.flex-flow{
  display: flex;
  justify-content: space-around
    /* justify-content: center */
}

/* Dissolved Oxygen */
.textOne:hover span{
  display: none;
}

.textOne:hover:after{
  content:"Dissolved Oxygen";
  position: absolute;
  font-style: italic;
  font-weight: bold;
  font-size:1.1em;
}

/* Temperature */
.textTwo:hover span{
  display: none;
}

.textTwo:hover:after{
  content:"Temperature";
  position: absolute;
  font-style: italic;
  font-weight: bold;
  font-size:1.1em;
}

/* pH */
.textThree:hover span{
  display: none;
}

.textThree:hover:after{
  content:"pH";
  position: absolute;
  font-style: italic;
  font-weight: bold;
  font-size:1.1em;
}

/* Salinity */
.textFour:hover span{
  display: none;
}

.textFour:hover:after{
  content:"Salinity";
  position: absolute;
  font-style: italic;
  font-weight: bold;
  font-size:1.1em;
}

/* Ammonia */
.textFive:hover span{
  display: none;
}

.textFive:hover:after{
  content:"Ammonia";
  position: absolute;
  font-style: italic;
  font-weight: bold;
  font-size:1.1em;
}


</style>