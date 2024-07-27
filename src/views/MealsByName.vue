<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      class="bg-white w-full rounded border-2 border-orange-500 focus:border-orange-600 border-gray-200"
      placeholder="Search For Meals"
      v-model="keyword"
      @change="searchMeals"
    />
    <Meals :meals="meals" />

  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import Meals from "./Meals.vue";

const route = useRoute()
const keyword = ref("")
const meals = computed((meals) => store.state.searchedMeals)
async function searchMeals() {
  if(keyword.value) {
    store.dispatch("searchMeals", keyword.value)
  } else {
    store.commit('SET_SEARCHED_MEALS', [])
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if(keyword.value) {
    searchMeals()
  }
})
</script>

<style></style>
