<template>
  <div>
    <h2 class='header'>TRENDS</h2>
      <CardStationTrend :items="items" class="pb-7" />
  </div>
</template>

<script>
import CardStationTrend from "~/components/trend/CardStationTrend";

import { mapState, mapMutations } from "vuex";
export default {

  components: { CardStationTrend},

  computed: {
    ...mapState({
      items: (state) => state.items,
    }),
  },

  // methods: {
  //   ...mapMutations({
  //     generateRandomData: "generateRandomData",
  //     checkWarning:"checkWarning",
  //     countWarning:"countWarning",
  //     getMQTTData:"getMQTTData",
  //     getDuration:"getDuration",
  //     getDaily:"getDaily",
  //     getWeekly:'getWeekly',
  //     getMonthly:'getMonthly'
  //   }),

  //   diff_minutes(dt2,dt1){
  //     var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  //     diff /= 60;
  //     return Math.abs(Math.round(diff));
  //   },

  //   getDataDaily: function (station,sensorVal,indexStation,indexSensor) {
  //     this.$axios
  //     // .$get(`https://ppug2-seaic.herokuapp.com/api/daily/`,{params:{
  //     .$get(`/api/daily/`,{params:{
  //     position:station,
  //     val:sensorVal
  //     }})
  //     .then((response) => {
  //       let data={};
  //       let max=[];
  //       let min=[];
  //       let avg=[];
  //       let hour=[];
  //       response.forEach((item) => {
  //         max.push(item.max);
  //         avg.push(item.avg);
  //         min.push(item.min);
  //         hour.push(item.hour);
  //       });
  //       data={station,indexStation,indexSensor,min,max,avg,hour}
  //       this.getDaily(data)
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },

  //   getDataWeekly: function (station,sensorVal,indexStation,indexSensor) {
  //     this.$axios
  //     // .$get("https://ppug2-seaic.herokuapp.com/api/weekly/",{params:{
  //     .$get("/api/weekly/",{params:{
  //       position:station,
  //       val:sensorVal
  //     }})
  //     .then((response) => {
  //       let data={};
  //       let min=[];
  //       let max=[];
  //       let avg=[];
  //       let day=[];
  //       response.forEach((item) => {
  //         max.push(item.max);
  //         avg.push(item.avg);
  //         min.push(item.min);
  //         day.push(item.day);
  //       });
  //       data={station,indexStation,indexSensor,min,max,avg,day}
  //       this.getWeekly(data)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   },

  //   getDataMonthly: function (station,sensorVal,indexStation,indexSensor) {
  //     this.$axios
  //     // .$get("https://ppug2-seaic.herokuapp.com/api/monthly/",{params:{
  //     .$get("/api/monthly/",{params:{
  //       position:station,
  //       val:sensorVal
  //     }})
  //     .then((response) => {
  //       let data={};
  //       let min=[];
  //       let max=[];
  //       let avg=[];
  //       let month=[];
  //       let monthName=[];

  //       response.forEach((item) => {
  //         max.push(item.max);
  //         avg.push(item.avg);
  //         min.push(item.min);
  //         monthName.push(item.monthname)
  //       });
  //       data={station,indexStation,indexSensor,min,max,avg,monthName}
  //       this.getMonthly(data)
  //       console.log('hi')
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   },

  // },

  //    async created() {
  //   const station=['stationOne','stationTwo','stationThree','stationFour']
  //   const val=['do_val','tmp_val','ph_val','dd_val','dg_val']

  //   // daily
  //   for(let i=0;i<station.length;i++){
  //       for(let j=0;j<val.length;j++){
  //     this.getDataDaily(station[i],val[j],i,j);
  //   }
  //   }

  //   // weekly
  //  for(let i=0;i<station.length;i++){
  //       for(let j=0;j<val.length;j++){
  //     this.getDataWeekly(station[i],val[j],i,j);
  //   }

  //   }
  //   //monthly
  //     for(let i=0;i<station.length;i++){
  //       for(let j=0;j<val.length;j++){
  //     this.getDataMonthly(station[i],val[j],i,j);
  //   }
  //   }
  // },
}
</script>

<style scoped>
.header{
  padding: 20px 0;
}
</style>