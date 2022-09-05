<script>
import { mapFields } from "vuex-map-fields";
export default {
  data() {
    return {
      menu_before: null,
      menu_after: null,
    };
  },
  computed: {
    ...mapFields([
      "brewed_before",
      "brewed_after",
      "filters.abv_gt",
      "filters.abv_lt",
    ]),
  },
  methods: {
    resetFilters() {
      this.brewed_before = null;
      this.brewed_after = null;
      this.abv_gt = 0;
      this.abv_lt = 0;
      this.$store.dispatch("fetchBeers");
    },
    async applyFilters() {
      await this.$store.dispatch("fetchBeers");
    },
  },
};
</script>
<template>
  <div>
    <v-card>
      <v-card-title>Filters {{ menu_before }}</v-card-title>
      <v-card-text>
        <!-- brewed before -->
        <v-menu
          ref="menu_before"
          v-model="menu_before"
          :close-on-content-click="false"
          :return-value.sync="brewed_before"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="brewed_before"
              label="Brewed Before"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="brewed_before"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="$refs.menu_before.save(null)">
              {{ brewed_before ? "Remove" : "Cancel" }}
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu_before.save(brewed_before)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>

        <!-- brewed after -->
        <v-menu
          ref="menu_after"
          v-model="menu_after"
          :close-on-content-click="false"
          :return-value.sync="brewed_after"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="brewed_after"
              label="Brewed After"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="brewed_after"
            type="month"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="$refs.menu_after.save(null)">
              {{ brewed_after ? "Remove" : "Cancel" }}
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu_after.save(brewed_after)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>

        <!-- Min ABV -->
        <span
          >Min ABV <b>{{ abv_gt ? abv_gt : "" }}</b></span
        >
        <v-slider v-model="abv_gt" color="primary" min="0" max="20" thumb-label>
        </v-slider>
        <!-- MAX ABV -->
        <span
          >Max ABV <b>{{ abv_lt ? abv_lt : "" }}</b></span
        >
        <v-slider v-model="abv_lt" color="primary" min="0" max="20" thumb-label>
        </v-slider>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn class="my-2 btn-primary" @click="applyFilters()">
          Apply Filters
        </v-btn>
        <v-btn class="my-2" @click="resetFilters()"> Reset Filters </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
