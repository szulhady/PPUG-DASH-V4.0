<template>
  <div class="level">
    <div :id="id" style="width: 100%; height: 280px" :data="data"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      data2:""
    };
  },
  updated() {
    var option = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c} ppm",
      },
      radius: "100%",
      // toolbox: {
      //   feature: {
      //     restore: {},
      //     saveAsImage: {},
      //   },
      // },
      series: [
        {
          // name: "Ammonia",
          type: "gauge",
          detail: { formatter: "{value} ppm" },
          data: [{ value: this.data, name: this.unit }],
          max: this.max,
          axisLabel: {
            fontSize: 14,
                 distance: 10
          },
          detail: {
            formatter: "{value}",
            // backgroundColor: "rgba(227, 0, 0, 1)",
            offsetCenter: ["0", "78%"],
          },
          title: {
            offsetCenter: ["0", "100%"],
            color: "rgba(0, 0, 0, 1)",
          },
          splitNumber: 4,
          axisLine: {
            lineStyle: {
              color: [
                [0.29, "rgb(15,164,100)"],
                [0.7, "rgb(235,137,52)"],
                [1, "rgb(219,58,55)"],
              ],
              // color: [
              //   [0.29, "rgb(115,222,133)"],
              //   [0.7, "rgb(235,137,52)"],
              //   [1, "rgb(219,58,55)"],
              // ],
              shadowColor: "rgba(255, 255, 255, 0.7)",
              shadowBlur: 10,
              width: 20,
            },
          },
                     splitLine: {
      show: true,
      length: "20%"}
          // startAngle: 190,
          // endAngle: -0,
        },
        
      ],
    };

    var myChart = this.$echarts.init(document.getElementById(this.id));

    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },
  mounted() {

    var option = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c} ppm",
      },
      radius: "100%",
      // toolbox: {
      //   feature: {
      //     restore: {},
      //     saveAsImage: {},
      //   },
      // },
      series: [
        {
          // name: "Ammonia Reading",
          type: "gauge",
          detail: { formatter: "{value} ppm" },
          data: [{ value: this.data, name: this.unit }],
          max: this.max,
          axisLabel: {
            fontSize: 14,
                 distance: 10
          },
          detail: {
            formatter: "{value}",
            // backgroundColor: "rgba(227, 0, 0, 1)",
            offsetCenter: ["0", "78%"],
          },
          title: {
            offsetCenter: ["0", "100%"],
            color: "rgba(0, 0, 0, 1)",
          },
          splitNumber: 4,
          // startAngle: 190,
          // endAngle: -10,
          axisLine: {
            lineStyle: {
              color: [
                [0.29, "rgb(15,164,100)"],
                [0.7, "rgb(235,137,52)"],
                [1, "rgb(219,58,55)"],
              ],
              // color: [
              //   [0.29, "rgb(115,222,133)"],
              //   [0.7, "rgb(235,137,52)"],
              //   [1, "rgb(219,58,55)"],
              // ],
              shadowColor: "rgba(255, 255, 255, 0.7)",
              shadowBlur: 10,
              width: 20,
            },
          },
             splitLine: {
      show: true,
      length: "20%"
    },
        },
      ],
    };

    var myChart = this.$echarts.init(document.getElementById(this.id));

    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });

  },

  props: ["id", "data", "max", "unit"],
  components: {},
  methods:{
    update(){
        var option = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c} ppm",
      },
      // toolbox: {
      //   feature: {
      //     restore: {},
      //     saveAsImage: {},
      //   },
      // },
      series: [
        {
          // name: "Ammonia",
          type: "gauge",
          detail: { formatter: "{value} ppm" },
          data: [{ value: this.data, name: this.unit }],
          max: this.max,
          axisLabel: {
            fontSize: 14,
          },
          detail: {
            formatter: "{value}",
            // backgroundColor: "rgba(227, 0, 0, 1)",
            offsetCenter: ["0", "78%"],
          },
          title: {
            offsetCenter: ["0", "100%"],
            color: "rgba(0, 0, 0, 1)",
          },
          splitNumber: 4,
          axisLine: {
            lineStyle: {
              color: [
                [0.29, "rgb(15,164,100)"],
                [0.7, "rgb(235,137,52)"],
                [1, "rgb(219,58,55)"],
              ],
              // color: [
              //   [0.29, "rgb(115,222,133)"],
              //   [0.7, "rgb(235,137,52)"],
              //   [1, "rgb(219,58,55)"],
              // ],
              shadowColor: "rgba(255, 255, 255, 0.7)",
              shadowBlur: 10,
              width: 30,
            },
          },
          // startAngle: 190,
          // endAngle: -0,
        },
      ],
    };

    var myChart = this.$echarts.init(document.getElementById(this.id));

    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
    }
  },
};
</script>
<style >
.level {
  display: flex;
  justify-content: center;
  /* background: rgb(243, 243, 243); */
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

</style>

