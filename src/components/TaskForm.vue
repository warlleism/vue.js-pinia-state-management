<script setup>
import { useCounterStore } from '../stores/TaskStore'
const store = useCounterStore()

const addNewObject = () => {
  store.addNewObject();
}

const cancelEdit = () => {
  store.isEdit
  store.newObject = { id: '', name: '', lastName: '', age: '' };
}

</script>

<template>
  <div>
    <label for="name">Nome:</label>
    <input v-model="store.newObject.name" id="name" />
    <label for="lastName">Sobrenome:</label>
    <input v-model="store.newObject.lastName" id="lastName" />
    <label for="age">Idade:</label>
    <input v-model="store.newObject.age" id="age" />
    <button @click="addNewObject">{{ !store.isEdit ? 'Criar novo item' : 'Editar' }}</button>
    <button v-if="store.isEdit" @click="cancelEdit">cancelar</button>
  </div>
</template>



<style scoped></style>
