<script setup>
import UInput from '../ui/UInput.vue'
import UButton from '../ui/UButton.vue'
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => {}
  }
})
</script>
<template>
  <UInput v-model="data.name" placeholder="Введите имя">Имя</UInput>
  <UInput v-model="data.age" placeholder="Введите возвраст">Возраст</UInput>
</template>
