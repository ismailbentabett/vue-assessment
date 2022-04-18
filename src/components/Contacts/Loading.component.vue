<template>
  <v-container fluid>

    <v-row>
      <v-col
        v-for="i in 30"
        :key="i"
        class="mt-2 mb-2"
        color="grey lighten-3"
        cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="3"
      >
        <v-skeleton-loader
          class="mx-auto"

          type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
