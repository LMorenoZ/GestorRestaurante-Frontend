import { ref } from 'vue'

import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsuariosStore = defineStore('usuarios', () => {
  // reactive state
  const usuarios = ref([])

  // methods actions
  const getUsuarios = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/usuarios/')

      usuarios.value = data

      // console.log(JSON.parse(JSON.stringify(usuarios.value))); // para ver la info
    } catch (error) {
      console.log(error)
    }
  }

  // computed getters
  
  return { usuarios, getUsuarios }
})
