import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useCounterStore = defineStore("task", {
  state: () => ({
    data: [],
    isEdit: false,
    newObject: {
      id: "",
      name: "",
      lastName: "",
      age: null,
    },
  }),
  actions: {
    addNewObject() {
      if (this.isEdit) {
        this.editObject(this.newObject);
        this.isEdit = false;
      } else {
        this.newObject.id = uuidv4();
        this.data = [...this.data, { ...this.newObject }];
        this.newObject = { id: "", name: "", lastName: "", age: null };
        this.isEdit = false;
      }
    },
    removeObject(objectToRemove) {
      this.data = this.data.filter((e) => e.id !== objectToRemove.id);
    },
    editObject(editedObject) {
      const index = this.data.findIndex((e) => e.id === editedObject.id);
      if (index !== -1) {
        const updatedData = [...this.data];
        updatedData[index] = { ...updatedData[index], ...editedObject };
        this.data = updatedData;
      } else {
        console.error("Objeto não encontrado para edição.");
      }
    },
  },
  getters: {
    showData() {
      return this.data;
    },
  },
});
