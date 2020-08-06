<template>
  <div class="container">
    <h1>Hello Test</h1>
    <h3>{{ $route.params.id }}</h3>
    <!-- <h3> {{receivedData.value.username}} </h3> -->
    <ul>
      <li v-if="receivedData">{{ receivedData.value.username }}</li>
      <li>{{ receivedData.value.subject }}</li>
      <li>{{ receivedData.value.message }}</li>
      <li v-if="receivedData.value.imageURL">{{ receivedData.value.imageURL }}</li>
    </ul>
  </div>
</template>

<script>
const API_URL = 'http://localhost:9000/messages/';
export default {
  mounted() {
    fetch(API_URL + this.$route.params.id).then((response) => response.json()).then((result) => {
      // console.log(result);
      this.receivedData = result;
      // console.log(this.receivedData.value.username);
    });
    // console.log(this.$route.params.id);
  },
  data: () => ({
    receivedData: {
      value: {},
    },
  })
};
</script>

<style>

</style>
