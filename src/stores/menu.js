import { ref } from 'vue'

import { defineStore } from "pinia";
import axios from 'axios';

export const useMenuStore = defineStore('menu', () => {
    // reactive state
    const productos= ref([])

    // methods actions
    const getProductos = async() => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/productos/');
        
            productos.value = data

            // console.log(JSON.parse(JSON.stringify(productos.value))); // para ver la info 
        } catch (error) {
            console.log(error)
        }
    }

    // computed getters
    const showProductos = () => productos.value;
    

    return {  productos, getProductos, showProductos }
})