<template>
  <v-toolbar fixed class="green darken-3" dark>
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigateTo({ name:'root' })">FinTracker</span>
    </v-toolbar-title>

    <v-toolbar-items v-if="$store.state.isUserLoggedIn" @click="navigateTo({ name:'financialdata' })">
      <v-btn flat dark>
        Data
      </v-btn>
    </v-toolbar-items>

    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Weekly Spendings
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({ name:'login' })">
        Login
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({ name:'register' })">
        Sign Up
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #2b2b2b
}
</style>
