<script setup>
    import { RouterLink } from 'vue-router';
    defineProps(['id', 'nombre', 'apellido', 'foto', 'rol'])
</script>

<template>
    <RouterLink :to="`/usuario/${id}`">
        <div class="border border-dark p-3 mb-2 bg-primary text-white" style="width: 18rem">
            <img :src="foto" class="card-img-top" alt="..." />
            <div class="card-body">
                <p>Id: {{ id }}</p>
                <p>Nombre: {{ nombre }}</p>
                <p>Apellido: {{ apellido }}</p>
                <p>Rol: {{ rol }}</p>
            </div>
        </div>
    </RouterLink>
</template>