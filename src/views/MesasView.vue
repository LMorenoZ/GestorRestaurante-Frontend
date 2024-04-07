<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <h1>Mesas:</h1>
    <button class="btn btn-primary" @click="router.push('/nuevoPedido')">Crear nuevo pedido</button>
</template>