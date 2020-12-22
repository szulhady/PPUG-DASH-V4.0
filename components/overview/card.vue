<template>
  <div class="d-none d-md-flex">

    <v-row >
      <v-col v-for="(card,index) in cards" :key="index" :cols="card.cols" >
        <v-card class="right">
          <v-row>
            <v-col :class="card.class" cols="5" class="left">
              <h1 :class="card.icon"></h1>
            </v-col>
            <v-col cols="7" class="inner">
              <v-card-title class="font">{{ card.data }}</v-card-title>
              <v-card-subtitle class="font">{{
                card.description
              }}</v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props:["cards"],
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
  border-radius: 10px;
  background: #eef8f8;
}

.left{
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

</style>