import Vue from "vue";

if (process.browser) {
  const mqtt = require("vue-mqttsocket").default;
  // Vue.use(mqtt, { uri: "wss://airmode.live:8083/mqtt" });
  Vue.use(mqtt, { uri: "wss://tron.airmode.live:8083/mqtt" });

//   Vue.use(mqtt, { uri: "ws://broker.hivemq.com:8083/mqtt" });
//   Vue.use(mqtt, { uri: "ws://localhost:8083/mqtt" });
}
