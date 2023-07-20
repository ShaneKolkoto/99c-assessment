<template>
  <q-footer class="q-pa-md bg-white">
    <q-card class="bg-white" flat>
      <q-card-text class="pt-2 text-black">
        Created by Shane Morne Kolkoto <span class="text-red">♥️</span>
      </q-card-text>
    </q-card>
  </q-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ["fab fa-facebook", "fab fa-twitter", "fab fa-instagram"],
    };
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
}

.author {
  font-size: 14px;
}
</style>
