<template>
  <div>
    <v-text-field
      v-model="search"
      label="Search Contacts"
      class="mx-12 my-12"
      flat
      hide-details
      clearable
      outlined
      clear-icon="mdi-close-circle-outline"
    ></v-text-field>

    <Loading v-if="isFetching" />
    <v-progress-circular
      v-if="isFetching"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>

    <div class="black--text mx-5" v-if="isFetching === false">
      <h1>{{ filtered.length }} Contact(s)</h1>
    </div>
    <v-container fluid v-if="isFetching == false && error == null">
      <v-row>
        <v-col
          v-for="item in filtered"
          :key="item.uid"
          class="mt-2 mb-2"
          color="grey lighten-3"
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="3"
        >
          <router-link :to="`/contact/${item.id}`" class="text-decoration-none">
            <ContactsCard :contact="item" v-if="isFetching === false" />
          </router-link>
        </v-col>
      </v-row>
    </v-container>
         <v-alert
      v-if="error"
      text
      prominent
      type="error"
      icon="mdi-cloud-alert"
    >
      {{ error }}
    </v-alert>
  </div>
</template>

<script>
import Loading from "@/components/Contacts/Loading.component.vue";
import {  defineComponent } from "@vue/composition-api";
import { useContacts } from "@/hooks/useContracts";
import ContactsCard from "@/components/Contacts/Card.component.vue";

export default defineComponent({
  components: {
    ContactsCard,
    Loading,
  },

  setup() {
    let { isFetching, search, filtered } = useContacts();

    return {
      isFetching,
      search,
      filtered,
    };
  },
});
</script>

<style>
</style>
