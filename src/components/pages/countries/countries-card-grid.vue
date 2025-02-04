<template>
  <v-row v-if="loading">
    <v-col v-for="n in 8" :key="n" cols="12" sm="6" md="4" lg="3">
      <v-card>
        <v-skeleton-loader type="card" height="200" />
      </v-card>
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col
      v-for="country in props.countries"
      :key="country.code"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <country-card :country="country" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { Types } from "@/graphql";

const props = defineProps<{
  countries: Types.Country[];
  loading: boolean;
}>();
</script>

<style scoped></style>
