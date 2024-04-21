<template>
  <div :class="containerClass">
    <div v-for="ingredient of ingredients" :key="ingredient.id" :class="ingredientClass">
      <div>{{ingredient.name}}</div>
      <div @click="() => onRemove(ingredient.id)" :class="crossClass">&cross;</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue' 

  defineProps(['ingredients', 'onRemove']);
  const containerClass = ref('container');
  const ingredientClass = ref('ingredient');
  const crossClass = ref('cross');
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
    margin: 5px;
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