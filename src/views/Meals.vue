<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :meal="meal" :key="meal.idMeal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-orange-500">
    There are no meals
  </div>
</template>

<script setup>
import MealItem from '../components/MealItem.vue';

const {meals} = defineProps({
  meals: {
    required: true,
    type: Object
  }
})
</script>

<style>

</style>