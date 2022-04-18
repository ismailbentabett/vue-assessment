<template>
  <v-hover v-slot="{ hover }">
    <v-card
      v-ripple
      :elevation="hover ? 16 : 2"
      class="mx-auto cursor-pointer"

      style="cursor: pointer "
    >
      <v-img :src="contact.avatar" height="200px"></v-img>

      <v-card-title>
        {{ contact.first_name }} {{ contact.last_name }}
      </v-card-title>

      <v-card-subtitle>
        <v-icon medium color="gray darken-2"> mdi-email </v-icon>
        {{ contact.email }}
      </v-card-subtitle>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-icon large color="teal darken-2"> mdi-email </v-icon>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
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
