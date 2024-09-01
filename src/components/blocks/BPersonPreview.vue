<script setup>
import BFieldSet from '../blocks/BFieldSet.vue'
import BForm from '../blocks/BForm.vue'
import { usePersonDataStore } from '@/stores/PersonDataStore'
import getAgeNoun from '@/utils/getAgeNoun'
const personStore = usePersonDataStore()
</script>

<template>
  <BForm>
    <BFieldSet class="form__fieldset">
      <template #legend>Персональные данные</template>
      <template #fieldset>
        <div
          class="person-preview"
          v-if="personStore.person.name != '' || personStore.person.age != ''"
        >
          {{ personStore.person.name }}, {{ personStore.person.age }}
          {{ getAgeNoun(personStore.person.age) }}
        </div>
      </template>
    </BFieldSet>

    <BFieldSet class="form__fieldset">
      <template #legend>Дети</template>
      <template #fieldset>
        <li
          class="childrens-preview__item"
          v-if="Object.keys(personStore.person.childrens).length === 0"
        >
          нет данных
        </li>
        <ul
          class="childrens-preview"
          v-for="(children, index) in personStore.person.childrens"
          :key="index"
        >
          <li class="childrens-preview__item">
            {{ children.name }}, {{ children.age }} {{ getAgeNoun(children.age) }}
          </li>
        </ul>
      </template>
    </BFieldSet>
  </BForm>
</template>

<style lang="scss">
.person-preview {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(--colors-black);
}
.childrens-preview {
  display: flex;
  &__item {
    list-style: none;
    align-self: flex-start;
    border-radius: 5px;
    padding: 10px 20px;
    background: var(--colors-grayl);
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: var(--colors-black);
  }
}
</style>
