<template>
  <a-spase class="container">
    <a-tag
      v-for="ingredient of ingredients"
      :key="ingredient.id"
      closable
      @close="() => onRemove(ingredient.id)"
    >
      {{ingredient.name}}
    </a-tag>
  </a-spase>  
</template>

<script setup lang="ts">
  defineProps(['ingredients', 'onRemove']);
</script>

<style scoped>
  .container {
    margin: 10px 0;
  }
</style>