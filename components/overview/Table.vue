<template>
  <div>
    <v-card class="elevation-12 card-border card-color">
      <v-card-title class='color'>SUMMARY</v-card-title>
      <v-data-table
        :headers="headers"
        :items="status"
        :items-per-page="5"
        hide-default-footer
      ></v-data-table>
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
import { mapState } from "vuex";
export default {
  data() {
    return {
      headers: [
        {
          text: "Station",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Remarks", value: "remarks" },
      ],
    };
  },
    computed: {
    ...mapState({
      status:(state)=> state.status,
      duration: (state) => state.duration,
    }),
  },
};
</script>

<style scoped>

.card-border{
  border-radius:8px;
}

.card-color{
  /* background: rgb(240,244,230); */
  border-radius: 8px !important;
  background: rgb(238,248,248)!important;
}

.v-data-table {
  background:  rgb(240,244,230);
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
  padding: 0 15px;
}

.v-card__subtitle {
  padding: 12px;
}
</style>