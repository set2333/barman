<template>
  <div>
    <textarea v-model="recipes"></textarea>
    <button @click="getRecipes">Get</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps(['ingredients']);
  const recipes = ref('');

  const getRecipes = () => {
    fetch(
      `${process.env.VUE_APP_SERVER_PROTOCOL}://${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}/generate`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      body: JSON.stringify({ ingredients: props.ingredients.value.map(({ name }) => name) }),
    })
      .then(response => response.text())
      .then(text => recipes.value = text)
  }
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    border: 2px solid black;
    border-radius: 5px;
    margin: 5px;
    background-color: red;
  }

  textarea {
    border: 2px solid black;
    border-radius: 5px;
    min-height: 150px;
  }
</style>