<template>
  <input v-model="value"/>
  <button @click="handleClick">Add</button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const props = defineProps(['onClick']);

  const value = ref('');
  const handleClick = () => {
    props.onClick(value.value);
    value.value = '';
  };
</script>

<style scoped>
  input {
    border: 2px solid black;
    border-radius: 5px;
  }

  button {
    border: 2px solid black;
    border-radius: 5px;
    margin: 5px;
    background-color: red;
  }
</style>