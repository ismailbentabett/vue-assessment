	<template>
  <v-container class="fill-height" fluid style="height: 100vh" v-if="contacts">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <router-link :to="`/`" class="text-decoration-none">
          <v-btn  plain color="">
            <v-icon left> mdi-arrow-left </v-icon>
            Go Back to Contacts
          </v-btn>
        </router-link>

        <v-hover v-slot="{ hover }">
          <v-card
            v-ripple
            :elevation="hover ? 16 : 2"
            class="mx-auto cursor-pointer"
            style="cursor: pointer"
          >
            <v-img :src="contact.avatar" height="200px"></v-img>
            <v-card-title
              >{{ contact.first_name }} {{ contact.last_name }}</v-card-title
            >
            <v-card-text class="text--primary">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  computed,
  defineComponent,
  PropType,
  reactive,
} from "@vue/composition-api";
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
    console.log(props.contact);
    let contacts = computed(() => {
      return props.contact;
    });

    let items = reactive([
      { text: contacts.value.phone_number, icon: "mdi-phone" },
      { text: contacts.value.date_of_birth, icon: "mdi-cake" },
      {
        text: contacts.value.social_insurance_number,
        icon: "mdi-card-account-details",
      },
      { text: contacts.value.employment.title, icon: "mdi-cake" },
    ]);




    return {
      contacts,
      items,
    };
  },
});
</script>

<style>
</style>
