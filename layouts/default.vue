<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="side-bar"
    >
    <div >
      <div class='logo-header'>
        <img :src="logo" style="width:90px" >
        <h3 class="logo-brand">{{desc}}</h3>
      </div>
      <hr class="logo-seperator">
    </div>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content >
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="mb-13 ">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
      class="footer-color d-none d-lg-block "
    ><v-row>
      <v-col cols=4>
        <!-- <img width="120" src="Nex-plex-logo-final-v2.png" class="pl-4"> -->
      </v-col>
      <v-col cols=4 class='flex-center'>
        <img width="120" src="Nex-plex-logo-final-v2.png" class="pl-4">
      </v-col>
      <v-col cols=4 class='flex-logo'>
        <!-- <img width="120" src="Nex-plex-logo-final-v2.png" class="pl-4"> -->
      <!-- <span class='d-none d-md-block'>&copy; {{ new Date().getFullYear() }}, product of </span> -->
      <span class='d-none d-md-block italic'>by </span>
      <!-- <img width="120" src="Nex-plex-logo-final-v2.png" class="pl-4"> -->
      <img width="120" src="SEAIC.png" class="pl-4 mr-2">
      <!-- <span class='d-none d-md-block'> AND </span> -->
      <img width="120" src="mhdelima-logo.png" class="pl-3">
      </v-col>
    </v-row>
     
  
    </v-footer>

    <v-footer
      :absolute="!fixed"
      app
      class="footer-color2 d-none d-lg-none d-md-block "
    ><v-row>
      <v-col cols=4>
        <!-- <img width="120" src="Nex-plex-logo-final-v2.png" class="pl-4"> -->
      </v-col>
      <v-col cols=4 class='flex-center'>
        <img width="120" src="Nex-plex-logo-final-v2.png" class="pl-4">
      </v-col>
      <v-col cols=4 class='flex-logo'>
        <!-- <img width="120" src="Nex-plex-logo-final-v2.png" class="pl-4"> -->
      <!-- <span class='d-none d-md-block'>&copy; {{ new Date().getFullYear() }}, product of </span> -->
      <span class='d-none d-md-block italic'>by </span>
      <!-- <img width="120" src="Nex-plex-logo-final-v2.png" class="pl-4"> -->
      <img width="120" src="SEAIC.png" class="pl-4 mr-2">
      <!-- <span class='d-none d-md-block'> AND </span> -->
      <img width="120" src="mhdelima-logo.png" class="pl-3">
      </v-col>
    </v-row>
     
  
    </v-footer>

    <v-footer
      :absolute="!fixed"
      app
      class="footer-color2 d-none d-md-none d-sm-block"
    ><v-row>
      <v-col cols=4 class='sm'>
        <!-- <img width="120" src="Nex-plex-logo-final-v2.png" class="pl-4"> -->
      </v-col>
      <v-col cols=4 class='flex-center'>
        <img width="120" src="Nex-plex-logo-final-v2.png" class="pl-4">
      </v-col>
      <v-col cols=4 class='flex-logo sm'>
      <span class='d-none d-md-block italic'>by </span>
      <img width="100" src="SEAIC.png" class="pl-4 mr-2">
      <img width="100" src="mhdelima-logo.png" class="pl-3">
      </v-col>
    </v-row>
     
  
    </v-footer>

    
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'OVERVIEW',
          to: '/'
        },
        {
          icon: 'mdi-chart-arc',
          title: 'CURRENT',
          to: '/current'
        },
        {
          icon: 'mdi-chart-areaspline',
          title: 'TRENDS',
          to: '/trend'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'DASHBOARD',
      realTime:"",
      loaded:false,
      loadedKolam1:false,
      loadedKolam2:false,
      loadedKolam3:false,
      loadedKolam4:false,
      loadedServer:false
    }
  },

  methods: {
    ...mapMutations({
      generateRandomData: "generateRandomData",
      checkWarning:"checkWarning",
      countWarning:"countWarning",
      getMQTTData:"getMQTTData",
      getMQTTDataEach:"getMQTTDataEach",
      getServerHealth: "getServerHealth",
      getDuration:"getDuration",
      getDurationServer:"getDurationServer",
      getDuration1:"getDuration1",
      getDuration2:"getDuration2",
      getDuration3:"getDuration3",
      getDuration4:"getDuration4",
      getDaily:"getDaily",
      getWeekly:'getWeekly',
      getMonthly:'getMonthly',
      getCurrentDataArray:'getCurrentDataArray',
      getCurrentTimeArray:"getCurrentTimeArray",

    }),
        ...mapState({
      // arrayTime :(state) => state.arrayTime,
      // itemsState :(state)=>state.items,
      // time1 :(state)=>state.time1,
      // time2 :(state)=>state.time2,
      // time3 :(state)=>state.time3,
      // time4 :(state)=>state.time4,
      // durationTimeArray : (state)=>state.durationTimeArray
    }),

    removeNull(array){
      return array.filter(x=> x!==null)
    },

    diff_minutes(dt2,dt1){
      var diff = (dt2.getTime() - dt1.getTime()) / 1000;
      diff /= 60;
      return Math.abs(Math.round(diff));
    },

    adddata: function (index) {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);
      this.realTime = h + ":" + m + ":" + s;
      const data={"index":index,"realTime":this.realTime}
      this.getCurrentTimeArray(data)
    },

    getDataDaily: function (station,sensorVal,indexStation,indexSensor) {
      this.$axios
      .$get(`https://ppug-seaic.herokuapp.com/api/daily/`,{params:{
      // .$get(`/api/daily/`,{params:{
      position:station,
      val:sensorVal
      }})
      .then((response) => {
        let data={};
        let max=[];
        let min=[];
        let avg=[];
        let hour=[];
        response.forEach((item) => {
          max.push(item.max);
          avg.push(item.avg);
          min.push(item.min);
          hour.push(item.hour);
        });
        data={station,indexStation,indexSensor,min,max,avg,hour}
        this.getDaily(data)
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getDataWeekly: function (station,sensorVal,indexStation,indexSensor) {
      this.$axios
      .$get("https://ppug-seaic.herokuapp.com/api/weekly/",{params:{
      // .$get("/api/weekly/",{params:{
        position:station,
        val:sensorVal
      }})
      .then((response) => {
        let data={};
        let min=[];
        let max=[];
        let avg=[];
        let day=[];
        response.forEach((item) => {
          max.push(item.max);
          avg.push(item.avg);
          min.push(item.min);
          day.push(item.day);
        });
        data={station,indexStation,indexSensor,min,max,avg,day}
        this.getWeekly(data)
      })
      .catch((error) => {
        console.log(error);
      });
    },

    getDataMonthly: function (station,sensorVal,indexStation,indexSensor) {
      this.$axios
      .$get("https://ppug-seaic.herokuapp.com/api/monthly/",{params:{
      // .$get("/api/monthly/",{params:{
        position:station,
        val:sensorVal
      }})
      .then((response) => {
        let data={};
        let min=[];
        let max=[];
        let avg=[];
        let month=[];
        let monthName=[];

        response.forEach((item) => {
          max.push(item.max);
          avg.push(item.avg);
          min.push(item.min);
          monthName.push(item.monthname)
        });
        data={station,indexStation,indexSensor,min,max,avg,monthName}
        this.getMonthly(data)
      })
      .catch((error) => {
        console.log(error);
      });
    },

  },

   computed: {
    ...mapState({
      logo: (state) => state.logoImg,
      desc: (state) => state.logoDesc,
      arrayTime: (state) => state.arrayTime,
      time1 :(state)=>state.time1,
      time2 :(state)=>state.time2,
      time3 :(state)=>state.time3,
      time4 :(state)=>state.time4,
      durationTimeArray : (state)=>state.durationTimeArray
    }),
  },

   async mounted() {

         this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  
    // this.currentTimeKolam1=new Date()
    // this.currentTimeKolam2=new Date()
    // this.currentTimeKolam3=new Date()
    // this.currentTimeKolam4=new Date()
    this.timeServer=new Date()
    this.timeKolam1=new Date()
    // this.time1=new Date()
    // this.time2=new Date()
    // this.time3=new Date()
    // this.time4=new Date()
    this.timeKolam2=new Date()
    this.timeKolam3=new Date()
    this.timeKolam4=new Date()

    this.$mqtt = await this.$mqtt;
    console.log(this.$mqtt);
    this.$mqtt.subscribe("ppug/server/stats");
    this.$mqtt.subscribe("ppug/kolam1");
    this.$mqtt.subscribe("ppug/kolam2");
    this.$mqtt.subscribe("ppug/kolam3");
    this.$mqtt.subscribe("ppug/kolam4");

    //KOLAM 1
    this.$mqtt.on("message", (topic, message, packet) => {
      // Your code to deal with packets arrived
      if (packet.topic === "ppug/kolam1") {
        // this.timeKolam1=new Date()
        this.getMQTTDataEach(message)
        this.checkWarning(message)
        this.countWarning()
        this.currentTimeKolam1=new Date()
        // this.currentTimeKolam1=this.timeKolam1

        const val=['do_val','tmp_val','ph_val','dd_val','dg_val']
        // //currentTrend
          for(let j=0;j<val.length;j++){
            let sensor=val[j]
            let indexStation=0
            let indexSensor=j
            let data={sensor,indexStation,indexSensor}
            this.getCurrentDataArray(data);
          }
        this.adddata(0)
        this.loadedKolam1=true

      }
    });

    //KOLAM 2
      this.$mqtt.on("message", (topic, message, packet) => {
      // Your code to deal with packets arrived
      if (packet.topic === "ppug/kolam2") {
        this.getMQTTDataEach(message)
        this.checkWarning(message)
        this.countWarning()
        this.currentTimeKolam2=new Date()

        const val=['do_val','tmp_val','ph_val','dd_val','dg_val']
        // //currentTrend
          for(let j=0;j<val.length;j++){
            let sensor=val[j]
            let indexStation=1
            let indexSensor=j
            let data={sensor,indexStation,indexSensor}
            this.getCurrentDataArray(data);
          }
        this.adddata(1)
        this.loadedKolam2=true
  
      }
    });

    //KOLAM 3
      this.$mqtt.on("message", (topic, message, packet) => {
      // Your code to deal with packets arrived
      if (packet.topic === "ppug/kolam3") {
        this.getMQTTDataEach(message)
        this.checkWarning(message)
        this.countWarning()
        this.currentTimeKolam3=new Date()

        const val=['do_val','tmp_val','ph_val','dd_val','dg_val']
        // //currentTrend
          for(let j=0;j<val.length;j++){
            let sensor=val[j]
            let indexStation=2
            let indexSensor=j
            let data={sensor,indexStation,indexSensor}
            this.getCurrentDataArray(data);
          }
        this.adddata(2)
        this.loadedKolam3=true
      }
    });

    //KOLAM 4
        this.$mqtt.on("message", (topic, message, packet) => {
      // Your code to deal with packets arrived
      if (packet.topic === "ppug/kolam4") {
         this.getMQTTDataEach(message)
        this.checkWarning(message)
        this.countWarning()
        this.currentTimeKolam4=new Date()

        const val=['do_val','tmp_val','ph_val','dd_val','dg_val']
        // //currentTrend
          for(let j=0;j<val.length;j++){
            let sensor=val[j]
            let indexStation=3
            let indexSensor=j
            let data={sensor,indexStation,indexSensor}
            this.getCurrentDataArray(data);
          }
        this.adddata(3)
        this.loadedKolam4=true
      }
    });

    this.$mqtt.on("message", (topic, message, packet) => {
      // Your code to deal with packets arrived
      if (packet.topic === "ppug/server/stats") {
        // console.log(message)
        this.getServerHealth(message)
        this.currentTimeServer=new Date()
        this.loadedServer=true
      }
    });
  },

    async created() {
    const station=['stationOne','stationTwo','stationThree','stationFour']
    const val=['do_val','tmp_val','ph_val','dd_val','dg_val']

    // daily
    for(let i=0;i<station.length;i++){
        for(let j=0;j<val.length;j++){
      this.getDataDaily(station[i],val[j],i,j);
    }
    }

    // weekly
   for(let i=0;i<station.length;i++){
        for(let j=0;j<val.length;j++){
      this.getDataWeekly(station[i],val[j],i,j);
    }

    }
    //monthly
      for(let i=0;i<station.length;i++){
        for(let j=0;j<val.length;j++){
      this.getDataMonthly(station[i],val[j],i,j);
    }
    }
  },

watch:{
  // loaded:function(){
  //   if(this.loaded==true){
  //     setInterval(() => {
  //       this.time=new Date()
  //       this.getDuration(this.diff_minutes(this.time, this.currentTime));
  //     }, 1500);
  //     }
  //  },

  loadedKolam1:function(){
    if(this.loadedKolam1==true){
      this.getDuration1(0)
      setInterval(() => {
        this.timeKolam1=new Date()
        let durationTime=this.diff_minutes(this.timeKolam1, this.currentTimeKolam1)
        this.getDuration1(durationTime)
        // this.getDuration(this.diff_minutes(this.timeKolam1, this.currentTimeKolam1))
        this.durationTimeArray[0]=durationTime
        this.durationTimeArray2=this.removeNull(this.durationTimeArray)
        // console.log(this.durationTimeArray2)
        this.getDuration(Math.min(...this.durationTimeArray2))
      }, 1500);
      }
   },

  loadedKolam2:function(){
    if(this.loadedKolam2==true){
      this.getDuration2(0)
      setInterval(() => {
        this.timeKolam2=new Date()
        let durationTime=this.diff_minutes(this.timeKolam2, this.currentTimeKolam2)
        this.getDuration2(durationTime)
        // this.getDuration(this.diff_minutes(this.timeKolam2, this.currentTimeKolam2))
        this.durationTimeArray[1]=durationTime
        this.durationTimeArray2=this.removeNull(this.durationTimeArray)
        // console.log(this.durationTimeArray2)
        this.getDuration(Math.min(...this.durationTimeArray2))
      }, 1500);
      }
   },
  loadedKolam3:function(){
    if(this.loadedKolam3==true){
      this.getDuration3(0)
      setInterval(() => {
        this.timeKolam3=new Date()
        let durationTime=this.diff_minutes(this.timeKolam3, this.currentTimeKolam3)
        this.getDuration3(durationTime)
        this.durationTimeArray[2]=durationTime
        this.durationTimeArray2=this.removeNull(this.durationTimeArray)
        // console.log(this.durationTimeArray2)
        this.getDuration(Math.min(...this.durationTimeArray2))
      }, 1500);
      }
   },

  loadedKolam4:function(){
    if(this.loadedKolam4==true){
      this.getDuration4(0)
      setInterval(() => {
        this.timeKolam4=new Date()
        let durationTime=this.diff_minutes(this.timeKolam4, this.currentTimeKolam4)
        this.getDuration4(durationTime)
        this.durationTimeArray[3]=durationTime
        
        // this.durationTimeArray.filter(x=>{ return x!==null})
        this.durationTimeArray2=this.removeNull(this.durationTimeArray)
        // console.log(this.durationTimeArray2)
        this.getDuration(Math.min(...this.durationTimeArray2))
      }, 1500);
      }
   },

  loadedServer:function(){
    if(this.loadedServer==true){
      this.getDurationServer(0)
      setInterval(() => {
        this.timeServer=new Date()
        let durationTime=this.diff_minutes(this.timeServer, this.currentTimeServer)
        this.getDurationServer(durationTime)
        // this.durationTimeArray[3]=durationTime
        
        // this.durationTimeArray.filter(x=>{ return x!==null})
        // this.durationTimeArray2=this.removeNull(this.durationTimeArray)
        // console.log(this.durationTimeArray2)
        // this.getDuration(Math.min(...this.durationTimeArray2))
      }, 1500);
      }
   }
  }
}
</script>


<style >

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.v-application{
  /* background:#80CED7 !important; */
    background: rgb(218, 226, 222)!important;
    /* background: rgb(217,224,199)!important; */
}

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background: rgb(204,221,221);
}

