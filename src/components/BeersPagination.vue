<script>
import BeerCard from "@/components/BeerCard";
import BeerCardSmall from "@/components/BeerCardSmall";
import NavList from "@/components/NavList";
import { mapState } from "vuex";
import { mapFields } from "vuex-map-fields";

export default {
  components: {
    BeerCard,
    BeerCardSmall,
    NavList,
  },
  computed: {
    ...mapFields(["totalRows", "totalPages", "view", "isMobile"]),
    ...mapState({
      beers: (state) => state.beers,
      pagination: (state) => state.pagination,
    }),
    width() {},
  },
  data() {
    return {
      viewList: true,
    };
  },
  methods: {
    async fetchBeers() {
      await this.$store.dispatch("fetchBeers");
    },
  },
  async mounted() {
    await this.fetchBeers();
  },
};
</script>

<template>
  <div>
    <NavList />
    <v-row v-if="view == 'list'" class="list-container">
      <v-col cols="12" :key="beer.id" v-for="beer in this.beers">
        <BeerCard :beer="beer" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" sm="4" md="3" :key="beer.id" v-for="beer in this.beers">
        <router-link
          :to="{
            path: '/beer-info',
            query: { beerId: beer.id },
          }"
          class="d-flex align-center"
        >
          <BeerCardSmall :beer="beer" />
        </router-link>
      </v-col>
    </v-row>

    <div class="empty-data" v-if="!beers.length">
      <img :src="require('@/assets/images/empty-data.png')" />
    </div>

    <!-- paginacion -->
    <v-row class="align-center mt-8 pagination">
      <v-col cols="12" sm="6" class="text-left">
        <span class="pagination-label">
          {{ beers.length ? beers.length * (pagination.page - 1) + 1 : 0 }} -
          {{ beers.length * pagination.page }} of {{ totalRows }}
        </span>
      </v-col>
      <v-col cols="12" sm="6" class="text-right">
        <v-pagination
          v-model="pagination.page"
          :length="totalPages"
          :total-visible="isMobile ? 4 : 7"
          circle
          @input="fetchBeers"
        >
        </v-pagination>
      </v-col>
    </v-row>
  </div>
</template>
