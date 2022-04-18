<template>
  <v-hover v-slot="{ hover }">
    <v-card
      v-ripple
      :elevation="hover ? 16 : 2"
      class="mx-auto cursor-pointer"
      style="cursor: pointer"
    >
      <v-img :src="contact.avatar" height="200px"></v-img>

      <v-card-title>
        {{ contact.first_name }} {{ contact.last_name }}
      </v-card-title>

      <v-card-subtitle>
        <v-icon medium color="gray darken-2"> mdi-email </v-icon>
        {{ contact.email }}
      </v-card-subtitle>
    </v-card>
  </v-hover>
</template>

<script>
import { computed, defineComponent, PropType } from "@vue/composition-api";
import { Contact } from "@/hooks/useContracts";

export default defineComponent({
  components: {},
  props: {
    contact: {
      type: Contact,
      required: true,
    },
  },
  setup(props) {
    let contacts = computed(() => {
      return props.contact;
    });
    return {
      contacts,
    };
  },
});
</script>

<style>
</style>
