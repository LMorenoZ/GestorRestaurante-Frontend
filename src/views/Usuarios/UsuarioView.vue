<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';

import axios from 'axios';

const route = useRoute()

let usuario = ref();

const getUsuario = async () => {
    try {
        const { data } = await axios.get(`http://localhost:3000/api/usuarios/${route.params.id}`)
        usuario.value = data
    } catch (error) {
        console.log(error)
    }
}

getUsuario()

</script>

<template>

    <!-- Perfil de usuario -->
    <div v-if="usuario">
        <div class="container pt-2">
            <div class="row pt-2 border border-dark">
                <div class="col p-3 mb-2">
                    <img :src="usuario.Foto" />
                    <h2>Steven Mcain</h2>
                    <h4>Director</h4>
                </div>
                <div class="col-8">
                    <div class="col">
                        <h1>Acerca de:</h1>
                        <p class="">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book
                        </p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div class="text-center"></div>
                    <h3>Informacion Adicional</h3>
                    <h4>Nombre: {{ usuario.Nombre }}</h4>
                    <h4>Apellido: {{ usuario.Apellido }}</h4>
                    <h4>Rol: {{ usuario.RolID }}</h4>
                    <h4>Direccion: {{ usuario.Dirección }}</h4>
                    <h4>Email:{{ usuario.Email }}</h4>
                    <h4>Telefono: {{ usuario.Teléfono }}</h4>
                    <h4>DUI: {{ usuario.DUI }}</h4>
                    <h4>Fecha de inicio laboral: {{ usuario.FechaRegistro }}</h4>
                    <br />
                    <br />
                    <br />
                    <button type="button" class="btn btn-outline-primary btn-lg">
                        Cancelar
                    </button>
                    <button class="btn btn-primary btn-lg" type="submit">Guardar</button>
                </div>
            </div>
        </div>
    </div>
    <h2 v-else>No hay informacion</h2>
</template>