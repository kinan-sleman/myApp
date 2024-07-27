<template>
  <div class="h-full flex p-8 flex-col justify-center">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Random Meals</h1>
  </div>
  <Meals :meals="meals" />
  
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import Meals from "./Meals.vue";
const meals = ref([]);
onMounted(async () => {
  const response = await axiosClient.get("random.php");
  meals.value = response.data.meals;
});
</script>

<style></style>
