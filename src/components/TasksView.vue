<script setup>
import { useCounterStore } from '../stores/TaskStore';

const store = useCounterStore();

const editObject = (item) => {
    store.isEdit = true
    store.newObject = { id: item.id, name: item.name, lastName: item.lastName, age: item.age };
}
</script>

<template>
    <div>
        <div v-if="store.data.length > 0">
            <div v-for="(item, index) in store.data" :key="index">
                <p>Name: {{ item?.name }}</p>
                <p>Last Name: {{ item?.lastName }}</p>
                <p>Age: {{ item?.age }}</p>
                <hr />
                <button @click="editObject(item)">Editar</button>
                <button @click="store.removeObject(item)">Remover</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
