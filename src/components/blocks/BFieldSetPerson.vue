<script setup>
import UInput from '../ui/UInput.vue'
import checkDigit from '@/utils/checkDigit'
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
  <UInput v-model="data.age" placeholder="Введите возвраст" type="number" @keydown="checkDigit"
    >Возраст</UInput
  >
</template>
