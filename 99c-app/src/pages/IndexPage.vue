<template>
  <q-page class="flex flex-center">
    <FooterLinks />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import FooterLinks from "../components/FooterLinks.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    FooterLinks,
  },
});
</script>
