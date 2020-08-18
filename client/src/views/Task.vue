<template>
  <div class="container">
    <h3>{{ $route.params.id }}</h3>
    <!-- <h3> {{receivedData.value.username}} </h3> -->
    <ul v-if="receivedData">
      <li>{{ receivedData.clientName }}</li>
      <li> {{ receivedData.createdAt }} </li>
    </ul>
    <div v-if="receivedData.taskEntries">
      <ul>
        <li v-for="(entry, index) in receivedData.taskEntries" :key="index.createdAt">
          <textarea v-model="entry.item" name="" id="" cols="30" rows="5"></textarea>
          <p class="text-muted">
            {{ entry.insertedAt }}
          </p>
        </li>
      </ul>
    </div>
    <div v-else >
      <textarea name="" id="" cols="30" rows="5"></textarea>
    </div>
  </div>
</template>

<script>
const API_URL = 'http://192.168.0.3:9000/tasks/';
export default {
  name: 'Task',
  mounted() {
    console.log('this route params id ', this.$route.params.id);
    fetch(API_URL + this.$route.params.id).then((response) => response.json()).then((result) => {
      // console.log(result);
      this.receivedData = result;
      // console.log(this.receivedData);
    });
    // console.log(this.$route.params.id);
  },
  data: () => ({
    receivedData: {
    },
  }),
};
</script>

<style>

</style>
