<template>
  <a
    class="px-3 py-2 rounded border-2 border-orange-600 bg-orange-500 hover:bg-orange-600 text-white transition-colors"
    :href="href"
    target="_blank"
    >
    <slot></slot>
    </a
  >
</template>

<script setup>

const props = defineProps(['href'])
</script>

<style></style>
