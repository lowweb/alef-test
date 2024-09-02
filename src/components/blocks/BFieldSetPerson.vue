<script setup>
import UInput from '../ui/UInput.vue'
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => {}
  }
})
</script>
<template>
  <UInput v-model="data.name" placeholder="Введите имя" type="text">Имя</UInput>
  <UInput v-model="data.age" placeholder="Введите возвраст" type="number">Возраст</UInput>
</template>
