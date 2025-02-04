<template>
  <v-card>
    <v-card-title class="text-h4">
      <span class="me-2">{{ country.emoji }}</span>
      {{ country.name }}
    </v-card-title>

    <v-card-text>
      <v-list>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-translate" color="primary" />
          </template>
          <v-list-item-title
            >Native Name: {{ country.native }}</v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-currency-usd" color="success" />
          </template>
          <v-list-item-title
            >Currency: {{ country.currency }}</v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-city" color="info" />
          </template>
          <v-list-item-title>Capital: {{ country.capital }}</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-phone" color="warning" />
          </template>
          <v-list-item-title
            >Phone Code: +{{ country.phone }}</v-list-item-title
          >
        </v-list-item>

        <v-list-item v-if="country.languages?.length">
          <template v-slot:prepend>
            <v-icon icon="mdi-earth" color="primary" />
          </template>
          <v-list-item-title>
            Languages:
            <v-chip
              v-for="lang in country.languages"
              :key="lang.code"
              class="ma-1"
              size="small"
            >
              {{ lang.name }}
            </v-chip>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" to="/countries">
        <v-icon start icon="mdi-arrow-left" />
        Back to Countries
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { Types } from "@/graphql";

const props = defineProps<{
  country: Types.Country;
}>();
</script>

<style scoped></style>

<style scoped></style>
