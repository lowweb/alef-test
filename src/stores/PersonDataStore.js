import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePersonDataStore = defineStore('personDataStore', () => {
  const person = ref({
    name: 'dewdewde',
    age: '20',
    childrens: [
      {
        name: 'frefef',
        age: '2'
      },
      {
        name: 'frejfirt',
        age: '3'
      }
    ]
  })
  const addToPerson = (object) => {
    person.value = object
    console.log('add')
  }

  return {
    person,
    addToPerson
  }
})
