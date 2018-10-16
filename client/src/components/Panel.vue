<template>
  <div class="white elevation-2">
    <!-- Panel Toolbar -->
    <v-toolbar flat dense class="green darken-2" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>

    <!-- Panel Body -->
    <div class="pl-4 pr-4 pt-4 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
