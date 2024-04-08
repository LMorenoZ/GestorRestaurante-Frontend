<script setup>
    defineProps(['nombre', 'foto', 'descripcion', 'precio'])
</script>

<template>
    <!-- Mirar el ejemplo de tarjeta para ver como funciona. Las propiedades que mostrara la información deben estar
    entre las llaves, y tienen que tener el mismo nombre que la que se declaran arriba. -->

    <div class="card" style="width: 18rem;">
        <img :src="foto" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ nombre }}</h5>
            <p class="card-text">{{  descripcion }}</p>
            <a href="#" class="btn btn-primary">${{ precio }}</a>
        </div>
    </div>

    
</template>