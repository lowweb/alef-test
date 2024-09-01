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
  <div class="childrens">
    <!-- <div>{{ data }}</div> -->
    <div class="childrens__row" v-for="(row, index) in data" :key="row.id">
      <UInput v-model="row.name" placeholder="Введите имя">Имя</UInput>
      <UInput v-model="row.age" placeholder="Введите возвраст">Возраст</UInput>
      <UButton class="button--flat childrens__button">
        <template #textButton>Удалить</template>
      </UButton>
    </div>
  </div>
</template>

<style lang="scss">
.childrens {
  display: flex;
  flex-direction: column;
  gap: 10px;
  &__button {
    flex-shrink: 1;
  }
  &__row {
    display: grid;
    grid-template-columns: repeat(2, 1fr) max-content;
    align-items: center;
    column-gap: 18px;
  }
}
</style>
