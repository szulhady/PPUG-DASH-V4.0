<template>
  <div class="d-none d-md-flex">

    <v-row >
      <v-col v-for="(card,index) in cards" :key="index" :cols="card.cols" >

        <v-card class="right elevation-12 border-rounded card-color">
          <v-row>
            <v-col  cols="5" class="left">
              <v-icon :class="card.icon" :color="card.class" size="70">
              </v-icon>

            </v-col>
            <v-col cols="7" class="inner">
                <v-card-subtitle class="font card-desc">{{
                 card.description}}
                </v-card-subtitle>
              <v-card-title class="font display-2">{{ card.data }}</v-card-title>
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

      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState} from "vuex";
export default {

  props:["cards"],
    computed: {
    ...mapState({
      duration: (state) => state.duration,
    }),
  },
};
</script>

<style scoped>
.icon {
  font-size: 4.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
  flex-wrap: wrap;
}

.font {
  font-size: 1.2em;
}

.right{
  border-radius: 8px;
  background: #eef8f8;
}

.inner{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.left{
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

}

.hr{
    margin: 0 20px;
    border-top: 1px solid rgb(189, 199, 199);
}

.display-2{
  padding-top: 5px ;
  padding-right:30px ;
}

/* .v-card__subtitle{
  padding: 0;
  padding-right:20px ;
} */

.v-card__subtitle {
  padding: 12px;
}

.card-subtitle{
  padding-left:20px ;
}

.flex-card{
  display:flex
}

.col-7{
  padding: 0;
}

.card-desc{
  padding-top: 20px;
  padding-right:30px ;
}

.card-color{
  /* background: rgb(240,244,230); */
  background: rgb(238,248,248) !important;
   border-radius: 8px!important;
}

</style>