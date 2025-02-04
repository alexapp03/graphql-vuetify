/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from "./vuetify";
import pinia from "../stores";
import router from "../router";

// Apollo
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "@/apollo-client";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .provide(DefaultApolloClient, apolloClient);
}
