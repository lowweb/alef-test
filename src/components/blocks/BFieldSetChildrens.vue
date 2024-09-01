<script setup>
import UInput from '../ui/UInput.vue'
import UButton from '../ui/UButton.vue'
import IPlus from '../icons/IPlus.vue'
import { usePersonDataStore } from '@/stores/PersonDataStore'
const personStore = usePersonDataStore()
const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => {}
  }
})
const addChildren = () => {
  personStore.addChildren()
}
const deleteChildren = (id) => {
  personStore.deleteChildren(id)
}
</script>
<template>
  <div class="childrens">
    <UButton
      class="childrens__button childrens__button--add"
      @click="addChildren"
      v-if="Object.keys(personStore.person.childrens).length < 5"
    >
      <template #iconButton> <IPlus /> </template>
      <template #textButton>Добавить ребенка</template>
    </UButton>
    <div class="childrens__row" v-for="(children, index) in data" :key="children.id">
      <UInput v-model="children.name" placeholder="Введите имя" type="text">Имя</UInput>
      <UInput v-model="children.age" placeholder="Введите возвраст" type="number">Возраст</UInput>
      <UButton class="button--flat childrens__button" @click="deleteChildren(children.id)">
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
  position: relative;
  &__button {
    flex-shrink: 1;
    &--add {
      align-self: flex-end;
      position: absolute;
      top: -55px;
    }
  }
  &__row {
    display: grid;
    grid-template-columns: repeat(2, 1fr) max-content;
    align-items: center;
    column-gap: 18px;
  }
}
</style>
