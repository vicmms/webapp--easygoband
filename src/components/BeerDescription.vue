<script>
export default {
  props: {
    beer: {
      type: Object,
    },
  },
  data() {
    return {
      temp: null,
      mash_temp: null,
    };
  },
  created() {
    this.temp = this.beer.method.fermentation.temp;
    this.mash_temp = this.beer.method.mash_temp[0].temp;
  },
};
</script>
<template>
  <div class="align-center">
    <div class="show-beer-card">
      <v-row class="">
        <v-col cols="12" md="5" class="p-none reduced-card left-animation">
          <div class="main-card-img">
            <img
              :src="
                beer.image_url
                  ? beer.image_url
                  : require('@/assets/images/beer-404.png')
              "
            />
            <span>{{ `"${beer.tagline}"` }}</span>
          </div>
        </v-col>
        <v-col cols="12" md="7" class="p-none right-animation">
          <div class="main-card">
            <div>
              <h2>
                {{ beer.name
                }}<span class="abv-text">{{
                  `&nbsp;&nbsp;-&nbsp;&nbsp;${beer.abv} ABV`
                }}</span>
              </h2>
              <p>Description</p>
              <span>{{ beer.description }}</span>
              <p>Brewer Tip</p>
              <span>{{ beer.brewers_tips }}</span>
            </div>
            <div>
              <p>Ingredients</p>
              <div>
                <span>Hops: </span>
                <span v-for="(hop, i) in beer.ingredients.hops" :key="i">
                  {{
                    i >= beer.ingredients.hops.length - 1
                      ? `${hop.name}.`
                      : `${hop.name}, `
                  }}
                </span>
              </div>
              <div>
                <span>Malt: </span>
                <span v-for="(m, i) in beer.ingredients.malt" :key="i">
                  {{
                    i >= beer.ingredients.malt.length - 1
                      ? `${m.name}.`
                      : `${m.name}, `
                  }}
                </span>
              </div>
              <div>
                <span>Yeast: {{ `${beer.ingredients.yeast}.` }}</span>
                <span></span>
              </div>
            </div>
            <div>
              <p>Method</p>
              <div>
                <span>
                  Fermentation Temperature:
                  {{ `${temp.value}&deg; ${temp.unit}` }}
                </span>
              </div>
              <div>
                <span>
                  Mash Temperature:
                  {{ `${mash_temp.value}&deg; ${mash_temp.unit}` }}
                </span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
