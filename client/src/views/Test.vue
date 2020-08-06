<template>
  <div class="container">
    <h1>Hello Test</h1>
    <h3>{{ $route.params.id }}</h3>
  </div>
</template>

<script>
const API_URL = 'http://localhost:9000/messages/';
export default {
  mounted() {
    fetch(API_URL + this.$route.params.id).then((response) => response.json()).then((result) => {
      console.log(result);
    });
    // console.log(this.$route.params.id);
  },
};
</script>

<style>

</style>
