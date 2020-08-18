<template>
  <div class="home">
    <button @click="showTaskForm = !showTaskForm" class="btn btn-info my-3" type="button">
      Add Task
    </button>
    <div v-if="showTaskForm" class="jumbotron my-4">
      <form @submit.prevent="enrollTask">
        <div class="form-group">
          <label for="InputUsername">고객사 명</label>
          <input v-model="task.clientName" type="text" class="form-control"
          id="clientname" aria-describedby="clientNameHelp" required>
          <small id="clientNameHelp" class="form-text text-muted">
            고객사 선택
          </small>
        </div>
        <button type="submit" class="btn btn-primary">Add Task</button>
      </form>
    </div>
    <ul class="list-unstyled">
      <li class="media my-4 mr-3" v-for="task in reversedTasks" :key="task._id">
        <div class="media-body">
          <a :href="'http://192.168.0.3:9090/' + task._id">
            <h4 class="mt-0 mb-1">{{ task.clientName }}</h4>
          </a>
            <small>{{ task.createdAt }}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint no-underscore-dangle: 0 */
// @ is an alias to /src
const API_URL = 'http://192.168.0.3:9000/tasks/';

export default {
  name: 'Home',
  data: () => ({
    showTaskForm: false,
    tasks: [],
    task: {
      clientName: '',
    },
  }),
  computed: {
    reversedTasks() {
      // console.log('reversed');
      return this.tasks.slice().reverse();
    },
  },
  mounted() {
    fetch(API_URL).then((response) => response.json()).then((result) => {
      this.tasks = result;
    });
  },
  methods: {
    enrollTask() {
      // console.log(this.task);
      // console.log(this.message);
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.task),
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
      }).then((response) => response.json()).then((result) => {
        console.log('creat eone result', result._id);
        window.location.href = `http://192.168.0.3:9090/${result._id}`;
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style>
hr {
  border-top: 1px solid blue;
}

img {
  width: 300px;
  height: auto;
}
</style>
