import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePersonDataStore = defineStore('personDataStore', () => {
  const person = ref({
    name: '',
    age: '',
    childrens: []
  })
  let maxId = 1

  const savePersonInfo = (object) => {
    person.value = object
  }

  const addChildren = () => {
    person.value.childrens.push({ id: maxId, name: '', age: '' })
    maxId = maxId + 1
  }
  const deleteChildren = (id) => {
    person.value.childrens = person.value.childrens.filter((el) => el.id != id)
  }
  return {
    person,
    maxId,
    savePersonInfo,
    addChildren,
    deleteChildren
  }
})
