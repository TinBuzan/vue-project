<template>
  <v-layout row>
    <v-flex xs6 offset-sm3>
      <div class="white elevation-2">
        <!-- Register Toolbar-->
        <v-toolbar flat dense class="green darken-2" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <!-- Register Body-->
        <div class="pl-4 pr-4 pt-4 pb-2">
          <v-text-field type="email" name="email" v-model="email" placeholder="email"></v-text-field>
          <br>
          <v-text-field type="password" name="password" v-model="password" placeholder="password"></v-text-field>
          <br>
          <div class="error" v-html="error" ></div>
          <br>
          <v-btn class="green darken-2" dark @click="register">Go</v-btn>
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
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        console.log(error)
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
