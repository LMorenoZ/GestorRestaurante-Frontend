<script setup>
import { storeToRefs } from 'pinia'
import { useMenuStore } from '@/stores/menu.js'

import MenuItem from '@/components/Menu/MenuItem.vue';


const useMenu = useMenuStore()

const { getProductos } = useMenu

const { productos } = storeToRefs(useMenu)



getProductos();


// const mostrarProductos = async() => {
// await getProductos()
// console.log(JSON.parse(JSON.stringify(productos.value)))
// productos.value.forEach(producto => JSON.parse(JSON.stringify(producto)))
// productos.value.forEach(producto => console.log(JSON.parse(JSON.stringify(producto))))
// }

// mostrarProductos()


</script>

<template>
    <h1>Lista de todo el menú</h1>

    <div class="container d-flex flex-wrap">
        <MenuItem class="m-2" v-for="producto in productos" :key='producto.ProductoID' :nombre="producto.Nombre" :foto="producto.Foto"
        :descripcion="producto.Descripcion" :precio="producto.Precio" />
    </div>
</template>