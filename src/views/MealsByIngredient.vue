<template>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

import store from '../store';
import { useRoute } from 'vue-router';
import Meals from './Meals.vue';
const meals = computed(() => store.state.mealsByIngredient)
const route = useRoute()
onMounted(() => {
store.dispatch('searchMealsByIngredient',route.params.ingredient)
})

</script>

<style>

</style>