<script>
import { mdiGlassMugVariant } from "@mdi/js";

export default {
  props: {
    beer: {
      type: Object,
    },
    height: {
      type: Number,
    },
  },
  data() {
    return {
      mdiGlassMugVariant,
    };
  },
};
</script>
<template>
  <v-card class="ma-4 small-card">
    <img
      :src="
        beer.image_url
          ? beer.image_url
          : require('@/assets/images/beer-404.png')
      "
      class="img-card"
    />
    <v-card-title>
      {{
        beer.name.length > 12 ? `${beer.name.substring(0, 11)}...` : beer.name
      }}
    </v-card-title>
    <v-card-text>
      <div class="beer-rate-small">
        <v-icon
          v-for="index in Math.round(beer.abv / 2) > 6
            ? 6
            : Math.round(beer.abv / 2)"
          :key="index"
          color="#d1be45"
          size="22"
          >{{ mdiGlassMugVariant }}</v-icon
        >
        <span class="text">{{ beer.abv }} ABV</span>
      </div>
      {{
        beer.description.length > 60
          ? beer.description.substring(0, 60) + " ..."
          : beer.description
      }}
    </v-card-text>
  </v-card>
</template>
