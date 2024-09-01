<script setup>
import { ref } from 'vue'
import router from '@/router'
import BFieldSet from '../blocks/BFieldSet.vue'
import BForm from '../blocks/BForm.vue'
import BFieldSetPerson from '../blocks/BFieldSetPerson.vue'
import BFieldSetChildrens from '../blocks/BFieldSetChildrens.vue'
import UButton from '../ui/UButton.vue'
import { usePersonDataStore } from '@/stores/PersonDataStore'
const personStore = usePersonDataStore()
const formData = ref({})

const savePersonInfo = () => {
  // personStore.savePersonInfo(formData.value)
  router.push('/preview')
}
</script>

<template>
  <BForm>
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
    <UButton class="form__button button--primary" @click="savePersonInfo">
      <template #textButton>Сохранить</template>
    </UButton>
  </BForm>
</template>

<style lang="scss"></style>
