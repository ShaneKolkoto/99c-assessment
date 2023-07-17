<template>
  <q-page>
    <div class="splash-screen">
      <div class="background-image" :class="{ shrinked: shrinked }"></div>
      <div class="content" :class="{ visible: shrinked }">
        <q-btn label="Get Started" @click="navigateToRoute" />
      </div>
      <FooterLinks />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import FooterLinks from "../components/FooterLinks.vue";
export default defineComponent({
  name: "SplashScreen",
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
      console.log(this.$router.push("/home"));
    },
  },
  components: {
    FooterLinks,
  },
});
</script>

<style scoped>
.splash-screen {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

.background-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 60vh;
  background-image: url("../assets/logo.png");
  background-size: cover;
  background-position: center;
  transition: all 0.5s ease;
  z-index: 1;
}

.background-image.shrinked {
  height: 40vh;
  width: 50%;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 1.8s ease;
  top: 140px;
  z-index: 2;
}

.content.visible {
  opacity: 1;
}

.welcome-text {
  font-size: 32px;
  color: black;
  margin-bottom: 20px;
}

/* Media Queries */
@media (max-width: 425px) {
  .background-image {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .background-image.shrinked {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .content {
    top: 80px;
  }
}

@media (width >= 1024px) {
  .content {
    top: 90px;
  }
}
</style>
