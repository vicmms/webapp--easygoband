<script>
import { mapState } from "vuex";
import { mapFields } from "vuex-map-fields";
import BeerCardSmall from "@/components/BeerCardSmall";
export default {
  components: {
    BeerCardSmall,
  },
  data() {
    return {
      model: null,
      randomBeers: [],
      isLoading: true,
    };
  },
  computed: {
    ...mapFields(["pagination.per_page", "pagination.page"]),
    ...mapState({
      beers: (state) => state.beers,
    }),
  },
  methods: {
    async fetchBeers() {
      this.per_page = 30; // para fines de solo visualizar la informacion, se toman los primeros 30 resultados para despues ser seleccionados 10 aleatoriamente
      await this.$store.dispatch("fetchBeers");
    },
    selectRandomBeers() {
      this.randomBeers = this.beers
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);
    },
  },
  mounted() {
    this.fetchBeers();
    this.$store.subscribe(async (mutation) => {
      if (mutation.type === "SET_BEERS") {
        this.selectRandomBeers();
        this.isLoading = false;
      }
    });
  },
};
</script>
<template>
  <div v-if="!isLoading">
    <v-sheet class="mx-auto" elevation="8">
      <span class="subtitle">Beers You May Like</span>
      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item v-for="(beer, i) in randomBeers" :key="i">
          <router-link
            :to="{
              path: '/beer-info',
              query: { beerId: beer.id },
            }"
            class="d-flex align-center"
          >
            <BeerCardSmall :beer="beer" />
          </router-link>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