.header{
  margin-left:30px ;
  color:rgb(102, 102, 102)
}

.color{
  color:rgb(102, 102, 102);
  font-size: 1rem!important;
}

/* Side bar */
.logo-header{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}

.logo-brand{
  padding-left: 15px;
  font-size: 1rem;
}

.logo-seperator{
  margin: 10px 30px;
}

.side-bar{
  background: #46808a !important;
   /* background: #271F40 !important; */
  /* background: #5e6b7e !important; */
  color:#F0F4E6!important;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  max-height:100% !important;
}

.v-list-item .v-list-item__title{
  color:#F0F2F0 !important;
  font-size: 0.9rem;
  margin: 12px 0 ;
}

 i.v-icon.v-icon {
  color:#F0F2F0;
  font-size: 1.5rem;
  padding-left: 20px ;
} 

 .v-list-item--active .v-list-item__title {
  /* color: #bbc718 !important; */
  /* color: #64D3E4 !important; */
    color: #64e0e4 !important;
}


.v-list-item--active{
  background:  #4e8e99 !important;
    /* background: #2b2246 !important; */
  /* background: #6a778b !important; */
  opacity: 1;
}

.v-list-item--active .v-list-item__action{
  color:   #64D3E4 !important;
}
/* End of side-bar */

.container{
  padding: 0 12px !important; 
}

