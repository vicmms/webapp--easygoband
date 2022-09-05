<script>
import { mdiGlassMugVariant } from "@mdi/js";
import { mapFields } from "vuex-map-fields";

export default {
  props: {
    beer: {
      typeof: Object,
    },
  },
  computed: {
    ...mapFields(["isMobile"]),
  },
  data() {
    return {
      mdiGlassMugVariant,
      maxABV:
        Math.round(this.beer.abv / 2) > 6 ? 6 : Math.round(this.beer.abv / 2),
    };
  },
};
</script>
<template>
  <div>
    <!-- vista en lista -->
    <v-card class="card text-left beer-card">
      <div class="d-flex flex-no-wrap">
        <div class="ma-3" size="125" tile>
          <img
            :src="
              beer.image_url
                ? beer.image_url
                : require('@/assets/images/beer-404.png')
            "
            class="img-card"
          />
        </div>
        <div class="text list">
          <v-card-title class="text-h5">{{
            isMobile && beer.name.length > 10
              ? `${beer.name.substring(0, 9)}..`
              : beer.name
          }}</v-card-title>
          <v-card-subtitle>
            <span class="mobile-hidden">{{ beer.tagline }}</span>
          </v-card-subtitle>
          <div class="beer-rate">
            <v-icon
              v-for="index in maxABV"
              :key="index"
              color="#d1be45"
              size="22"
              >{{ mdiGlassMugVariant }}</v-icon
            >
            <span>{{ beer.abv }} ABV</span>
          </div>
          <v-card-text>
            {{
              isMobile
                ? beer.description.substring(0, 85)
                : beer.description.substring(0, 200)
            }}
            <span
              v-if="
                (isMobile && beer.description.length > 85) ||
                beer.description.length > 200
              "
              >..</span
            >
          </v-card-text>
          <v-card-actions class="justify-end">
            <router-link
              :to="{
                path: '/beer-info',
                query: { beerId: beer.id },
              }"
              class="d-flex align-center"
            >
              <v-btn class="ml-2 mt-5 btn-pink" rounded small>
                Take a Look
              </v-btn>
            </router-link>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </div>
</template>
