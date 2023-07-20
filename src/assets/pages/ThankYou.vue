<template>
  <q-page class="flex flex-center">
    <div class="thankyou-wrapper">
      <h1>
        <img class="img" src="../assets/thankyou.png" alt="thanks" />
      </h1>
      <div class="thankyou-text">
        <p>for contacting us, we will get in touch with you soon...</p>
        <a @click="backHome">Back to home</a>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ThankYou",
  methods: {
    backHome() {
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.thankyou-wrapper {
  width: 100%;
  height: auto;
  margin: auto;
  background: #ffffff;
  padding: 10px 0px 50px;
}
.thankyou-wrapper h1 {
  font: 100px Arial, Helvetica, sans-serif;
  text-align: center;
  color: #333333;
  padding: 0px 10px 10px;
}
.thankyou-wrapper p {
  font: 26px Arial, Helvetica, sans-serif;
  text-align: center;
  color: #333333;
  padding: 5px 10px 10px;
}
.thankyou-wrapper a {
  font: 26px Arial, Helvetica, sans-serif;
  text-align: center;
  color: #ffffff;
  display: block;
  text-decoration: none;
  width: 250px;
  background: #e47425;
  margin: 10px auto 0px;
  padding: 15px 20px 15px;
  border-bottom: 5px solid #f96700;
}
.thankyou-wrapper a:hover {
  font: 26px Arial, Helvetica, sans-serif;
  text-align: center;
  color: #ffffff;
  display: block;
  text-decoration: none;
  width: 250px;
  background: #f96700;
  margin: 10px auto 0px;
  padding: 15px 20px 15px;
  border-bottom: 5px solid #f96700;
}

.thankyou-text {
  position: relative;
  bottom: 125px;
}

@media (width <= 425px) {
  .thankyou-wrapper h1 {
    padding: 0;
  }

  .thankyou-text {
    position: relative;
    bottom: 80px;
  }
  .thankyou-wrapper p {
    font: 24px Arial, Helvetica, sans-serif;
  }
}

@media (width <= 425px) {
  .thankyou-wrapper h1 {
    padding: 0;
  }

  .thankyou-text {
    position: relative;
    bottom: 80px;
  }
}
@media (width <= 768px) {
  .img {
    width: 80%;
  }
}

img {
  position: relative;
  bottom: 30px;
  height: 150px;
}
</style>
