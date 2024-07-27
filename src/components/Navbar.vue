<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch px-5 gap-5 md:gap-0">
  <router-link class="inline-flex text-2xl items-center h-full text-orange-500 font-bold" :to="{ name: 'home' }"
      >Home</router-link
    >
    <div class="flex gap-1 items-center">
      <router-link
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white text-sm md:text-[17px]"
        :to="{ name: 'byName' }"
        >by Name</router-link
      >
      <router-link
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white text-sm md:text-[17px]"
        :to="{ name: 'byLetter' }"
        >Letters</router-link
      >
      <router-link
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white text-sm md:text-[17px]"
        :to="{ name: 'Ingredients' }"
        >Ingredients</router-link
      >
    </div>
  </header>
</template>

<script setup>
</script>

<style></style>
