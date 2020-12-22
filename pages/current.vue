<template>
  <div>
    <h2 class='header'>REAL-TIME DATA</h2>
    <CardStationCurrent :items="items" class="pb-7" />
  </div>
</template>

<script>
import CardStationCurrent from "~/components/current/CardStationCurrent";

import { mapState } from "vuex";

export default {
  
components: { CardStationCurrent},

computed: {
  ...mapState({
    items: (state) => state.items,
    }),
  },
};
</script>

<style scoped>
.header{
  padding: 20px 0;
}
</style>