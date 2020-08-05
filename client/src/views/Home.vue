<template>
  <div class="home">
    <button @click="showMessageForm = !showMessageForm" class="btn btn-info my-3" type="button">
      Toggle Message Form
    </button>
    <div v-if="showMessageForm" class="jumbotron my-4">
      <form @submit="addMessage">
        <div class="form-group">
          <label class="text-uppercase" for="InputUsername">username</label>
          <input v-model="message.username" type="text" class="form-control"
          id="username" aria-describedby="usernameHelp" required>
          <small id="usernameHelp" class="form-text text-muted">
            You have to fill this field!
          </small>
        </div>
        <div class="form-group">
          <label class="text-uppercase" for="InputSubject">subject</label>
          <input v-model="message.subject" type="text" class="form-control" id="subject"
          aria-describedby="subjectHelp" required>
          <small id="subjectHelp" class="form-text text-muted">
            Choose a subject you want to write about!
          </small>
        </div>
        <div class="form-group">
          <label class="text-uppercase" for="InputMessage">message</label>
          <textarea v-model="message.message" class="form-control" id="message" rows="5" required>
          </textarea>
        </div>
        <div class="form-group">
          <label class="text-uppercase" for="InputSubject">image url</label>
          <input v-model="message.imageURL" type="text" class="form-control" id="subject">
        </div>
        <button type="submit" class="btn btn-primary">Add Message</button>
      </form>
    </div>
    <ul class="list-unstyled">
      <li class="media my-4 mr-3" v-for="message in messages" :key="message._id" >
        <img v-if="message.value.imageURL" :src="message.value.imageURL"
        class="align-self-start mr-4" :alt="message.value.subject">
        <div class="media-body">
          <h4 class="mt-0 mb-1">{{ message.value.username }}</h4>
          <h5 class="mt-0 mb-1">{{ message.value.subject }}</h5>
            <p>{{ message.value.message }}</p>
            <br class="solid">
            <small>{{message.value.create}}</small>
        </div>
        </li>
    </ul>
  </div>
</template>

<script>

// @ is an alias to /src
const API_URL = 'http://192.168.0.3:9000/messages';

export default {
  name: 'Home',
  data: () => ({
    showMessageForm: false,
    messages: [],
    message: {
      username: '',
      subject: '',
      message: '',
      imageURL: '',
    },
  }),
  computed: {
    reversedMessages() {
      console.log('reversed');
      return 0;
    },
  },
  mounted() {
    fetch(API_URL).then((response) => response.json()).then((result) => {
      this.messages = result;
    });
  },
  methods: {
    addMessage() {
      // console.log(this.message);
      console.log(JSON.stringify(this.message.imageURL));
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.message),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json()).then((result) => {
        console.log(result);
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
