<template>
  <div
    :key="meal.idMeal"
    class="bg-white shadow rounded-xl hover:scale-105 transition-all"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-48 object-cover w-full"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold text-orange-500">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi maiores
        dolorum officiis laudantium placeat.
      </p>
      <div class="flex items-center justify-between">
        <YoutubeButton :href="meal.strYoutube">YouTube</YoutubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from '../views/YoutubeButton.vue';
const {meal} = defineProps(['meal'])
</script>

<style></style>
