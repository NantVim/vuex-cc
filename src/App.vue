<template>
  <div id="app">
    <div class="post" v-for="post in allPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  // computed: {
  //   allPosts() {
  //     return this.$store.getters.allPosts;
  //   }
  // },
  computed: mapGetters(['allPosts']),
  async mounted() {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style>
#app {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-align: center;
  color: rgb(11, 20, 99);
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
