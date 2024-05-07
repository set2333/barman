<template>
  <div id="app">
    <a-typography>
      <a-typography-title>{{ $t('header.title') }}</a-typography-title>
      <a-typography-paragraph>{{ $t('header.text') }}</a-typography-paragraph>
    </a-typography>
    <Input :onClick="addIngredient" />
    <Ingredients :ingredients="ingredients" :onRemove="removeIngredient" />
    <Recipes :ingredients="ingredients" />
  </div>

</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Input from './components/Input.vue';
  import Ingredients from './components/Ingredients.vue';
  import Recipes from './components/Recipes.vue';

  const ingredients = ref([]);

  const addIngredient = (name: string) => {
    ingredients.value.push({ name, id: Date.now() })
  }

  const removeIngredient = (ingredientId: number) => {
    ingredients.value = ingredients.value.filter(({ id }) => id !== ingredientId)
  }
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 800px;
    margin: 0 auto;
  }
</style>
