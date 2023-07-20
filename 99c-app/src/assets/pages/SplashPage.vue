<template>
  <q-page>
    <SplashScreenContent
      :shrinked="shrinked"
      @navigateToRoute="navigateToRoute"
    />
    <FooterLinks />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import FooterLinks from "../components/FooterLinks.vue";
import SplashScreenContent from "../components/SplashScreenContent.vue";

export default defineComponent({
  name: "SplashScreen",
  components: {
    FooterLinks,
    SplashScreenContent,
  },
  data() {
    return {
      shrinked: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.shrinked = true;
    }, 2000);
  },
  methods: {
    navigateToRoute() {
      this.$router.push("/entry-page");
    },
  },
});
</script>
