<script setup>
defineProps(['id', 'usuarioId', 'desc', 'fechaPedido', 'estado'])
</script>

<template>
    <div class="m-3">
        <span class="d-block">Id: {{ id }}</span>
        <span class="d-block">usuarioID: {{ usuarioId }}</span>
        <span class="d-block">Descripcion: {{ desc }}</span>
        <span class="d-block">Fecha: {{ fechaPedido }}</span>
        <span class="d-block">Estado: {{ estado }}</span>
    </div>
</template>