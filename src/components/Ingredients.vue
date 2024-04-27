<template>
  <div class="container">
    <div v-for="ingredient of ingredients" :key="ingredient.id" class="ingredient">
      <div>{{ingredient.name}}</div>
      <div @click="() => onRemove(ingredient.id)" class="cross">&cross;</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps(['ingredients', 'onRemove']);
</script>

<style scoped>
  .container {
    display: flex;
    margin-top: 10px;
  }
  
  .ingredient {
    display: flex;
    align-items: center;
    border: 2px solid black;
    border-radius: 5px;
    padding: 2px 5px;
    margin: 5px 5px 5px 0;
    background: aqua;
  }

  .cross {
    border: 1px solid black;
    border-radius: 50%;
    background: red;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
  }
</style>