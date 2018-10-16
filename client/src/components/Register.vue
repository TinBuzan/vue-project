<template>
  <v-layout row>
    <v-flex xs6 offset-sm3>
      <panel title='Register'>
        <form name="fin-tracker-form" autocomplete="off">
          <v-text-field type="email" name="email" v-model="email" placeholder="email"></v-text-field>
          <br>
          <v-text-field type="password" name="password" v-model="password" placeholder="password"></v-text-field>
          <br>
          <div class="error" v-html="error" ></div>
          <br>
          <v-btn class="green darken-2" @click="register" dark>Sign Up</v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

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
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        // set states
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'financialdata'
        })
      } catch (error) {
        console.log(error)
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
