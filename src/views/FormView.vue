<script setup>
import { ref } from 'vue'
import UInput from '../components/ui/UInput.vue'
import UButton from '../components/ui/UButton.vue'
import IPlus from '../components/icons/IPlus.vue'
import BFieldSet from '../components/blocks/BFieldSet.vue'
import BFieldSetPerson from '../components/blocks/BFieldSetPerson.vue'
import BFieldSetChildrens from '../components/blocks/BFieldSetChildrens.vue'
import { usePersonDataStore } from '@/stores/PersonDataStore'
const personStore = usePersonDataStore()
const formData = ref({})

const addNewPerson = () => {
  personStore.addToPerson(formData.value)
}
</script>
<template>
  <div action="" class="form">
    <BFieldSet class="form__fieldset">
      <template #legend>Персональные данные</template>
      <template #fieldset>
        <BFieldSetPerson :data="personStore.person"> </BFieldSetPerson>
      </template>
    </BFieldSet>

    <BFieldSet class="form__fieldset">
      <template #legend>Дети (макс. 5)</template>
      <template #fieldset>
        <BFieldSetChildrens :data="personStore.person.childrens"> </BFieldSetChildrens>
      </template>
    </BFieldSet>
    <UButton class="form__button button--primary">
      <template #textButton>Сохранить</template>
    </UButton>
  </div>

  <!-- <UButton>
    <template #iconButton> <IPlus /> </template>
    <template #textButton>Добавить ребенка</template>
  </UButton>
  <UButton class="button--primary">
    <template #textButton>Сохранить</template>
  </UButton> -->
</template>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;

  &__fieldset {
    margin-bottom: 44px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__button {
    align-self: flex-start;
  }
}
</style>
