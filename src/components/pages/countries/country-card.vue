<template>
  <v-card class="country-card" elevation="3" :ripple="true" hover>
    <v-card-title class="d-flex align-center">
      <v-icon icon="mdi-earth" class="mr-2" />
      {{ props.country.name }}
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text>
      <v-list>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-flag" color="primary" />
          </template>
          <v-list-item-title>Code: {{ props.country.code }}</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-currency-usd" color="success" />
          </template>
          <v-list-item-title
            >Currency: {{ props.country.currency }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { Types } from "@/graphql";

const props = defineProps<{
  country: Types.Country;
}>();
</script>

<style scoped>
.country-card {
  transition: transform 0.2s;
}

.country-card:hover {
  transform: translateY(-4px);
}
</style>
