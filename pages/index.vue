<template>
  <div >
    <h2 class='header'>DASHBOARD</h2>
    <CardSummary :cards="cards" class="pb-7"/>
    <CardData  class="pb-3"/>
    <v-row>
      <v-col cols=12 md=6>
        <Table />
      </v-col>
      <v-col cols=12   md=6>
        <!-- <v-card class='card-color elevation-7 card-box color'>
          <v-card-title>
            SERVER HEALTH
          </v-card-title>
            <MultiGauge id="gaue"/>
        </v-card> -->
        <CardServer class="pb-7 pb-md-0" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardSummary from "~/components/overview/CardSummary";
import CardData from "~/components/overview/CardData";
import Table from '~/components/overview/Table'
import TimelineSummary from '~/components/overview/TimelineSummary'

import CardServer from '~/components/overview/CardServer'
import MultiGauge from '~/components/overview/MultiGauge'

import { mapState } from "vuex";



export default {
  components: {
    CardSummary,
    CardData,
    Table,
    TimelineSummary,
    CardServer,
    MultiGauge
  },
  computed: {
    ...mapState({
      cards:(state) => state.cards,
          items: (state) => state.items,
    }),
  },
};
</script>

<style scoped>
.header{
  padding: 20px 0;
}

.card-color{
  background: rgb(240,244,230);
}

.card-box{
  border-radius: 8px;
}

.color{
  color:rgb(102, 102, 102);
  font-size: 1rem;
}
.v-card__subtitle {
  padding: 12px!important;
}

</style>