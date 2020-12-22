<template>
  <div>
    <v-card class='card-color elevation-12 card-box'>
      <v-card-title class='color'> REAL-TIME DATA </v-card-title>
      <v-row class="small pb-2">
        <v-col class="left">
          <Data
            class="top"
            :position="items[0].title"
            :DO="items[0].DO"
            :TEMP="items[0].TEMP"
            :PH="items[0].PH"
            :DD="items[0].DD"
            :NH3="items[0].NH3"
            :classDO="items[0].isDOHigh"
            :classTEMP="items[0].isTEMPHigh"
            :classPH="items[0].isPHHigh"
            :classDD="items[0].isDDHigh"
            :classNH3="items[0].isNH3High"
            :duration="duration1"
          />
          <Data
            class="bottom"
            :position="items[2].title"
            :DO="items[2].DO"
            :TEMP="items[2].TEMP"
            :PH="items[2].PH"
            :DD="items[2].DD"
            :NH3="items[2].NH3"
            :classDO="items[2].isDOHigh"
            :classTEMP="items[2].isTEMPHigh"
            :classPH="items[2].isPHHigh"
            :classDD="items[2].isDDHigh"
            :classNH3="items[2].isNH3High"
            :duration="duration3"
          />
        </v-col>
        <v-col class="right">
          <Data
            class="top"
            :position="items[1].title"
            :DO="items[1].DO"
            :TEMP="items[1].TEMP"
            :PH="items[1].PH"
            :DD="items[1].DD"
            :NH3="items[1].NH3"
            :classDO="items[1].isDOHigh"
            :classTEMP="items[1].isTEMPHigh"
            :classPH="items[1].isPHHigh"
            :classDD="items[1].isDDHigh"
            :classNH3="items[1].isNH3High"
            :duration="duration2"
          />
          <Data
            class="bottom"
            :position="items[3].title"
            :DO="items[3].DO"
            :TEMP="items[3].TEMP"
            :PH="items[3].PH"
            :DD="items[3].DD"
            :NH3="items[3].NH3"
            :classDO="items[3].isDOHigh"
            :classTEMP="items[3].isTEMPHigh"
            :classPH="items[3].isPHHigh"
            :classDD="items[3].isDDHigh"
            :classNH3="items[3].isNH3High"
            :duration="duration4"
          />
        </v-col>
        
      </v-row>
    </v-card>
  </div>
</template>

<script>
import Data from "~/components/overview/Data";
import { mapState} from "vuex";
export default {
  components: {
    Data,
  },

  computed: {
    ...mapState({
      items: (state) => state.items,
      duration: (state) => state.duration,
      duration1: (state) => state.durationKolam1,
      duration2: (state) => state.durationKolam2,
      duration3: (state) => state.durationKolam3,
      duration4: (state) => state.durationKolam4,
    }),
  },
};
</script>

<style scoped>
.left {
  margin-left: 1em;
}

.right {
  margin-right: 1em;
}

.top {
  margin-bottom: 1em;
}

.card-color{
  /* background: rgb(240,244,230); */
  background: rgb(238,248,248)!important;
}

.card-box{
  border-radius: 8px!important;
}

.v-card__subtitle {
  padding: 12px;
}

.v-card__title{
  padding-top: 10px;
  padding-left:15px;
  padding-bottom:0
}

@media only screen and (max-width: 700px) {
  .left {
    margin-left: 0;
    display: flex;
    flex-direction: column;
  }

  .right {
    display: flex;
    margin-right: 0;
    flex-direction: column;
  }

  .small {
    display: flex;
    flex-direction: column;
  }

}
</style>