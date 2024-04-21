<template>
  <Input :onClick="addIngredient" />
  <Ingredients :ingredients="ingredients" :onRemove="removeIngredient" />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Input from './components/Input.vue';
  import Ingredients from './components/Ingredients.vue';

  const ingredients = ref([{ name: 'test', id: 0 }]);

  const addIngredient = (name: string) => {
    ingredients.value.push({ name, id: Date.now() })
  }

  const removeIngredient = (ingredientId: number) => {
    console.log('ingredientId', ingredientId)
    ingredients.value = ingredients.value.filter(({ id }) => id !== ingredientId)
  }
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
