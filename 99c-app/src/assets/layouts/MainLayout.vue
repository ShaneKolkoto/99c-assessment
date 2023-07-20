<template>
  <q-layout view="lHh Lpr lFf">
    <q-header flat class="bg-white">
      <img src="../assets/logo.png" alt="Image Title" />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterLinks />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import FooterLinks from "src/components/FooterLinks.vue";
export default defineComponent({
  name: "MainLayout",
  components: {
    FooterLinks,
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

img {
  position: absolute;
  width: 157px;
  top: -45px;
  left: 0px;
}
</style>
