<script>
import { mapState } from "vuex";
import BeerDescription from "@/components/BeerDescription";
import SliderGroup from "@/components/SliderGroup";
import { mdiArrowLeft } from "@mdi/js";
export default {
  components: {
    BeerDescription,
    SliderGroup,
  },
  data() {
    return {
      beerId: this.$route.query.beerId,
      isLoading: true,
      mdiArrowLeft,
    };
  },
  computed: {
    ...mapState({
      beer: (state) => state.beer,
    }),
  },
  methods: {
    async fetchBeerById() {
      await this.$store.dispatch("fetchBeerById", this.beerId);
    },
  },
  mounted() {
    this.fetchBeerById();
    this.$store.subscribe(async (mutation) => {
      if (mutation.type === "SET_BEERS") this.isLoading = false;
    });
  },
};
</script>
<template>
  <v-container v-if="beer" class="mt-16">
    <router-link
      :to="{
        path: '/',
      }"
      class="d-flex btn-return"
    >
      <v-icon color="#1316a1" size="28">{{ mdiArrowLeft }}</v-icon>
      <span>Regresar</span>
    </router-link>
    <BeerDescription :beer="beer" v-if="!isLoading" />
    <SliderGroup class="slider-group mt-16" />
  </v-container>
</template>
