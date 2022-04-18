<template>
  <div>
    <ContactCard :contact="contact" v-if="isFetching == false && error == null" />
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
import ContactCard from "@/components/Contact/Card.component.vue";
import { useRoute } from "vue2-helpers/vue-router";

import { defineComponent } from "@vue/composition-api";
import { useContactById } from "@/hooks/useContracts";
export default defineComponent({
  components: {
    ContactCard,
  },

  setup() {
    const route = useRoute();
    let id = route.params.id;
    let { contact, isFetching , error } = useContactById(id);
    return {
      contact,
      isFetching,
      error,
    };
  },
});
</script>

<style>
</style>
