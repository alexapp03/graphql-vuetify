<template>
  <section>
    <h3 class="text-h3 mb-4 text-center">Countries</h3>
    <v-container>
      <countries-card-grid
        :countries="result?.countries || []"
        :loading="loading"
      />
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { Qeries, Types } from "@/graphql";
import { useQuery } from "@vue/apollo-composable";

const { result, loading } = useQuery<Types.CountriesQuery>(
  Qeries.GET_COUNTRIES
);
</script>

<style scoped></style>
