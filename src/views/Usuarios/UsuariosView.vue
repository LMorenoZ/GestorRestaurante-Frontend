<script setup>
import { storeToRefs } from 'pinia'

import UserCard from '@/components/UserCard.vue';

import { useUsuariosStore } from '@/stores/usuarios.js'

const useUsuarios = useUsuariosStore()


const { usuarios } = storeToRefs(useUsuarios)

const { getUsuarios } = useUsuarios

getUsuarios()
</script>

<template>
    <h1>Usuarios</h1>
    <div class="d-flex justify-content-center">
        <div class=" pt-4">
            <UserCard v-for="usuario in usuarios" :key="usuario.UserID" 
                :id="usuario.UserID"
                :nombre="usuario.Nombre"
                :apellido="usuario.Apellido"
                :foto="usuario.Foto"
                :rol="usuario.RolID"
            />
        </div>
    </div>
</template>