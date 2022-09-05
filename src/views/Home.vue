<script>
import BeersPagination from "@/components/BeersPagination.vue";
import SideFilters from "@/components/SideFilters.vue";

export default {
  components: {
    BeersPagination,
    SideFilters,
  },
};
</script>

<template>
  <v-row class="mt-16">
    <v-col cols="12" md="3">
      <SideFilters class="mx-4" />
    </v-col>
    <v-col cols="12" md="9" class="text-center-webkit beers-pagination">
      <BeersPagination />
    </v-col>
  </v-row>
</template>
