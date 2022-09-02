<script>
import { mdiGlassMugVariant } from "@mdi/js";
export default {
  props: {
    beer: {
      typeof: Object,
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
  <div>
    <!-- vista en lista -->
    <v-card color="#1F7087" dark>
      <div class="d-flex flex-no-wrap">
        <div class="ma-3" size="125" tile>
          <img :src="beer.image_url" class="img-card" />
        </div>
        <div>
          <v-card-title class="text-h5" v-text="beer.name"></v-card-title>
          <v-card-subtitle>
            <span>{{ beer.tagline }}</span>
          </v-card-subtitle>
          <v-card-text>
            {{
              beer.description.length > 250
                ? beer.description.substring(0, 197) + " ..."
                : beer.description
            }}
          </v-card-text>
          <v-card-actions>
            <v-btn class="ml-2 mt-5" outlined rounded small>
              Echale un ojo
            </v-btn>
          </v-card-actions>
        </div>
        <div class="beer-rate">
          <v-icon
            v-for="index in Math.round(this.beer.abv / 2)"
            :key="index"
            color="#d1be45"
            size="22"
            >{{ mdiGlassMugVariant }}</v-icon
          >
          <span>{{ beer.abv }} AVB</span>
        </div>
      </div>
    </v-card>
  </div>
</template>
