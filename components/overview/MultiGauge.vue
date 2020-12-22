<template>
  <div class="level">
    <div :id="id" style="width: 100%; height: 240px" ></div>
      <!-- <hr class='hr'>
      <v-row>
        <v-col class="flex-card">
          <v-icon  class='mdi mdi-refresh' size="20" color="grey"></v-icon>
          <v-card-subtitle class='card-subtitle'>{{duration}}</v-card-subtitle>
        </v-col>
      </v-row> -->
  </div>
</template>
<script>

export default {
  data() {
    return {
      data2:""
    };
  },
  updated() {
         var option = {
tooltip : {
formatter: "{b} = {c} "
},
toolbox: {
show : true,
feature : {
mark : {show: false},
restore : {show: false},
saveAsImage : {show: false}
}
},
// grid: {
// left: '60',
// right: '200',
// top: '400',
// bottom: '10'
// },
// xAxis: {
// type: 'value'
// },
// yAxis: {
// type: 'value'
// },
series : [
{
name:'Disc',
type:'gauge',
z: 3,
min:0,
max:120,
center:['38%','53.33%'],
radius : '80%',
splitNumber:12,
axisLine: { // 坐标轴线
lineStyle: { // 属性lineStyle控制线条样式
width: 10,
color: [[90/120, '#48b'],[100/120, '#228b22'],[1, '#ff4500']],
},
},
axisTick: { // 坐标轴小标记
length :15, // 属性length控制线长
lineStyle: { // 属性lineStyle控制线条样式
color: 'auto'
}
},
splitLine: { // 分隔线
length :20, // 属性length控制线长
lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
color: 'auto'
}
},
title : {
textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
fontWeight: 'bolder',
fontSize: 20
}
},
detail : {
textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
fontWeight: 'bolder'
}
},
data:[{value: this.disc, name: 'Disc / %'}]
},
{
name:'Temp',
type:'gauge',
z: 3,
min:0,
max:120,
center:['65%','28%'],
radius : '50.666%',
startAngle:140,
endAngle:-55,

          splitNumber:12,
          axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                  width: 10,
                  color: [[90/120, '#48b'],[100/120, '#228b22'],[1, '#ff4500']],
              },
          },
          axisTick: {            // 坐标轴小标记
              length :15,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                  color: 'auto'
              }
          },
          splitLine: {           // 分隔线
              length :20,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                  color: 'auto'
              }
          },
          title : {
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontWeight: 'bolder',
                  fontSize: 20
              }
          },
          detail : {
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontWeight: 'bolder'
              }
          },
          detail : {
              show: false
          },
          data:[{value: this.temperature, name: 'Temp / °C'}]
      },
      {
          name:'Speed',
          type:'gauge',
          center : ['70%', '70.666%'],    // 默认全局居中
          radius : '40.666%',
          min:0,
          max:1,
          startAngle:95,
          endAngle:-135,
          splitNumber:2,
          axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                  color: [[0.4, '#228b22'],[0.6, '#48b'],[1, '#ff4500']],
                  width: 10
              }
          },
          axisTick: {            // 坐标轴小标记
              splitNumber:10,
              length :10,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                  color: 'auto'
              }
          },
          axisLabel: {
              formatter:function(v){
                  switch (v + '') {
                      case '0' : return 'On';
                      case '1' : return 'Off';
                  }
              }
          },
          splitLine: {           // 分隔线
              length :15,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                  color: 'auto'
              }
          },
          title : {
              show: true,
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontWeight: 'bolder',
                  fontSize: 15
              }
          },
          detail : {
              show: false
          },
          data:[{value: this.speed, name: 'Speed'}]
      },
  ]
};

    var myChart = this.$echarts.init(document.getElementById(this.id));

    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },
  mounted() {

       var option = {
tooltip : {
formatter: "{b} = {c} "
},
// toolbox: {
// show : true,
// feature : {
// mark : {show: false},
// restore : {show: false},
// saveAsImage : {show: false}
// }
// },
// grid: {
// left: '60',
// right: '200',
// top: '400',
// bottom: '10'
// },
// xAxis: {
// type: 'value'
// },
// yAxis: {
// type: 'value'
// },
series : [
{
name:'Disc',
type:'gauge',
z: 3,
min:0,
max:120,
center:['38%','53.33%'],
radius : '80%',
splitNumber:12,
axisLine: { // 坐标轴线
lineStyle: { // 属性lineStyle控制线条样式
width: 10,
color: [[90/120, '#48b'],[100/120, '#228b22'],[1, '#ff4500']],
},
},
axisTick: { // 坐标轴小标记
length :15, // 属性length控制线长
lineStyle: { // 属性lineStyle控制线条样式
color: 'auto'
}
},
splitLine: { // 分隔线
length :20, // 属性length控制线长
lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
color: 'auto'
}
},
title : {
textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
fontWeight: 'bolder',
fontSize: 20
}
},
detail : {
textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
fontWeight: 'bolder'
}
},
data:[{value: this.disc, name: 'Disc / %'}]
},
{
name:'Temp',
type:'gauge',
z: 3,
min:0,
max:100,
center:['65%','28%'],
radius : '50.666%',
startAngle:140,
endAngle:-55,

          splitNumber:4,
          axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                  width: 10,
                  color: [[90/120, '#48b'],[100/120, '#228b22'],[1, '#ff4500']],
              },
          },
          axisTick: {            // 坐标轴小标记
              length :15,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                  color: 'auto'
              }
          },
          splitLine: {           // 分隔线
              length :20,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                  color: 'auto'
              }
          },
          title : {
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontWeight: 'bolder',
                  fontSize: 20
              }
          },
          detail : {
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontWeight: 'bolder'
              }
          },
          detail : {
              show: false
          },
          data:[{value: this.temperature, name: 'Temp / °C'}]
      },
      {
          name:'Speed',
          type:'gauge',
          center : ['70%', '70.666%'],    // 默认全局居中
          radius : '40.666%',
          min:0,
          max:3000,
          startAngle:95,
          endAngle:-135,
          splitNumber:3,
          axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                  color: [[0.4, '#228b22'],[0.6, '#48b'],[1, '#ff4500']],
                  width: 10
              }
          },
          axisTick: {            // 坐标轴小标记
              splitNumber:10,
              length :10,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                  color: 'auto'
              }
          },
          axisLabel: {
              formatter:function(v){
                  switch (v + '') {
                      case '0' : return 'On';
                      case '1' : return 'Off';
                  }
              }
          },
          splitLine: {           // 分隔线
              length :15,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                  color: 'auto'
              }
          },
          title : {
              show: true,
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontWeight: 'bolder',
                  fontSize: 15
              }
          },
          detail : {
              show: false
          },
          data:[{value: this.speed, name: 'Speed'}]
      },
  ]
};

    var myChart = this.$echarts.init(document.getElementById(this.id));

    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });

  },

  props: ["id", "disc", "temperature", "speed"],
  components: {},
};
</script>
<style >
.level {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: rgb(243, 243, 243); */
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.flex-card{
  display:flex;
  padding: 0 15px;
}

/* .hr{
  margin: 0 20px;
  border-top: 1px solid rgb(189, 199, 199);
}

.card-subtitle{
  padding-left:20px ;
} */
</style>

