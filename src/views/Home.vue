<script>
import BeerCard from "@/components/BeerCard";
import { mapState } from "vuex";

export default {
  components: {
    BeerCard,
  },
  computed: {
    ...mapState({
      beers: (state) => state.beers,
    }),
  },
  data() {
    return {
      viewList: true,
      pagination: {
        currentPage: 1,
        perPage: 5,
      },
    };
  },
  methods: {
    async fetchBeers() {
      await this.$store.dispatch("fetchBeers", this.pagination);
    },
  },
  mounted() {
    this.fetchBeers();
  },
};
</script>

<template>
  <v-container>
    <v-row v-if="viewList">
      <v-col cols="12" :key="beer.id" v-for="beer in this.beers">
        <BeerCard :beer="beer" />
      </v-col>
    </v-row>
    <v-row v-else> </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center mt-5">
        <v-pagination
          v-model="pagination.currentPage"
          :length="4"
          :total-visible="6"
          circle
          @input="fetchBeers"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>
