import { ref } from 'vue'

import { defineStore } from "pinia";
import axios from 'axios';

export const usePedidosStore = defineStore('pedidos', () => {
    // reactive state
    const pedidos = ref([])

    // methods actions
    const getPedidos = async() => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/pedidos/');
        
            pedidos.value = data

            // console.log(JSON.parse(JSON.stringify(pedidos.value))); // para ver la info 
        } catch (error) {
            console.log(error)
        }
    }

    // computed getters
    const showPedidos = () => pedidos.value;
    

    return {  pedidos, getPedidos, showPedidos }
})