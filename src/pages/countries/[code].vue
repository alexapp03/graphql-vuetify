<template>
  <section>
    <v-container>
      <div v-if="loading" class="d-flex justify-center">
        <v-progress-circular indeterminate color="primary" />
      </div>

      <v-row v-else-if="result?.country" justify="center">
        <v-col cols="12" md="8">
          <country-card-full :country="result.country" />
        </v-col>
      </v-row>

      <div v-else class="text-center">
        <p>Country not found</p>
        <v-btn color="primary" to="/countries" class="mt-4">
          Back to Countries
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { Queries, Types } from "@/graphql";
import { useRoute } from "vue-router";

const route = useRoute();
const countryCode = route.params.code as string;

const { result, loading, error } = useQuery<
  Types.CountryQuery,
  Types.CountryQueryVariables
>(Queries.GET_COUNTRY, { code: countryCode });
</script>
