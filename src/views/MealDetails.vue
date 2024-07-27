<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-full"/>
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-3">
      <div>
        <strong class="font-bold text-orange-500"> Category: </strong>
        {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold text-orange-500"> Area: </strong>
        {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold text-orange-500"> Tags: </strong>
        {{ meal.strTags }}
      </div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h3 class="text-2x1 font-semibold mb-3 font-bold text-orange-500">Ingredients</h3>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h3 class="text-2x1 font-semibold mb-3 font-bold text-orange-500">Measures</h3>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <YoutubeButton :href="meal.strYoutube">Go To Youtube </YoutubeButton>
      <a
        class="ml-3 px-3 py-2 rounded border-2  text-indigo-700 hover:bg-indigo-600 hover:text-white border-2 border-transparent transition-colors"
        :href="meal.strSource"
        target="_blank"
      >
        View Original Source
    </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosCLient from "../axiosClient";
import YoutubeButton from "./YoutubeButton.vue";

const meal = ref([]);
const route = useRoute();

onMounted(() => {
  axiosCLient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

<style></style>
