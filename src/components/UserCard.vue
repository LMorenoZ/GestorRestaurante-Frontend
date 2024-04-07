<script setup>
    defineProps(['nombre', 'apellido', 'foto', 'rol'])
</script>

<template>
    <div class="border border-dark p-3 mb-2 bg-primary text-white" style="width: 18rem">
        <img :src="foto" class="card-img-top" alt="..." />
        <div class="card-body">
            <p>Nombre: {{ nombre }}</p>
            <p>Apellido: {{ apellido }}</p>
            <p>Rol: {{ rol }}</p>
        </div>
    </div>
</template>