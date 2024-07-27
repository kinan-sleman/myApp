<template>
  <div class="flex gap-1 justify-center mt-2 gap-2 items-center flex-wrap text-orange-700">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <Meals :meals="meals" />

</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "./Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);
watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<style></style>
