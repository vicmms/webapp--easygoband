<script>
import { mapState } from "vuex";
import { mapFields } from "vuex-map-fields";
export default {
  computed: {
    ...mapFields(["filters.beer_name", "view"]),
    ...mapState({
      pagination: (state) => state.pagination,
      pageOptions: (state) => state.pageOptions,
    }),
  },
  methods: {
    async fetchBeers() {
      await this.$store.dispatch("fetchBeers");
    },
  },
};
</script>
<template>
  <v-row class="page-row-filters">
    <v-col cols="6">
      <div class="page-options">
        <span>Rows <span class="mobile-hidden">Per Page</span></span>
        <v-select
          :items="pageOptions"
          label=""
          dense
          v-model="pagination.per_page"
          @input="fetchBeers()"
        ></v-select>
      </div>
    </v-col>
    <v-col cols="6">
      <v-btn-toggle v-model="view" borderless class="toggle-btns">
        <v-btn value="list">
          <span class="hidden-sm-and-down">List</span>

          <v-icon right> mdi-format-list-bulleted </v-icon>
        </v-btn>
        <v-btn value="grid">
          <span class="hidden-sm-and-down">Grid</span>

          <v-icon right> mdi-dots-grid </v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-col>
    <v-col cols="12">
      <div class="search">
        <v-text-field
          v-model="beer_name"
          label="Search a Beer..."
          hide-details="true"
          @input="fetchBeers()"
        ></v-text-field>
      </div>
    </v-col>
  </v-row>
</template>
