<template>
  <a-space direction="vertical">
    <a-input v-model:value="value" v-on:keyup.enter="handleClick" />
    <a-button @click="handleClick">{{ $t('button.add') }}</a-button>
  </a-space>
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
