<template>
  <v-app>
    <v-app-bar app class="app-bar" height="130">
      <div class="d-flex align-center">
        <router-link to="/">
          <img :src="require('@/assets/images/logo.png')" class="img-logo" />
        </router-link>
      </div>
    </v-app-bar>

    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "App",
  computed: {
    ...mapFields(["isMobile"]),
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
