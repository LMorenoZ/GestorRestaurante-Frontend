<script setup>
import { storeToRefs } from 'pinia'
import { usePedidosStore } from '@/stores/pedidos.js'

import PedidoItem from '@/components/PedidoItem.vue';


const usePedidos = usePedidosStore()

const { getPedidos } = usePedidos

const { pedidos } = storeToRefs(usePedidos)


getPedidos();

// const mostrarProductos = async() => {
// await getProductos()
// console.log(JSON.parse(JSON.stringify(productos.value)))
// productos.value.forEach(producto => JSON.parse(JSON.stringify(producto)))
// productos.value.forEach(producto => console.log(JSON.parse(JSON.stringify(producto))))
// }

// mostrarProductos()


</script>

<template>
    <h1>Lista de todos los pedidos</h1>
    <PedidoItem v-for="pedido in pedidos" :key="pedido.PedidoID" 
        :id="pedido.PedidoID"
        :usuarioId="pedido.UserID"
        :desc="pedido.Descripcion"
        :fechaPedido="pedido.FechaHoraPedido"
        :estado="pedido.Estado"
    />
</template>