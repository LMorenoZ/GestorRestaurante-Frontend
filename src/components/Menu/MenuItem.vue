<script setup>
    defineProps(['nombre', 'foto', 'descripcion', 'precio'])
</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="foto" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ nombre }}</h5>
            <p class="card-text">{{  descripcion }}</p>
            <a href="#" class="btn btn-primary">${{ precio }}</a>
        </div>
    </div>
</template>