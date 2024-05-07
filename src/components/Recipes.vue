<template>
  <a-space direction="vertical">
    <a-textarea
      v-if="recipes"
      v-model:value="recipes"
      autosize
    />
    <a-button @click="getRecipes">{{ $t('button.get') }}</a-button>
  </a-space>
  <contextHolder />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { notification } from 'ant-design-vue';
  import { useI18n } from 'vue-i18n';

  const props = defineProps(['ingredients']);
  const recipes = ref('');
  const { t } = useI18n();

  const [api, contextHolder] = notification.useNotification();

  const getRecipes = () => {
    fetch(
      `${process.env.VUE_APP_SERVER_PROTOCOL}://${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}/generate`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ ingredients: props.ingredients.map(({ name }) => name) }),
    })
      .then(response => response.text())
      .then(text => recipes.value = text)
      .catch(() => api.error({
        message: t('error'),
        placement: 'topRight',
      }))
  };
</script>
