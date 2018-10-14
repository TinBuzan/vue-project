<template>
  <v-layout row>
    <v-flex xs6 offset-sm3>
      <div class="white elevation-2">
        <!-- Login Toolbar -->
        <v-toolbar flat dense class="green darken-2" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <!-- Login Body -->
        <div class="pl-4 pr-4 pt-4 pb-2">
          <v-text-field type="email" name="email" v-model="email" placeholder="email"></v-text-field>
          <br>
          <v-text-field type="password" name="password" v-model="password" placeholder="password"></v-text-field>
          <br>
          <div class="error" v-html="error" ></div>
          <br>
          <v-btn class="green darken-2" dark @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        // set states
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        console.log(error)
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
