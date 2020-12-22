<template>
    <div class="level">
    <div :id="id" style="width: 100%; height: 240px" :disc="disc" :speed="speed" :temperature="temperature"></div>
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
  // data () {
  //   return {
  //     option : {
  //       tooltip: {
  //       formatter: "{a} <br/>{c} {b}"
  //       },
  //       series : [
  //         {
  //           name: 'Disc',
  //           type: 'gauge',
  //           z: 3,
  //           min: 0,
  //           max: 100,
  //           splitNumber: 10,
  //           center: ['35%', '50%'],    // 默认全局居中
  //           radius: '90%',
  //           axisLine: {            // 坐标轴线
  //             lineStyle: {       // 属性lineStyle控制线条样式
  //             width: 10
  //             }
  //           },
  //           axisTick: {            // 坐标轴小标记
  //             length: 15,        // 属性length控制线长
  //             lineStyle: {       // 属性lineStyle控制线条样式
  //               color: 'auto'
  //             }
  //           },
  //           splitLine: {           // 分隔线
  //             length: 20,         // 属性length控制线长
  //             lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
  //               color: 'auto'
  //             }
  //           },
  //           axisLabel: {
  //             // backgroundColor: 'auto',
  //             borderRadius: 2,
  //             color: '#333',
  //             padding: 3,
  //             // textShadowBlur: 2,
  //             // textShadowOffsetX: 1,
  //             textShadowOffsetY: 1,
  //             textShadowColor: '#222'
  //           },
  //           title: {
  //              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
  //             // fontWeight: 'bolder',
  //             fontSize: 16,
  //             // fontStyle: 'italic',
  //             padding: [
  //               // 280,  // up
  //               10, // right
  //               5,  // down
  //               10, // left
  //             ]
  //           },
  //           detail: {
  //             show: false
  //           },
  //           data: [{value: this.server.disc, name: 'Disc'}]
  //         },
  //         {
  //           name: 'Temperature',
  //           type: 'gauge',
  //           center: ['75%', '45%'],    // 默认全局居中
  //           radius: '70%',
  //           min: 0,
  //           max: 100,
  //           startAngle: 135,
  //           endAngle: 45,
  //           splitNumber: 2,
  //           axisLine: {            // 坐标轴线
  //             lineStyle: {       // 属性lineStyle控制线条样式
  //               width: 8
  //             }
  //           },
  //           axisTick: {            // 坐标轴小标记
  //             splitNumber: 5,
  //             length: 10,        // 属性length控制线长
  //             lineStyle: {        // 属性lineStyle控制线条样式
  //               color: 'auto'
  //             }
  //           },
  //           title: {
  //             // 其余属性默认使用全局文本样式，详见TEXTSTYLE
  //             // fontWeight: 'bolder',
  //             fontSize: 16,
  //             // fontStyle: 'italic',
  //             padding: [
  //               5,  // up
  //               10, // right
  //               130,  // down
  //               10, // left
  //             ]
  //           },
  //           axisLabel: {
  //             // backgroundColor: 'auto',
  //             borderRadius: 2,
  //             color: '#333',
  //             padding: 3,
  //             // textShadowBlur: 2,
  //             // textShadowOffsetX: 1,
  //             textShadowOffsetY: 1,
  //             textShadowColor: '#222'
  //           },
  //           splitLine: {           // 分隔线
  //             length: 15,         // 属性length控制线长
  //             lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
  //               color: 'auto'
  //             }
  //           },
  //           pointer: {
  //             width: 2
  //           },
  //           detail: {
  //             show: false
  //           },
  //           data: [{value: this.server.temperature, name: 'Temperature'}]
  //         },
  //         {
  //           name: 'Speed',
  //           type: 'gauge',
  //           center: ['75%', '45%'],    // 默认全局居中
  //           radius: '70%',
  //           min: 0,
  //           max: 3000,
  //           startAngle: 315,
  //           endAngle: 225,
  //           splitNumber: 2,
  //           axisLine: {            // 坐标轴线
  //             lineStyle: {       // 属性lineStyle控制线条样式
  //               width: 8
  //             }
  //           },
  //           axisTick: {            // 坐标轴小标记
  //             show: false
  //           },
  //           splitLine: {           // 分隔线
  //             length: 15,         // 属性length控制线长
  //             lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
  //               color: 'auto'
  //             }
  //           },
  //           pointer: {
  //             width:2
  //           },
  //           title: {
  //             // 其余属性默认使用全局文本样式，详见TEXTSTYLE
  //             // fontWeight: 'bolder',
  //             fontSize: 16,
  //             // fontStyle: 'italic',
  //             padding: [
  //               400,  // up
  //               10, // right
  //               130,  // down
  //               10, // left
  //             ]
  //           },
  //           detail: {
  //             show: false
  //           },
  //           data: [{value: this.server.speed, name: 'Speed'}]
  //         }
  //       ]
  //     }
  //   }
  // },
  mounted () {
    const option = {
        tooltip: {
        formatter: "{a} <br/>{c} {b}"
        },
        series : [
          {
            name: 'Disc',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            splitNumber: 10,
            center: ['35%', '50%'],    // 默认全局居中
            radius: '90%',
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
              width: 10
              }
            },
            axisTick: {            // 坐标轴小标记
              length: 15,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: {           // 分隔线
              length: 20,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            axisLabel: {
              // backgroundColor: 'auto',
              borderRadius: 2,
              color: '#333',
              padding: 3,
              // textShadowBlur: 2,
              // textShadowOffsetX: 1,
              // textShadowOffsetY: 1,
              // textShadowColor: '#222'
            },
            title: {
               // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              // fontWeight: 'bolder',
              fontSize: 15,
              // fontStyle: 'italic',
              padding: [
                260,  // up
                10, // right
                5,  // down
                10, // left
              ]
            },
            detail: {
              show: false
            },
            data: [{value: this.disc, name: 'Disc (%)'}]
          },
          {
            name: 'Temperature',
            type: 'gauge',
            center: ['75%', '45%'],    // 默认全局居中
            radius: '70%',
            min: 0,
            max: 100,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {            // 坐标轴小标记
              splitNumber: 5,
              length: 10,        // 属性length控制线长
              lineStyle: {        // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              // fontWeight: 'bolder',
              fontSize: 15,
              // fontStyle: 'italic',
              padding: [
                5,  // up
                10, // right
                130,  // down
                10, // left
              ]
            },
            axisLabel: {
              // backgroundColor: 'auto',
              borderRadius: 2,
              color: '#333',
              padding: 3,
              // textShadowBlur: 2,
              // textShadowOffsetX: 1,
              // textShadowOffsetY: 1,
              // textShadowColor: '#222'
            },
            splitLine: {           // 分隔线
              length: 15,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            pointer: {
              width: 4
            },
            detail: {
              show: false
            },
            data: [{value: this.temperature, name: 'Temperature (°C)'}]
          },
          {
            name: 'Speed',
            type: 'gauge',
            center: ['75%', '45%'],    // 默认全局居中
            radius: '70%',
            min: 0,
            max: 3000,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {            // 坐标轴小标记
              show: false
            },
            splitLine: {           // 分隔线
              length: 15,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            pointer: {
              width:4
            },
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              // fontWeight: 'bolder',
              fontSize: 15,
              // fontStyle: 'italic',
              padding: [
                400,  // up
                10, // right
                130,  // down
                10, // left
              ]
            },
            detail: {
              show: false
            },
            data: [{value: this.speed, name: 'Speed (rpm)'}]
          }
        ]
      }
    
    var myChart = this.$echarts.init(document.getElementById(this.id));
    
    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });

  },
  updated (){
    const option = {
        tooltip: {
        formatter: "{a} <br/>{c} {b}"
        },
        series : [
          {
            name: 'Disc',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            splitNumber: 10,
            center: ['35%', '50%'],    // 默认全局居中
            radius: '90%',
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
              width: 10
              }
            },
            axisTick: {            // 坐标轴小标记
              length: 15,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: {           // 分隔线
              length: 20,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            axisLabel: {
              // backgroundColor: 'auto',
              borderRadius: 2,
              color: '#333',
              padding: 3,
              // textShadowBlur: 2,
              // textShadowOffsetX: 1,
              // textShadowOffsetY: 1,
              // textShadowColor: '#222'
            },
            title: {
               // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              // fontWeight: 'bolder',
              fontSize: 15,
              // fontStyle: 'italic',
              padding: [
                260,  // up
                10, // right
                5,  // down
                10, // left
              ]
            },
            detail: {
              show: false
            },
            data: [{value: this.disc, name: 'Disc (%)'}]
          },
          {
            name: 'Temperature',
            type: 'gauge',
            center: ['75%', '45%'],    // 默认全局居中
            radius: '70%',
            min: 0,
            max: 100,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {            // 坐标轴小标记
              splitNumber: 5,
              length: 10,        // 属性length控制线长
              lineStyle: {        // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              // fontWeight: 'bolder',
              fontSize: 15,
              // fontStyle: 'italic',
              padding: [
                5,  // up
                10, // right
                130,  // down
                10, // left
              ]
            },
            axisLabel: {
              // backgroundColor: 'auto',
              borderRadius: 2,
              color: '#333',
              padding: 3,
              // textShadowBlur: 2,
              // textShadowOffsetX: 1,
              // textShadowOffsetY: 1,
              // textShadowColor: '#222'
            },
            splitLine: {           // 分隔线
              length: 15,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            pointer: {
              width: 4
            },
            detail: {
              show: false
            },
            data: [{value: this.temperature, name: 'Temperature (°C)'}]
          },
          {
            name: 'Speed',
            type: 'gauge',
            center: ['75%', '45%'],    // 默认全局居中
            radius: '70%',
            min: 0,
            max: 3000,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {            // 坐标轴小标记
              show: false
            },
            splitLine: {           // 分隔线
              length: 15,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            pointer: {
              width:4 
            },
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              // fontWeight: 'bolder',
              fontSize: 15,
              // fontStyle: 'italic',
              padding: [
                400,  // up
                10, // right
                130,  // down
                10, // left
              ]
            },
            detail: {
              show: false
            },
            data: [{value: this.speed, name: 'Speed (rpm)'}]
          }
        ]
      }
      // console.log(this.server.disc)
    var myChart = this.$echarts.init(document.getElementById(this.id));
    
    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });

  },
  props: ["id", "disc", "temperature", "speed"],
//   watch : {
//     // server: {
//     //   handler:function(){
//     //     console.log('Here')
//     //   },
// server: function(value){

//       this.option.series[0].data = [{value: value.Disc, name: 'Disc'}]
//     var myChart = this.$echarts.init(document.getElementById(this.id));
    
//     myChart.setOption(this.option, true);
//     window.addEventListener("resize", function () {
//       myChart.resize();
//     });
//   console.log(value)
// }
//   }
}
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

</style>