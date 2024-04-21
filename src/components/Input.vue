<template>
  <input v-model="value"/>
  <button @click="() => onClick(value)">Add</button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  defineProps(['onClick'])
  const value = ref('');
</script>