.col-4{
  padding:0 12px
}

.v-main__wrap{
    margin: 0 10px;
}

/* Table */
tbody tr:nth-of-type(even) {
  /* background-color:  rgb(240,244,230); */
  /* background-color: rgb(238,248,248); */
   background-color: rgb(255, 255, 255);
}

tbody tr:nth-of-type(odd) {
     background-color: rgb(238,248,248);
  
}
.v-data-table__wrapper{
  border-bottom-left-radius:8px!important ;
  border-bottom-right-radius:8px!important ;
}

.v-data-table-header{
  border-top-left-radius:8px!important ;
  border-top-right-radius:8px!important ;
  background-color: rgb(255, 255, 255);
   /* background-color: rgb(238,248,248); */
}
/* End of table */

.footer-color{
  border-top:rgb(184, 184, 184) solid 1px !important;
  background: rgb(218, 226, 222)!important;
    /* background: red!important; */
  /* background: rgb(217,224,199)!important; */
  display: flex;
  /* justify-content: flex-end; */
  font-size: 0.8rem;
  padding-left: 250px;
}

.footer-color2{
  border-top:rgb(184, 184, 184) solid 1px !important;
  background: rgb(218, 226, 222)!important;
    /* background: red!important; */
  /* background: rgb(217,224,199)!important; */
  display: flex;
  /* justify-content: flex-end; */
  font-size: 0.8rem;

}

.flex-center{
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-logo{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.italic{
  font-style: italic;
}

.sm{
  display: flex;
  justify-content: center;
}


</style>